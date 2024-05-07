const express = require('express');
const cassandra = require('cassandra-driver');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const app = express();
const client = new cassandra.Client({
  contactPoints: ['10.88.0.17'],
  localDataCenter: 'datacenter1',
  protocolOptions: { port: 9042 },
  keyspace: 'tfg'
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
      iniciarSondeo(usuario,latitud,longitud);
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
        if(lista[nombre_lugar] ==nombre_lugar)
        {
          bandera = true;
        }  
    }
    lista[nombre_lugar]=lat+"|"+lon;
    if(bandera==false)
    {
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


async function iniciarSondeo(usuario, latitud, longitud) {
  try {

      const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitud + '&lon=' + longitud + '&appid=fd10b0dcb392959b10aa51f78462f9fd&lang=es';
      console.log("...........................\nIniciando sondeo para el usuario: "+usuario+"\n...........................");
      const response = await axios.get(url);
      const nombre_lugar = response.data.name
     const noexiste=await actualizarTablaUsu(usuario,nombre_lugar,latitud,longitud);
      if(noexiste){
      setInterval(async () => {
          try {
              const response = await axios.get(url);
              const nombre_lugar = response.data.name;
              const tiempo = response.data.weather[0].main;
              const tiempo_descripcion = response.data.weather[0].description;
              const temperatura = response.data.main;
              const viento = response.data.wind;
              const nubes = response.data.clouds;

              const uuid = uuidv4();
              const exito=await actualizarTablaUsu(usuario,nombre_lugar,latitud,longitud)
              const result = await client.execute(
                  "INSERT INTO datos_"+usuario+"(id_dato, nombre_lugar, nubes, temperatura, tiempo, tiempo_descripcion, viento) VALUES (?, ?, ?, ?, ?, ?, ?);",
                  [uuid, nombre_lugar, nubes, temperatura, tiempo, tiempo_descripcion, viento],
                  { prepare: true }
              );
          } catch (error) {
              //console.error('Error al realizar la petición:', error);
          }
      }, TIEMPO_SONDEO);
     } 
     else{
      console.log("Lugar ya existente");
    }
  } catch (error) {
  }
}


async function crearTabla(usu)
{
  try {
    const result = await client.execute("CREATE TABLE IF NOT EXISTS tfg.datos_"+usu+
      "(id_dato UUID PRIMARY KEY," +
      "nombre_lugar TEXT," +
      "tiempo TEXT," +
      "tiempo_descripcion TEXT," +
      "temperatura map<text,float>," +
      "viento map<text,float>," +
      "nubes map<text,float>);"
    );
    console.log("TABLA datos_"+usu+" CREADA CORRECTAMENTE");
  } catch (error) {
    console.error('Error al obtener datos de la tabla:', error);
  }
}

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

app.post('/obtenerlista', async (req, res) => {
  try {
    const username = req.body;
    console.log(username.usuario);
    try {
      const result = await client.execute("SELECT lugares FROM usuarios WHERE nombre_usu='"+username.usuario+"' ALLOW FILTERING;");
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
      res.sendStatus(200); 
    } catch (error) {
      res.status(401).json({ error: 'Usuario existe en BBDD' });
      console.log(error);
    }

});



// Ruta para insertar datos en la tabla
app.post('/api/insertar', async (req, res) => {
  try {
    // Realizar la inserción en la base de datos

    // Notificar a todos los clientes conectados sobre la nueva inserción
    clients.forEach(client => {
      client.res.json({ message: 'Nueva inserción realizada' });
    });

    res.json({ message: 'Datos insertados correctamente' });
  } catch (error) {
    console.error('Error al insertar datos:', error);
    res.status(500).json({ error: 'Error al insertar datos' });
  }
});

// Ruta para recibir notificaciones de la base de datos
app.post('/notificar', (req, res) => {
  console.log('Notificación recibida de la base de datos');
});