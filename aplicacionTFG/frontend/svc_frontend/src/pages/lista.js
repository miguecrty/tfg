import React, { useState, useEffect } from 'react';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';
import { server } from './_app';
import Cookies from 'js-cookie';
import SelectPersonalizado from '@/components/select';



const ListaLugares = () => {
    const username = Cookies.get('username');
    const center = { lat: 40.7128, lng: -74.006 };
    const zoom = 10;
    const [selectedPlace, setSelectedPlace] = useState(null);
    const handlePlaceSelected = (place) => {
        console.log("LUGARRR");
        console.log(place);
        setSelectedPlace(place);
        place.username = username;
        // Enviar nombre_corto al servidor a través de WebSocket
        const ws = new WebSocket('ws://'+server);
        ws.onopen = () => {
            // Enviar un mensaje al servidor con el nombre_corto seleccionado
            ws.send(JSON.stringify(place));
            ws.close(); // Cerrar la conexión después de enviar el mensaje
        };
        
    };
    return (
        <div>
      <Cabecera mostrarBotonHome={true}/> 
        <SearchBox onPlaceSelected={handlePlaceSelected} mostrarMapa={true}/> 
        <SelectPersonalizado/>
            <Pie/>
        </div>
        
    ); 
};

export default ListaLugares;
