// En pages/api/login.js
import { server } from "../_app";
export default async function handler(req, res) {
        const response = await fetch('http://'+server+'/borracuenta', { 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        if (response.ok) {
            res.status(200).json({ message: "Cuenta borrada con éxito. Redirigiendo al login en 5s..." });
        }
        else{
            res.status(500).json({ message: "La cuenta no se ha borrado." });
        }   
  }
  
  