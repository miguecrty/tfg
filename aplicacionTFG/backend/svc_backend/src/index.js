const express = require('express');
const cassandra = require('cassandra-driver');

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

  ws.on('message', message => {
    try {
      const mensaje = JSON.parse(message.toString());
      console.log('Mensaje parseado:', mensaje.nombre_corto);
    } catch (error) {
      console.error('Error al parsear el mensaje JSON:', error);
    }
  });
});

// Ruta para obtener los datos de la tabla
app.get('/api/tabla', async (req, res) => {
  try {
    const result = await client.execute('SELECT * FROM ejemplo1');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener datos de la tabla:', error);
    res.status(500).json({ error: 'Error al obtener datos de la tabla' });
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

