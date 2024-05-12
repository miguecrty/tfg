import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Cabecera = ({ mostrarBotonHome }) => {
    const router = useRouter();
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            const fetchedUsername = await Cookies.get('username');
            setUsername(fetchedUsername);
        };
        fetchUsername();
    }, []); // Ejecutar una sola vez cuando el componente se monta

    const handleLogout = () => {
        Cookies.remove('isLoggedIn');
        router.push('/'); // Redirige a la página de inicio después de cerrar sesión
    };

    const handleHome = () => {
        router.push('/'); // Redirige a la página de inicio después de cerrar sesión
    };

    return (
        <header style={{ backgroundColor: 'rgba(0, 80, 255, 0.5)', color: 'white', paddingTop: '0.5px', paddingBottom:'0.5px', textAlign: 'center', width: '100%' }}>
            <nav>
                <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyleType: 'none' }}>
                    <li id="boton-home">
                        {mostrarBotonHome && (
                            <button onClick={handleHome} className='btn home'> <img src="./images/home.png" alt="Inicio" style={{ width: '40px', height: '40px' }} /></button>
                        )}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="./images/perfil.png" alt="Inicio" style={{ width: '30px', height: '30px', marginRight:'10px' }} />
                        <span style={{ color: 'black', marginRight: '50px' }}><strong>{username}</strong></span>
                        <button onClick={handleLogout} className='btn cerrar'>Cerrar Sesión</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Cabecera;
