// En pages/api/login.js
import { server } from "../_app";
export default async function handler(req, res) {
        if(req.query.avanzada){
        const response = await fetch('http://'+server+'/obtenerdatosgraficasavanzados?usuario='+req.query.usuario+"&lugar="+req.query.lugar, { 
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
    else{
        const response = await fetch('http://'+server+'/obtenerdatosgraficasbasicos?usuario='+req.query.usuario+"&lugar="+req.query.lugar, { 
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
  }
  
  