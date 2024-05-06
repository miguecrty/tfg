import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Pie from '../components/pie';


const Registro = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [r_password, setRPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const registrarUsuario = async (userData) => {
        try {
            const response = await fetch('http://localhost:3000/registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
    
            if (response.status == 200) {
                alert("Usuario: "+ username+" creado correctamente.");
                    setIsLoading(true);
                    setTimeout(() => {
                        router.push('/');
                    }, 1000);
            }
        } catch (error) {
            console.error(error);
        }
    };


    async function compruebaUsu (usuario) {
        try {
            const response = await fetch('http://localhost:3000/compruebausu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"usuario":usuario})
            });
    
            if (response.status == 200) {
                // Si las credenciales son correctas, muestra un mensaje y luego redirige a la página de menú
                console.log('Usuario no existe en BBDD');
                return true;
               } else {
                const responseData = await response.json();
                console.log('Usuario existe en BBDD');
                return false;
            }
        } catch (error) {
            console.error(error);
        }
    }
    

   

    const handleRegistrar = async() => {
        if(password.length > 4 && username.length >4){
        if(password == r_password )
        {
        const no_existe = await compruebaUsu(username);
        if(no_existe){
        const userData = {
            username: username,
            password: password,
        };
        
        registrarUsuario(userData);
        }
        else
        {
            setError("Usuario existe en BBDD"); 
        }
    }
    else{
        
        setError("Error de contraseña");
    }
}
else{
    setError("Usuario y/o clave tienen que ser mayor que 4 caracteres");
}
    };

    if (isLoading) {
        // Si isLoading es true, la página está cargando
        return (
            <div className="cargando">
                    <img src="/images/cargando.gif" alt="Cargando" />
            </div>
        );
    }

    return (
        <div className="container">
            <div className="login-form">
                <h1>Registro de usuario</h1>
                <input type="text" placeholder="Nombre de Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Repetir Contraseña" value={r_password} onChange={(e) => setRPassword(e.target.value)} />
                <button onClick={handleRegistrar}>Registrar</button>
                {error && <div className="error-message">{error}</div>}
                
            </div>
            <Pie />
        </div>
    );
};

export default Registro;