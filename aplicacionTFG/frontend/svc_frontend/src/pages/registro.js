import { useState } from 'react';
import { useRouter } from 'next/router';
import Pie from '../components/pie';
import { server } from './_app';
import Cabecera from '@/components/cabecera';
import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Registro = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [r_password, setRPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [exito, setExito] = useState('');
    const [exitoConfirmacion, setExitoConfirmacion] = useState('');
    const [errorConfirmacion, setErrorConfirmacion] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRPassword, setShowRPassword] = useState(false);

    const token = router.query.token;

    const handleConfirmarRegistro = async() => {
        setErrorConfirmacion('');
        setExitoConfirmacion('');
        const response = await fetch('/api/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token:token})
        });
        const respuesta = await response.json();
        if (response.status == 200) {
            setExitoConfirmacion(respuesta.exito);
        } else { 
            setErrorConfirmacion(respuesta.error);
        }

    }


    const handleRegistrar = async() => {
        if(password.length > 4 && username.length > 4){
            if(password === r_password) {
                    const userData = {
                        username: username,
                        email: email,
                        password: password,
                    };
                    
                    try {
                        setError('')
                        setExito('');
                        const response = await fetch('/api/registrar', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(userData)
                        });
                        const respuesta = await response.json();
                        if (response.status == 200) {
                            setExito(respuesta.exito);
                            setTimeout(() => {
                                setUsername('');
                                setEmail('');
                                setPassword('');
                                setRPassword('');
                            }, 1500);
                           
                        } else { 
                           setError(respuesta.error);
                        }
                    } catch (error) {
                        setError('Error de servidor');
                    }
                }
            else {
                setError("Error de contraseña");
            }
        } else {
            setError("Usuario y/o clave tienen que ser mayor que 4 caracteres");
        }
    };

    if (isLoading) {
        return (
            <>
                <Head>
                    <title>Cargando...</title>
                    <link rel="icon" href="./images/map.png" />
                </Head>
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <img src="/images/cargando.gif" alt="Cargando" />
                </div>
            </>
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
            {!token && (
                <>
            <h1 className='display-2 text-center mt-5'>MeteoStats</h1>
            <div className="card ml-5 mr-5 mt-5" style={{width: 'auto', maxWidth: '600px'}}>
                <div className="card-body ml-3 mr-3">
                    <h1 className="card-title text-center">Registrar usuario</h1>
                    <form>
                        <div className="form-group ml-5 mr-5">
                            <label htmlFor="username"><strong>Usuario</strong></label>
                            <input type="text" placeholder="Nombre de Usuario" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="form-group ml-5 mr-5">
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" placeholder="Correo Electrónico" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><strong>Contraseña</strong></label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Contraseña"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><strong>Repetir contraseña</strong></label>
                            <div className="input-group">
                                <input
                                    type={showRPassword ? 'text' : 'password'}
                                    placeholder="Repetir Contraseña"
                                    className="form-control"
                                    value={r_password}
                                    onChange={(e) => setRPassword(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => setShowRPassword(!showRPassword)}
                                    >
                                        <i className={`fas ${showRPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button type="button" onClick={handleRegistrar} className="btn btn-success btn-block">Registrarse</button>
                        </div>
                        {error && <div className="alert alert-danger mt-3">{error}</div>}
                        {exito && <div className="alert alert-success mt-3">{exito}</div>}
                    </form>
                </div>
            </div>
            </>
            )}
           {token && (
                <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                    <div className="card-header text-center">
                        <h5>Verificar Cuenta</h5>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-center">
                        <button 
                            type="button" 
                            onClick={handleConfirmarRegistro} 
                            className="btn btn-success btn-block"
                        >
                            Verificar correo electrónico
                        </button>
                        </div>
                    </div>
                    {exitoConfirmacion && <div className="alert alert-success mt-3">{exitoConfirmacion}</div>}
                    {errorConfirmacion && <div className="alert alert-danger mt-3">{errorConfirmacion}</div>}
                    </div>
                </div>
                </div>
            )}


            <Pie />
            
        </>
        
    );
};

export default Registro;
