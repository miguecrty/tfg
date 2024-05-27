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

        if (response.ok) {
            res.status(200).json({ message: "Logeo exitoso" });
        } else {
            res.status(500).json({ message: "Logeo erroneo!" });
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            res.status(408).json({ message: "Timeout al realizar la petición" });
        } else {
            res.status(500).json({ message: "Logeo erroneo!" });
        }
    }
}
