import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
const Hola = () => {
    let hola;
    const [responseData, setResponseData] = useState(null); // Estado para almacenar la respuesta
    const router = useRouter();
    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:3000/api'); // Ruta de ejemplo para la petición
            if (response.ok) {
                const data = await response.json();
                setResponseData(data); // Almacena la respuesta en el estado
            } else {
                throw new Error('Error al realizar la petición');
            }
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        if (router.asPath === '/') {
            router.push('/');
        }
    }, []);

    return (
        <div style={{ 
            width: '100vw',
            height: '100vh',
          }}>
            <Cabecera/>
            <h1>Página de Saludo</h1>
            <p>Hola! Bienvenido a esta página de saludo.</p>
            <button onClick={handleClick}>Realizar Petición</button>
            <button onClick={() => { window.location.href = "/" }}>Volver inicio</button>
            {/* Renderiza la respuesta si existe */}
            {responseData && (
                <div>
                    <h2>Respuesta del servidor:</h2>
                    <pre>{responseData.message}</pre>
                </div>
            )}
            <Pie/>
        </div>
    );
};

export default Hola;

