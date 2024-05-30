import { server } from "../_app";

export default async function handler(req, res) {
    console.log('http://' + server + '/login');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
        const response = await fetch('http://' + server + '/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body),
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        const respuesta = await response.json();
        if (response.ok) {
            res.status(200).json({ exito: respuesta.exito });
        } else {
            res.status(500).json({ error: respuesta.error });
        }
    } catch (error) {
        console.log(error);
        if (error.name === 'AbortError') {
            res.status(408).json({ error: "Timeout al realizar la petición" });
        } else {
            res.status(500).json({  error: "Error al realizar la petición" });
        }
    }
}
