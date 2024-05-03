import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';


const Hola = () => {
    const [responseData, setResponseData] = useState(null); // Estado para almacenar la respuesta
    const [selectedPlace, setSelectedPlace] = useState(null);
    const router = useRouter();
    const location = [51.505, -0.09]; // Coordenadas de ejemplo
    const zoom = 13;


    const fetchData = async () => {
        try {
            const response = await fetch('http://backend:3000/api/tabla');
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
    const handlePlaceSelected = (nombre_corto) => {
        setSelectedPlace(nombre_corto);
        // Enviar nombre_corto al servidor a través de WebSocket
        const ws = new WebSocket('ws://backend:3000');
        ws.onopen = () => {
            // Enviar un mensaje al servidor con el nombre_corto seleccionado
            ws.send(JSON.stringify({ nombre_corto }));
            ws.close(); // Cerrar la conexión después de enviar el mensaje
        };
        
    };

    useEffect(() => {
        fetchData(); // Llama a la función fetchData cuando se monta el componente

        // Establecer una conexión WebSocket
        const ws = new WebSocket('ws://backend:3000');
        ws.onmessage = () => {
            // Si se recibe un mensaje del servidor, actualizar los datos
            fetchData();
        };

        return () => {
            // Cerrar la conexión WebSocket cuando el componente se desmonte
            ws.close();
        };
    }, []); // El segundo argumento de useEffect vacío asegura que se ejecute solo una vez al montar el componente

    return (
        <div style={{ 
            width: '100vw',
            height: '100vh',
          }}>
            <Cabecera/>
            <h1>Página de Saludo</h1>
            <p>Hola! Bienvenido a esta página de saludo.</p>
            <h1>SearchBox</h1>
            <SearchBox onPlaceSelected={handlePlaceSelected} />
            {/* Muestra selectedPlace en tu aplicación si lo deseas */}
            {selectedPlace && <p>Selected Place: {selectedPlace}</p>}
            {responseData && (
                <div>
                    <h2>Tabla de la base de datos:</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Edad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {responseData.map(row => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.nombre}</td>
                                    <td>{row.edad}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <Pie/>
        </div>
    );
};

export default Hola;
