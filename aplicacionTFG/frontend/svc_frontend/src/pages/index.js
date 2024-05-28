import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Pie from '../components/pie';
import Head from 'next/head';

const Home = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [exito, setExito] = useState('');

    const fetchData = async (userData) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                setIsLoading(true);
                setExito('Credenciales correctas, redirigiendo a menú...');
                setTimeout(() => {
                    Cookies.set('isLoggedIn', 'true');
                    Cookies.set('username', userData.username);
                    router.push('/menu');
                }, 1500);
            } else {
                const responseData = await response.json();
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
                <title>Login</title>
                <link rel="icon" href="./images/map.png" />
                <link rel="stylesheet" href="./styles/login.css" />
            </Head>
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6">
    <div className="card ml-5 mr-5">
        <div className="card-body ">
            <h1 className="card-title text-center ">Iniciar Sesión</h1>
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
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
               <div className='d-flex justify-content-center align-items-center'>
                <button type="button" onClick={handleLogin} className="btn btn-primary btn-block mb-2">Iniciar Sesión</button>
                <button type="button" onClick={handleRegistro} className="btn btn-secondary btn-block">Registrarse</button>
                </div>
            </form>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {exito && <div className="alert alert-success mt-3">{exito}</div>}
        </div>
    </div>
</div>
            </div>
            <Pie />
        </div>
        </>
    );
};

export default Home;

