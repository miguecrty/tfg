import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Pie from '../components/pie';
import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Home = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [exito, setExito] = useState('');
    const [isPasswordRecoveryVisible, setIsPasswordRecoveryVisible] = useState(false);
    const [muestraformulario, setMuestraFormulario] = useState(true);
    const [recuperacionEmail, setRecuperacionEmail] = useState('');
    const [recuperacionUsuario, setRecuperacionUsuario] = useState('');
    const [recoveryMessage, setRecoveryMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const fetchData = async (userData) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const responseData = await response.json();
            if (response.ok) {
                
                setError('');
                setTimeout(() => {
                setIsLoading(true);
                }, 1500);
                setExito(responseData.exito);
                setTimeout(() => {
                    Cookies.set('isLoggedIn', 'true');
                    Cookies.set('username', userData.username);
                    router.push('/menu');
                }, 3000);
            }
            else{
                setError(responseData.error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const isLoggedIn = Cookies.get('isLoggedIn');

        const timer = setTimeout(() => {
            if (isLoggedIn === 'true') {
                router.push('/menu');
            } else {
                setIsLoading(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const handleLogin = () => {
        const userData = {
            username: username,
            password: password
        };

        fetchData(userData);
    };

    const handleRegistro = () => {
        setIsLoading(false);
        router.push('/registro');
    };

    const recuparacionContra = async () => {
        setMuestraFormulario(false);
        setIsPasswordRecoveryVisible(true);
    };

    const volverFormulario = async () => {
        setErrorMessage('');
        setRecoveryMessage('');
        setMuestraFormulario(true);
        setIsPasswordRecoveryVisible(false);
    };

    const handlePasswordRecovery = async () => {
        setErrorMessage('');
        setRecoveryMessage('');
        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usuario: recuperacionUsuario, email: recuperacionEmail })
            });
            const responseData = await response.json();
            if (response.ok) {
                setRecoveryMessage(responseData.exito);
            } else {
                
                setErrorMessage(responseData.error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (isLoading) {
        return (
            <>
                <Head>
                    <title>Cargando...</title>
                    <link rel="icon" href="./images/logo.png" />
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
                <title>Login</title>
                <link rel="icon" href="./images/logo.png" />
                <link rel="stylesheet" href="./styles/login.css" />
            </Head>
            
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center vh-100">
                <div className="logo-container" style={{display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop: '20px'}}>
                <img src='./images/logofondo.png' className="logo-image" alt="Logo" style={{maxWidth: '100%',height: 'auto',maxHeight: '200px'}} />
            </div>
                    {isPasswordRecoveryVisible && (
                        <div className="col"  style={{transform:'translate(0px, -80px)'}}>
                            <div className="card ml-5 mr-5 border-0 shadow-lg">
                                <div className="card-body">
                                    <h1 className="card-title text-center">Recuperar Contraseña</h1>
                                    <div className="form-group">
                                        <label htmlFor="usuario_rec"><strong>Nombre de usuario</strong></label>
                                        <input
                                            type="text"
                                            id="usuario_rec"
                                            className="form-control"
                                            placeholder="Introduce tu nombre de usuario"
                                            value={recuperacionUsuario}
                                            onChange={(e) => setRecuperacionUsuario(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email"><strong>Email</strong></label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Introduce tu email"
                                            value={recuperacionEmail}
                                            onChange={(e) => setRecuperacionEmail(e.target.value)}
                                        />
                                    </div> 
                                    <div className='d-flex justify-content-center align-items-center'>
                                    <button type="button" onClick={handlePasswordRecovery} className="btn btn-primary btn-block">Restablecer Contraseña</button>
                                    <button type="button" onClick={volverFormulario} className="btn btn-secondary btn-block">Volver</button>
                                    </div>
                                    {recoveryMessage && <div className="alert alert-info mt-3">{recoveryMessage}</div>}
                                    {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                                </div>
                            </div>
                        </div>
                    )}
                    {muestraformulario && (
                        <>
                         <div className="col"  style={{transform:'translate(0px, -80px)'}}>
                            <div className="card ml-5 mr-5 border-0 shadow-lg">
                                <div className="card-body ">
                                    <h1 className="card-title text-center">Iniciar Sesión</h1>
                                    <form>
                                        <div className="form-group ml-5 mr-5">
                                            <label htmlFor="username"><strong>Usuario</strong></label>
                                            <input
                                                type="text"
                                                id="username"
                                                className="form-control"
                                                placeholder="Usuario"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password"><strong>Contraseña</strong></label>
                                            <div className="input-group">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="password"
                                                    className="form-control"
                                                    placeholder="Contraseña"
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
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <button type="button" onClick={handleLogin} className="btn btn-primary btn-block mb-2">Iniciar Sesión</button>
                                            <button type="button" onClick={handleRegistro} className="btn btn-warning btn-block">Registrarse</button>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span
                                                onClick={recuparacionContra}
                                                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                                            >
                                                ¿Has olvidado la contraseña?
                                            </span>
                                        </div>
                                    </form>
                                    {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
                                    {exito && <div className="alert alert-success mt-3 text-center">{exito}</div>}
                                </div>
                            </div>
                        </div>
                        </>
                    )}
                </div>
                <Pie />
            </div>
        </>
    );
};

export default Home;
