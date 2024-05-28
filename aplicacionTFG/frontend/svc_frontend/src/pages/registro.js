import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Pie from '../components/pie';
import { server } from './_app';
import Cabecera from '@/components/cabecera';
import Head from 'next/head';
const Registro = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [r_password, setRPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const registrarUsuario = async (userData) => {
        try {
            const response = await fetch('/api/registrar', {
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
            const response = await fetch('/api/compruebausu', {
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
        <>
        <Head>
                <title>Registro</title>
                <link rel="icon" href="./images/map.png" />
                <link rel="stylesheet" href="./styles/login.css" />
            </Head>
        <Cabecera mostrarBotonHome={true} mostrarUser={false}/>
        <div className="container-fluid">
        <div className="card ml-5 mr-5">
        <div className="card-body ">
            <h1 className="card-title text-center ">Registrar usuario</h1>
            <form>
                <div className="form-group ml-5 mr-5">
                    <label htmlFor="username"><strong>Usuario</strong></label>
                    <input type="text" placeholder="Nombre de Usuario" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
               
                
                </div>
                <div className="form-group">
                    <label htmlFor="password"><strong>Contraseña</strong></label>
                    <input type="password" placeholder="Contraseña" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password"><strong>Repetir contraseña</strong></label>
                    <input type="password" placeholder="Repetir Contraseña" className="form-control" value={r_password} onChange={(e) => setRPassword(e.target.value)} />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                <button type="button"  onClick={handleRegistrar} className="btn btn-success btn-block">Registrarse</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    
            <Pie />
        </>
    );
};

export default Registro;