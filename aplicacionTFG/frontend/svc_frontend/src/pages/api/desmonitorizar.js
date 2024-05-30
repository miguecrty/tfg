// En pages/api/login.js
import { server } from "../_app";
export default async function handler(req, res) {
        const response = await fetch('http://'+server+'/desmonitorizar', { 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        const respuesta = await response.json();
        if (response.ok) {
            res.status(200).json({ message: respuesta.exito });
        }
        else{
            const respuesta = await response.json();
            res.status(500).json({ message: respuesta.error });
        }   
  }
  
  