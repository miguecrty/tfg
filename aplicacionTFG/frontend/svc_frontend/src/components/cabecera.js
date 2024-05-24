import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
const Cabecera = ({ mostrarBotonHome }) => {
    const router = useRouter();
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            const fetchedUsername = await Cookies.get('username');
            setUsername(fetchedUsername);
        };
        fetchUsername();
    }, []);

    const handleLogout = () => {
        Cookies.remove('isLoggedIn');
        router.push('/'); // Redirect to the homepage after logout
    };

    const handleHome = () => {
        router.push('/'); // Redirect to the homepage
    };

    return (
        <>
        <Head>
        <link rel="stylesheet" href="./styles/cabecera.css" />
        </Head>
        <header className="header w-auto">
            <nav className="nav-container container-fluid px-3 w-auto">
                <div>
                    {mostrarBotonHome && (
                        <button onClick={handleHome} className="home p-1.5 home-button">
                            <img src="./images/home.png" alt="Inicio" className="home-button" />
                        </button>
                    )}
                </div>
                <div className="profile-container">
                    <img src="./images/perfil.png" alt="Perfil" className="profile-img" />
                    <span className="username text-black"><strong>{username}</strong></span>
                    <button onClick={handleLogout} className="cerrar p-2 logout-button">Cerrar Sesión</button>
                </div>
            </nav>
        </header>
        </>
    );
}

export default Cabecera;


