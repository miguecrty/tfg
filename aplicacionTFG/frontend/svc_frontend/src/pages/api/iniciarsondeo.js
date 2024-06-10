// En pages/api/login.js
import { server } from "../_app";
export default async function handler(req, res) {
        const response = await fetch('http://'+server+'/iniciarsondeo', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        const respuesta = await response.json();
        console.log(respuesta);
        if (response.ok) {
            res.status(200).json({ exito: respuesta.exito });
        }
        else{
            res.status(500).json({ error: respuesta.error });
        }   
  }
  
  