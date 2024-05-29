import { server } from "../_app";
export default async function handler(req, res) {
    if(req.body.token != null)
        {
        const response = await fetch('http://'+server+'/reset-password', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        if (response.ok) {
            const respuesta = await response.json();
            res.status(200).json({ message: respuesta.message });
        }
        else{
            const respuesta = await response.json();
            res.status(500).json({ message: respuesta.error });
        }   
    }
    else{
        const response = await fetch('http://'+server+'/reset-password', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        if (response.ok) {
            res.status(200).json({ message: "Correo enviado con éxito" });
        }
        else{
            const respuesta = await response.json();
            res.status(500).json({ message: respuesta.error });
        }   
    }
    }