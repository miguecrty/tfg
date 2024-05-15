// En pages/api/login.js
export default async function handler(req, res) {
        
        const userData = {
            username: req.body.username,
            password: req.body.password
        };
        console.log(userData);
        const response = await fetch('http://backend:3000/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            res.status(200).json({ message: "logeo exitoso" });
        }
        else{
            res.status(500).json({ message: "Logeo erroneo!" });
        }   
  }
  
  