// En pages/api/login.js
import { server } from "../_app";
export default async function handler(req, res) {
        const response = await fetch('http://'+server+'/cambiarpassword', { 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        if (response.ok) {
            res.status(200).json({ message: "Contraseña cambiada con éxito." });
        }
        else{
            const respuesta = await response.json();
            res.status(500).json({ message: respuesta.error });
        }   
  }
  
  