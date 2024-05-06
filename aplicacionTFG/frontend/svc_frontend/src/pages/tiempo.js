import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';
import {server} from './_app';


const Hola = () => {
    const [responseData, setResponseData] = useState(null); // Estado para almacenar la respuesta
    const [selectedPlace, setSelectedPlace] = useState(null);
    const router = useRouter();
    const location = [51.505, -0.09]; // Coordenadas de ejemplo
    const zoom = 13;


    const fetchData = async () => {
        try {
            const response = await fetch('http://'+server+'/api/tabla');
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
    const handlePlaceSelected = (place) => {
        console.log(place);
        setSelectedPlace(place);
        // Enviar nombre_corto al servidor a través de WebSocket
        const ws = new WebSocket('ws://'+server);
        ws.onopen = () => {
            // Enviar un mensaje al servidor con el nombre_corto seleccionado
            ws.send(JSON.stringify(place));
            ws.close(); // Cerrar la conexión después de enviar el mensaje
        };
        
    };

    useEffect(() => {
        fetchData(); // Llama a la función fetchData cuando se monta el componente

        // Establecer una conexión WebSocket
        const ws = new WebSocket('ws://'+server);
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
            <Cabecera mostrarBotonHome={true}/>
            <h1>Página de Saludo</h1>
            <p>Hola! Bienvenido a esta página de saludo.</p>
            <h1>SearchBox</h1>
            <SearchBox onPlaceSelected={handlePlaceSelected} />
            <Pie/>
        </div>
    );
};

export default Hola;
