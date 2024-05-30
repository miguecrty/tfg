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
        const respuesta = await response.json();
        if (response.ok) {
           res.status(200).json({ exito: respuesta.exito });
        }
        else{
            res.status(500).json({ error: respuesta.error });
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
        const respuesta = await response.json();
        if (response.ok) {
            res.status(200).json({ exito: respuesta.exito});
        }
        else{
            res.status(500).json({ error: respuesta.error });
        }   
    }
    }