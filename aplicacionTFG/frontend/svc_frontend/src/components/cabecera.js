import React from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Cabecera = () => {
    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove('isLoggedIn');
        router.push('/'); // Redirige a la página de inicio después de cerrar sesión
    };

    return (
        <header style={{ backgroundColor: 'rgba(0, 0, 67, 0.6)', color: 'white', padding: '10px', textAlign: 'center' }}>
            {/* Aquí puedes colocar tu contenido de cabecera */}
            <nav>
                <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyleType: 'none' }}>
                    <li>
                        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
                            {/* Icono de casa */}
                            <img src="./images/home.png" alt="Inicio" style={{ width: '24px', height: '24px' }} />
                        </a>
                    </li>
                    <li style={{ marginRight: '20px', border: '1px solid white', borderRadius: '5px', padding: '5px 10px', boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)'}}>
                        <button onClick={handleLogout} style={{ color: 'white', textDecoration: 'none', display: 'inline-block', width: '100%', height: '100%', cursor: 'pointer', background: 'none', border: 'none' }}>
                            {/* Icono de cerrar sesión */}
                            Cerrar Sesión
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Cabecera;
