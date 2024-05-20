// En pages/api/login.js
import { server } from "../_app";
export default async function handler(req, res) {
        const response = await fetch('http://'+server+'/obtenerlista?usuario='+req.query.usuario, { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    
        if (response.ok) {
            const respuesta = await response.json();
            res.status(200).json(respuesta);
        }
        else{
            res.status(500).json({ message: "La lista no se ha obtenido correctamente" });
        }   
  }
  
  