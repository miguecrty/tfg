const express = require('express');
const cassandra = require('cassandra-driver');

const app = express();
const client = new cassandra.Client({
  contactPoints: ['10.88.0.2'],
  localDataCenter: 'datacenter1',
  protocolOptions: { port: 9042 },
  keyspace: 'prueba1'
});

app.use(express.json());

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
  

  app.post('/notificar', (req, res) => {
    console.log('Notificación recibida de la base de datos');

});
