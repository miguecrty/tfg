import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
const Cabecera = ({ mostrarBotonHome,mostrarUser}) => {
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
                        <button onClick={handleHome} className="btn p-1.5 home-button">
                             <FontAwesomeIcon icon={faHome} className="home-button" style={{width:'30px',height:'30px'}} />
                        </button>
                    )}
                </div>
                {mostrarUser &&(
                <div className="profile-container">
                    <img src="./images/perfil.png" alt="Perfil" className="profile-img" />
                    <span className="username text-black"><strong>{username}</strong></span>
                    <button onClick={handleLogout} className="cerrar p-2 logout-button">
                    <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon mr-3" style={{width:'20px',height:'20px'}} />
                    Cerrar Sesión
                </button>
                </div>
                )}
            </nav>
        </header>
        </>
    );
}

export default Cabecera;


