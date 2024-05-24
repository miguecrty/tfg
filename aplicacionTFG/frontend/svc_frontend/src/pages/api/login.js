// En pages/api/login.js
import { server } from "../_app";
export default async function handler(req, res) {
    console.log('http://'+server+'/login');
        const response = await fetch('http://'+server+'/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        if (response.ok) {
            res.status(200).json({ message: "Logeo exitoso" });
        }
        else{
            res.status(500).json({ message: "Logeo erroneo!" });
        }   
  }
  
  