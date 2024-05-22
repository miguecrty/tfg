const express = require('express');
const cassandra = require('cassandra-driver');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const app = express();
/* CLUSTER
const client = new cassandra.Client({
  contactPoints: [process.env.CASSANDRA],
  localDataCenter: process.env.DATACENTER,
  protocolOptions: { port: process.env.PORT },
  keyspace: process.env.KEYSPACE,
  credentials: {
    username: 'cassandra',
    password: 'cassandra'
  }
});
*/
//   LOCAL
const client = new cassandra.Client({
  contactPoints: ['10.88.0.12'],
  localDataCenter: 'datacenter1',
  protocolOptions: { port: 9042 },
  keyspace: 'tfg',
  credentials: {
    username: 'cassandra',
    password: 'cassandra'
  }
});



app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Array para almacenar los clientes conectados
const clients = [];
//ms
const TIEMPO_SONDEO=10000
// Iniciar el servidor
const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});
let intervalos ={}
intervalos['usuario']={}
// Establecer una conexión WebSocket
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

// Manejar las conexiones WebSocket
wss.on('connection', ws => {
  console.log('Cliente conectado');
  const client = { ws, res: null };

  // Agregar el cliente a la lista de clientes conectados
  clients.push(client);
  // Manejar la desconexión del cliente
  ws.on('close', () => {
    console.log('Cliente desconectado');
    // Eliminar el cliente de la lista de clientes conectados
    clients.splice(clients.indexOf(client), 1);
  });
  ws.send('¡Hola desde el servidor!');
  ws.on('message', message => {

      const mensaje = JSON.parse(message.toString());
      const latitud = mensaje.geometry.location.lat;
      const longitud = mensaje.geometry.location.lng;
      const usuario = mensaje.username;
  });
});
async function actualizarTablaUsu(usuario,nombre_lugar,lat,lon) {
    
    let exito=false;
    const resultado = await client.execute("SELECT lugares FROM usuarios WHERE nombre_usu='"+usuario+"'");
    let bandera=false;
    let lista =resultado.rows[0].lugares;
    if(lista == null)
    {
    lista = {}
    }
    else
    {
      const nombresEnLista = Object.keys(lista);
      if (nombresEnLista.includes(nombre_lugar))
        {
          bandera = true;
        }  
    }
    if(bandera==false)
    {
      lista[nombre_lugar]=lat+"|"+lon;
      try {
      const resultado = await client.execute('UPDATE usuarios SET lugares = ? WHERE nombre_usu = ?', 
      [lista, usuario],
      {prepare: true}
    );
      exito=true;
      }catch (error) {
        console.log("Error al realizar el update");
    }
    }
    return exito;
}

app.post('/iniciarsondeo', async (req, res) => {
  try {
    const usuario = req.body.usuario;
    let nombre_lugar= req.body.nombre_lugar;
    const latitud= req.body.lat.toString();
    const longitud= req.body.lng.toString();
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitud + '&lon=' + longitud + '&appid=fd10b0dcb392959b10aa51f78462f9fd&lang=es';
    const response = await axios.get(url);
    nombre_lugar = response.data.name;
    const noexiste=await actualizarTablaUsu(usuario,nombre_lugar,latitud,longitud);
    if(noexiste){
    console.log("...........................\nIniciando sondeo para el usuario: "+usuario);
    let intervaloID=setInterval(async () => {
        try {
            const response = await axios.get(url);
            const nombre_lugar = response.data.name;
            const tiempo = response.data.weather[0];
            delete tiempo.id;
            delete tiempo.main;
            const temperatura = response.data.main;
            delete temperatura.sea_level;
            delete temperatura.grnd_level;
            const viento = response.data.wind;
            delete tiempo.gust;
            const nubes = response.data.clouds;
            try{
            const result = await client.execute(
                "INSERT INTO datos_"+usuario+"(nombre_lugar, nubes, temperatura, tiempo, viento, toma) VALUES (?, ?, ?, ?, ?, toTimeStamp(now()));",
                [nombre_lugar, nubes, temperatura, tiempo, viento],
                { prepare: true }
            );
          }
          catch(error){
            console.error(error);
          }
            
        } catch (error) {
            console.error(error);
        }
    }, TIEMPO_SONDEO);
    console.log("Sondeo iniciado con exito\n...........................");
    intervalos[usuario][nombre_lugar]=intervaloID;
    res.sendStatus(200).json({exito: "Sondeo iniciado con exito"});
   } 
   else{
    console.log("Lugar ya existente");
    res.sendStatus(401).json({error:"Lugar ya existente"});
  }
} catch (error) { 
}
});

  



async function crearTabla(usu)
{
  try {
    const result = await client.execute("CREATE TABLE IF NOT EXISTS tfg.datos_"+usu+
      "(nombre_lugar TEXT," +
      "tiempo map<TEXT,TEXT>," +
      "temperatura map<text,float>," +
      "viento map<text,float>," +
      "nubes map<text,float>, "+
      "toma TIMESTAMP, "+
      "PRIMARY KEY(nombre_lugar,toma)) WITH CLUSTERING ORDER BY(toma DESC);"
    );
    console.log("TABLA datos_"+usu+" CREADA CORRECTAMENTE");
  } catch (error) {
    console.error('Error al obtener datos de la tabla:', error);
  }
}



app.get('/obtenerlista', async (req, res) => {
  try {
    const username = req.query.usuario;
    try {
      const result = await client.execute("SELECT lugares FROM usuarios WHERE nombre_usu='"+username+"' ALLOW FILTERING;");
      if(result.rows.length > 0) {
        const lugares = result.rows[0].lugares;;
        res.status(200).json(lugares); // Enviar la lista de lugares como respuesta
      } else {
        res.status(401).json({ error: 'Usuario no existe en la BBDD' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error al consultar la base de datos' });
    }
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Usuario:", username);
    console.log("Contraseña:", password);

    try {
      const result = await client.execute("SELECT * FROM usuarios WHERE nombre_usu=? AND clave=? ALLOW FILTERING",[username,password]);
      if(result.rows.length > 0)
      {
      res.sendStatus(200); 
      }
      else{
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    } catch (error) {
      console.log(error);

    }
  
  } catch (error) {
    console.error('Error al procesar la solicitud de inicio de sesión:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud de inicio de sesión' });
  }
});

app.get('/prueba', async (req, res) => {
  try {
    const username = req.usuario;
    console.log(username);

  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});

app.post('/compruebausu', async (req, res) => {
  try {
    const username = req.body;
    console.log(username.usuario);
    try {
      const result = await client.execute("SELECT * FROM usuarios WHERE nombre_usu='"+username.usuario+"' ALLOW FILTERING;");
      if(result.rows.length == 0)
      {
      res.sendStatus(200); 
      }
      else{
        res.status(401).json({ error: 'Usuario existe en BBDD' });
      }
    } catch (error) {
      console.log(error);

    }
  
  } catch (error) {
    console.error('Error al procesar la solicitud de inicio de sesión:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud de inicio de sesión' });
  }


});


app.post('/registrar', async (req, res) => {
    const { username, password } = req.body;
    try {
      const result = await client.execute("INSERT INTO usuarios (nombre_usu,clave,lugares) VALUES (?,?,?)",[username,password,null]);
      console.log("USUARIO "+username+" INSERTADO CORRECTAMENTE");
      crearTabla(username);
      intervalos[username]={};
      console.log(intervalos);
      res.sendStatus(200); 
    } catch (error) {
      res.status(401).json({ error: 'Usuario existe en BBDD' });
      console.log(error);
    }

});

app.get('/obtenerdatosgraficatemperatura', async (req, res) => {
  try {
    const username= req.query.usuario;
    const lugar = req.query.lugar;
    try {
      const result = await client.execute("SELECT toma,temperatura,nubes,viento,tiempo FROM datos_"+username+" WHERE nombre_lugar='"+lugar+"' ORDER BY toma ALLOW FILTERING;");
      if(result.rows.length > 0) {
        const data=result.rows;
        
        const listatomas = data.map(item => {
          const fecha = new Date(item.toma);
          const mes = fecha.getMonth() + 1;
          const dia = fecha.getDate();
          const horas = fecha.getHours();
          const minutos = fecha.getMinutes();
          return `${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia} ${horas}:${minutos < 10 ? '0' : ''}${minutos}`;
      });
      const tiempo_actual =data[(data.length-1)].tiempo.description;
      const icono_tiempo = data[(data.length-1)].tiempo.icon;
      const viento_direccion = data[(data.length-1)].viento.deg;
      const viento_velocidad = data[(data.length-1)].viento.speed;
      const nubes_actual = data[(data.length-1)].nubes.all;
      const listahumedad = data.map(item => item.temperatura.humidity);
      const sensacionTermica = data.map(item => item.temperatura.feels_like-273.15);
      const presion = data.map(item => item.temperatura.pressure);
      const temperaturas = data.map(item => (item.temperatura.temp-273.15));
      const maxTemperaturas = data.map(item => (item.temperatura.temp_max-273.15));
      const minTemperaturas = data.map(item => (item.temperatura.temp_min-273.15));

      
      const datos ={
        datosClimaticos:{
        humedad:listahumedad,
        sensacionTermica:sensacionTermica,
        presion:presion,
        temperaturas:temperaturas,
        maxTemperaturas:maxTemperaturas,
        minTemperaturas:minTemperaturas,
        tomas:listatomas
        },
        datosActuales:{
          viento_direccion:viento_direccion,
          viento_velocidad:viento_velocidad,
          nubes_actual:nubes_actual,
          tiempo_actual:tiempo_actual,
          icono:icono_tiempo
        }
      }
        res.status(200).json(datos); // Enviar la lista de lugares como respuesta
      } else {
        res.status(401).json({ error: 'Usuario no existe en la BBDD' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error al consultar la base de datos' });
    }
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});


app.get('/obtenerpronostico', async (req, res) => {
  try {
    const latitud=req.query.lat;
    const longitud = req.query.lon;
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitud + '&lon=' + longitud + '&appid=854c5489c0f85d6fd1fd9a30d77eee0a&lang=es';
       const response = await axios.get(url);
       const lista_datos =response.data.list;
       const temperaturas = {}
       const descripcion_tiempo = {}
       const nubes = {}
       const viento ={}
       lista_datos.forEach(element => {
        temperaturas[element.dt_txt]={temp:(element.main.temp-273.15).toFixed(2),temp_min:(element.main.temp_min-273.15).toFixed(2),temp_max:(element.main.temp_max-273.15).toFixed(2)}; 
        descripcion_tiempo[element.dt_txt]={description:element.weather[0].description,icon:element.weather[0].icon,sunrise:element};
        nubes[element.dt_txt]=element.clouds.all;
        viento[element.dt_txt]={speed:element.wind.speed,deg:element.wind.deg};
       });
       function obtenerDiaSemana(fecha) {
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const fechaObj = new Date(fecha);
        const diaSemanaNum = fechaObj.getDay();
        return diasSemana[diaSemanaNum];
    }
    function separarDatos(data, type) {
        const separatedData = {};
        for (const [dateTime,value] of Object.entries(data)) {
            const [date,hora] = dateTime.split(" ");
            const horaf=hora.slice(0, -3);
            // Extraer la fecha (día) de la clave
            const diaSemana = obtenerDiaSemana(date);
            if (!separatedData[diaSemana]) {
                separatedData[diaSemana] = {};
                // Si el día no existe en el objeto, inicializarlo
            }
            
            separatedData[diaSemana][horaf] = value;
            // Agregar el valor al día correspondiente
        }
        return separatedData;
    }
    // Separar los datos por tipo
    const nubesData = separarDatos(nubes, "nubes");
    const vientoData = separarDatos(viento, "viento");
    const temperaturaData = separarDatos(temperaturas, "temperatura");
    const descripcion_tiempoData = separarDatos(descripcion_tiempo, "temperatura");
    

    function formatearDatos(datos) {
      const resultado = {};
      for (const dia in datos) {
          resultado[dia] = {
              horas: Object.keys(datos[dia]),
              valores: Object.values(datos[dia])
          };
      }
      return resultado;
  }
  const nubesFormateadas = formatearDatos(nubesData);
  const vientoFormateado = formatearDatos(vientoData);
  const temperaturaFormateada = formatearDatos(temperaturaData);
  const descripcion_tiempoFormateado = formatearDatos(descripcion_tiempoData);
  const url_datos = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitud + '&lon=' + longitud + '&appid=854c5489c0f85d6fd1fd9a30d77eee0a&lang=es';
  const response_datos = await axios.get(url_datos);
  const lista_datos_actuales =response_datos.data;

  // Después de obtener los datos de temperatura
const temp = {};

// Itera sobre cada día en temperaturaFormateada
for (const dia in temperaturaFormateada) {
  const horas = temperaturaFormateada[dia].horas;
  const valores = temperaturaFormateada[dia].valores;

  // Inicializa arrays vacíos para los valores de temperatura
  const temps = [];
  const temps_min = [];
  const temps_max = [];

  // Itera sobre cada objeto de valores
  for (const valor of valores) {
    // Agrega los valores de temperatura a los arrays correspondientes
    temps.push(parseFloat(valor.temp));
    temps_min.push(parseFloat(valor.temp_min));
    temps_max.push(parseFloat(valor.temp_max));
  }

  // Crea un nuevo objeto con los arrays de valores de temperatura
  temp[dia] = {
    horas: horas,
    valores: {
      temp: temps,
      temp_min: temps_min,
      temp_max: temps_max
    }
  };
}

  const atardecer = new Date(lista_datos_actuales.sys.sunset * 1000);
  const atardecer_f = atardecer.getHours()+":"+atardecer.getMinutes();
  const amanecer = new Date(lista_datos_actuales.sys.sunrise * 1000); // Convertir a milisegundos
  const amanecer_f = "0"+amanecer.getHours()+":"+amanecer.getMinutes();

  const datos_actuales = {
    description:lista_datos_actuales.weather[0].description,
    icon: lista_datos_actuales.weather[0].icon,
    temperatura: (lista_datos_actuales.main.temp-273.15).toFixed(2),
    amanecer:amanecer_f,
    atardecer:atardecer_f
  }
  const datos = {
    nubes: nubesFormateadas,
    viento: vientoFormateado,
    temperatura: temp,
    descripcion_tiempo: descripcion_tiempoFormateado,
    datos_actuales: datos_actuales
};
      if(response.data.list != null){
        res.status(200).json(datos); // Enviar la lista de lugares como respuesta
      } else {
        res.status(401).json({ error: 'Error al obtener los datos' });
      }
    } 
    catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});
