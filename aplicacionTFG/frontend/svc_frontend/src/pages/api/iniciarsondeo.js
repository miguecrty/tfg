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

        if (response.ok) {
            res.status(200).json({ message: "Sondeo iniciado con éxito" });
        }
        else{
            res.status(500).json({ message: "El sondeo no ha iniciado, se ha producido un error!" });
        }   
  }
  
  