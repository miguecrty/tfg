const express = require('express')

const cors = require('cors');

// Permitir todas las solicitudes CORS

const app = express()
const port = 3000

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`My server listening at http://localhost:${port}`))

// Ruta de ejemplo para manejar la petición
app.get('/api', (req, res) => {
    // Aquí puedes colocar la lógica para manejar la petición y enviar una respuesta
    res.json({ message: 'Respuesta desde el backend' });
});