import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';
import {server} from './_app';
import Cookies from 'js-cookie';


const SeleccionLugar = () => {
    const [responseData, setResponseData] = useState(null); // Estado para almacenar la respuesta
    const [selectedPlace, setSelectedPlace] = useState(null);
    const router = useRouter();
    const username = Cookies.get('username');
    

    const handlePlaceSelected = (place) => {
        console.log(place);
        setSelectedPlace(place);
        // Enviar nombre_corto al servidor a través de WebSocket
        const ws = new WebSocket('ws://'+server);
        ws.onopen = () => {
            const json = {
                "usuario": username,
                "lista": JSON.stringify(place)
            }
            // Enviar un mensaje al servidor con el nombre_corto seleccionado
            ws.send(json);
            ws.close(); // Cerrar la conexión después de enviar el mensaje
        };
        
    };


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

export default SeleccionLugar;
