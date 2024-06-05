const express = require('express');
const cassandra = require('cassandra-driver');
const axios = require('axios');
const nodemailer = require("nodemailer");
const app = express();
const crypto = require('crypto');
const pino = require('pino');
const pretty = require('pino-pretty');

const transport = pino.transport({
  target: 'pino-pretty',
  options: {
      colorize: true, // Colorize the output
      translateTime: true, // Show human-readable time format
      ignore: 'pid,hostname' // Remove the pid and hostname from the logs
  }
});

// Create a Pino logger instance using the transport stream
const logger = pino(transport);


////// k8s (secrets) ////

// EMAIL
const host = process.env.HOST_EMAIL || "smtp-es.securemail.pro";
const emailport = process.env.PORT_EMAIL || 465;
const emailuser = process.env.USER_EMAIL || "soporte@meteostats.es";
const emailpass = process.env.PASS_EMAIL || "GOrrino711";


// CASSANDRA
const hostBD = process.env.HOST_CASSANDRA || '10.88.0.16';
const datacenterBD = process.env.DATACENTER_CASSANDRA || 'datacenter1';
const portBD = process.env.PORT_CASSANDRA || 9042;
const keyspaceBD = process.env.KEYSPACE_CASSANDRA || 'tfg';
const usernameBD = process.env.USERNAME_CASSANDRA || 'cassandra';
const passwordBD = process.env.PASSWORD_CASSANDRA || 'cassandra';

const APIKEY_WEATHER = process.env.APIKEY_WEATHER || 'fd10b0dcb392959b10aa51f78462f9fd';

// DOMINIO APP
const dominio_app = process.env.DOMINIO_APP || 'localhost:8080';

const PORT = process.env.PORT_APP || 3000;

//   LOCAL

const client = new cassandra.Client({
  contactPoints: [hostBD],
  localDataCenter: datacenterBD,
  protocolOptions: { port: portBD },
  keyspace: keyspaceBD,
  credentials: {
    username: usernameBD,
    password: passwordBD
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

const server = app.listen(PORT, () => {
  logger.info(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});

let intervalos ={}
const tokens = {};
intervalos['usuario']={}


//limpiarBBDD();
async function limpiarBBDD() 
{
  logger.warn("LIMPIANDO BBDD...");
  const resultado = await client.execute("SELECT nombre_usu FROM usuarios");
  if(resultado.rows.length >0){
    resultado.rows.forEach(async usuario => {
      try {
      await client.execute("TRUNCATE datos_"+usuario.nombre_usu);
      await client.execute("UPDATE tfg.usuarios SET lugares =null WHERE nombre_usu ='"+usuario.nombre_usu+"'");
      }
      catch(error)
      {
        logger.info(error);
      }
    });
    
  }
}


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
        logger.error("Error al realizar el update");
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
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitud + '&lon=' + longitud + '&appid='+APIKEY_WEATHER+'&lang=es';
    const response = await axios.get(url);
    nombre_lugar = response.data.name;
    const noexiste=await actualizarTablaUsu(usuario,nombre_lugar,latitud,longitud);
    if(noexiste){
    logger.info(`Iniciando sondeo para el usuario '${usuario}' en el lugar '${nombre_lugar}'`);
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
    intervalos[usuario][nombre_lugar]=intervaloID;
    res.status(200).json({nombre_corto: nombre_lugar});
   } 
   else{
    logger.warn("Lugar ya existente");
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
    logger.info("Tabla 'datos_"+usu+"' creada correctamente");
  } catch (error) {
    console.error('Error al obtener datos de la tabla:', error);
  }
}

async function eliminarTabla(usu)
{
  try {
    const result = await client.execute("DROP TABLE datos_"+usu);
    logger.warn("Tabla datos_"+usu+" borrada correctamente!");
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
        res.status(200).json(lugares);
      } else {
        res.status(401).json({ error: 'Usuario no existe en la BBDD' });
      }
    } catch (error) {
      logger.error(error);
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
    try {
      const result = await client.execute("SELECT * FROM usuarios WHERE nombre_usu=? AND clave=? ALLOW FILTERING",[username,password]);
      if(result.rows.length > 0)
      {
      logger.info(`Usuario '${username}' logeado correctamente`);
      res.status(200).json({exito: 'Credenciales correctas. Redirigiendo al menu principal...'}); 
      }
      else{
        res.status(401).json({ error: 'Credenciales incorrectas!' });
      }
    } catch (error) {
      logger.error(error);

    }
  
  } catch (error) {
    console.error('Error al procesar la solicitud de inicio de sesión:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud de inicio de sesión' });
  }
});

app.put('/desmonitorizar', async (req, res) => {
  try {
      const lugares = req.body.lugares;
      const usuario = req.body.usuario;
      for (const lugar of lugares) {
          
          await client.execute("UPDATE usuarios SET lugares = lugares - {'" + lugar + "'} WHERE nombre_usu = '" + usuario + "'");
          clearInterval(intervalos[usuario][lugar]);
          delete intervalos[usuario][lugar];
          logger.warn(`Desmonitorizando el lugar '${lugar}' para el usuario '${usuario}'`);
          await client.execute("DELETE FROM tfg.datos_"+usuario+" WHERE nombre_lugar = '"+lugar+"'");
      }
      res.status(200).json({ exito: "Éxito al desmonitorizar los lugares" });
  } catch (error) {
      logger.error(error);
      res.status(500).json({ error: "Error al desmonitorizar los lugares" });
  }
});



app.post('/registrar', async (req, res) => {
    const { username, email, password, token } = req.body;
    if(token != null)
      {
        if(tokens[token] != null){
        try {
          const result = await client.execute("INSERT INTO usuarios (nombre_usu,clave,email,lugares) VALUES (?,?,?,?) IF NOT EXISTS",[tokens[token].usuario,tokens[token].password,tokens[token].email,null]);
        if (result.wasApplied()) {
          crearTabla(tokens[token].usuario);
          intervalos[tokens[token].usuario]={};
          delete tokens[token];
          logger.info(`Usuario '${username}' creado con éxito!`)
          res.status(200).json({exito: 'Usuario creado con éxito. Redirigiendo al login...'});
        }
        }
        catch(error)
        {

        }
      }
      else{
        res.status(401).json({error: 'Token invalido. Error al confirmar la cuenta'});
      }
      }
    else if(username != null)
      {
    try {
      const consulta = await client.execute("SELECT nombre_usu FROM usuarios WHERE nombre_usu='"+username+"'");
      if (consulta.rows.length > 0){
        res.status(401).json({ error: 'Nombre de usuario ya existente' });
      }
      else
      {
          
          const token = crypto.randomBytes(20).toString('hex');
          const confirmacionLink = `http://${dominio_app}/registro?token=${token}`;
          const expirationTime = Date.now() + 3600000;
          const html_correo =
          `
          <!DOCTYPE html>
          <html lang="es">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                  .container {
                      border: 1px solid #ddd;
                      background-color: #f9f9f9;
                      border-radius: 5px;
                      font-family: Arial, sans-serif;
                      max-width:800px;
                  }
                  .container2 {
                      margin:20px;
                  }
                  .header h1 {
                      color: #333;
                      margin: 0;
                      padding-bottom: 20px;
                  }
                  .content {
                      font-size: 16px;
                      color: #555;
                  }
                  .content p {
                      line-height: 1.5;
                      margin: 0 0 10px 0;
                  }
                  .button {
                      display: inline-block;
                      padding: 10px 20px;
                      margin: 20px 0;
                      font-size: 16px;
                      color: rgba(0,0,0);
                      border: 1px solid #999;
                      background-color: rgba(255,255,0);
                      text-decoration: none;
                      border-radius: 5px;
                  }
                  .footer {
                      font-size: 14px;
                      color: #888;
                      padding-top: 20px;
                  }
              </style>
            </head>
              <body>
                  <div class="container">
                      <div class="container2">
                      <div class="header">
                          <h1>Bienvenido ${username}!</h1>
                      </div>
                      
                      <div class="content">
                          <p>Estamos encantados de que te unas a <strong>MeteoStats</strong>. Para completar el proceso de registro y activar tu cuenta, por favor haz clic en el siguiente enlace:</p>
                          <a href="${confirmacionLink}" class="button">Confirmar Cuenta</a>
                          <p>Si no has solicitado la creación de una cuenta, por favor ignora este mensaje.</p>
                      </div>
                      <div class="footer">
                          <p>¡Gracias y bienvenido!</p>
                          <p>El equipo de MeteoStats</p>
                      </div>
                      </div>
                      </div>
              </body>
            </html>
          `
          ;
          const asunto = `Verificar la cuenta`;
          tokens[token] = { usuario: username, email: email, password: password, expires: expirationTime };
          enviarCorreo(email,html_correo,asunto)
        
          res.status(200).json({exito: 'Correo de confirmación mandado con éxito.'});
    }  
    } catch (error) {
      
    }
  }
  else{
    res.status(401).json({error: 'Token inválido y/o error del servidor'})
  }

});

app.put('/cambiarpassword', async (req, res) => {
  const username = req.body.usuario;
  const claveAntigua = req.body.antigua;
  const claveNueva = req.body.nueva;
  try {
    // Usar una consulta preparada para evitar la interpolación de cadenas
    const query = "UPDATE tfg.usuarios SET clave = ? WHERE nombre_usu = ? IF clave = ?";
    const result = await client.execute(query, [claveNueva, username, claveAntigua]);
    
    // Comprobar si la actualización fue exitosa
    if (result.wasApplied()) {
      logger.info('Contraseña cambiada con éxito para el usuario '+username);
      res.status(200).json({exito: 'Contraseña cambiada con éxito!'}); // OK
    } else {
      logger.error(`Error al cambiar la contraseña. (Contraseñas no coinciden)`);
      res.status(401).json({ error: 'La contraseña antigua no coincide' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
    console.error(error);
  } 
});



app.delete('/borracuenta', async (req, res) => {
  const username = req.body.usuario;
  try {
    const result = await client.execute("DELETE FROM usuarios WHERE nombre_usu='"+username+"'");
    eliminarTabla(username);
    logger.warn("Usuario '"+username+"' borrado correctamente!");
    res.status(200).json({exito: "Cuenta borrada con éxito. Redirigiendo al login en 5s..."}); 
  } catch (error) {
    res.status(401).json({ error: "La cuenta no se ha borrado." });
    logger.error(error);
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
        temperaturas:temperaturas,
        maxTemperaturas:maxTemperaturas,
        minTemperaturas:minTemperaturas,
        sensacionTermica:sensacionTermica,
        presion:presion,
        humedad:listahumedad,
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
      logger.error(error);
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
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitud + '&lon=' + longitud + '&appid='+APIKEY_WEATHER+'&lang=es';
       const response = await axios.get(url);
       const lista_datos =response.data.list;
       const temperaturas = {}
       const descripcion_tiempo = {}
       const nubes = {}
       const viento ={}
       lista_datos.forEach(element => {
        temperaturas[element.dt_txt]={temp:(element.main.temp-273.15).toFixed(2)}; 
        descripcion_tiempo[element.dt_txt]={description:element.weather[0].description,icon:element.weather[0].icon,sunrise:element};
        nubes[element.dt_txt]=element.clouds.all;
        viento[element.dt_txt]=element.wind.speed;
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
  const url_datos = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitud + '&lon=' + longitud + '&appid='+APIKEY_WEATHER+'&lang=es';
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

  const max_min = [];
  // Itera sobre cada objeto de valores
  for (const valor of valores) {
    max_min.push(parseFloat(valor.temp));
    temps.push(parseFloat(valor.temp));
  }

  // Crea un nuevo objeto con los arrays de valores de temperatura
  temp[dia] = {
    horas: horas,
    valores: {
      temp: temps,
    },
    temp_min:Math.min(...max_min),
    temp_max:Math.max(...max_min)
  };
}

const atardecer = new Date(lista_datos_actuales.sys.sunset * 1000);
const atardecer_horas = atardecer.getHours().toString().padStart(2, '0');
const atardecer_minutos = atardecer.getMinutes().toString().padStart(2, '0');
const atardecer_f = `${atardecer_horas}:${atardecer_minutos}`;

const amanecer = new Date(lista_datos_actuales.sys.sunrise * 1000);
const amanecer_horas = amanecer.getHours().toString().padStart(2, '0');
const amanecer_minutos = amanecer.getMinutes().toString().padStart(2, '0');
const amanecer_f = `${amanecer_horas}:${amanecer_minutos}`;

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


app.post('/reset-password', async (req, res) => {

  if(req.body.token != null){
  const { token, usuario, password } = req.body;
  const tokenData = tokens[token];

  if (!tokenData || tokenData.expires < Date.now()) {
    return res.status(400).json({error:'Token inválido o expirado.'});
  }

  try {
    const result = await client.execute("UPDATE usuarios SET clave = '"+password+"' WHERE nombre_usu = '"+usuario+"'");
    delete tokens[token];
    res.status(200).json({exito: 'Contraseña cambiada correctamente'}); 
  } catch (error) {
    res.status(401).json({ error: 'Error al cambiar la contraseña' });
  }
}
else{
  const {usuario, email} = req.body;
  try {
    const result = await client.execute("SELECT * FROM usuarios WHERE nombre_usu='"+usuario+"' AND email='"+email+"' ALLOW FILTERING");
   if(result.rows.length > 0){
    const token = crypto.randomBytes(20).toString('hex');
    const resetLink = `http://${dominio_app}/reset-password?token=${token}&usuario=${usuario}`;
    const expirationTime = Date.now() + 3600000;
    tokens[token] = { email: email, expires: expirationTime };
    const html_correo =
          `
          <!DOCTYPE html>
          <html lang="es">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                  .container {
                      border: 1px solid #ddd;
                      background-color: #f9f9f9;
                      border-radius: 5px;
                      font-family: Arial, sans-serif;
                      max-width:800px;
                  }
                  .container2 {
                      margin:20px;
                  }
                  .header h1 {
                      color: #333;
                      margin: 0;
                      padding-bottom: 20px;
                  }
                  .content {
                      font-size: 16px;
                      color: #555;
                  }
                  .content p {
                      line-height: 1.5;
                      margin: 0 0 10px 0;
                  }
                  .button {
                      display: inline-block;
                      padding: 10px 20px;
                      margin: 20px 0;
                      font-size: 16px;
                      color: rgba(0,0,0);
                      border: 1px solid #999;
                      background-color: rgba(255,255,0);
                      text-decoration: none;
                      border-radius: 5px;
                  }
                  .footer {
                      font-size: 14px;
                      color: #888;
                      padding-top: 20px;
                  }
              </style>
            </head>
              <body>
                  <div class="container">
                      <div class="container2">
                      <div class="header">
                          <h1>Restablecer contraseña</h1>
                      </div>
                      
                      <div class="content">
                          <p>Estimado <strong>${usuario}</strong>.</p>
                          <p>Se ha solicitado el restablecimento de contraseña, para seguir con el procedimiento, haz click en el siguiente enlace:</p>
                          <a href="${resetLink}" class="button">Restablecer contraseña</a>
                          <p>Si no has solicitado restablecer la contraseña, por favor ignora este mensaje.</p>
                      </div>
                      <div class="footer">
                          <p>¡Gracias y bienvenido!</p>
                          <p>El equipo de MeteoStats</p>
                      </div>
                      </div>
                      </div>
              </body>
            </html>
          `
          ;
    const asunto=`Recuperación de contraseña`;
    enviarCorreo(email,html_correo,asunto);
    res.status(200).json({ exito: 'Se ha mandado un correo con las instrucciones para recuperar la contraseña.' }); 
   }
   else{
    res.status(401).json({ error: 'Nombre de usuario y/o email no existen' });
   }
  } catch (error) {
    res.status(401).json({ error: 'Error del servidor' });
  }
}

});

async function enviarCorreo(email,html_correo,asunto)
{ 
  const transporter = nodemailer.createTransport({
    host: host,
    port: emailport,
    secure: true,
    auth: {
      user: emailuser,
      pass: emailpass,
    },
  });

  const mailOptions = {
    from: emailuser,
    to: email,
    subject: asunto,
    html: html_correo
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      logger.error('Error:', error);
    } else {
      logger.info('Email enviado correctamente!');
    }
  });
}