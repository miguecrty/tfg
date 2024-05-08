import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';
import {server} from './_app';
import Cookies from 'js-cookie';


const Pronostico = () => {
    const axios = require('axios');
    const username = Cookies.get('username');
    const handlePlaceSelected = async (place) => {
       const lugar= JSON.stringify(place);
       const mensaje = JSON.parse(lugar.toString());
       const lat=mensaje.geometry.location.lat;
       const long=mensaje.geometry.location.lng;
       const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=854c5489c0f85d6fd1fd9a30d77eee0a&lang=es';
       const response = await axios.get(url);
       const lista_datos =response.data.list;
       lista_datos.forEach(element => {
        console.log(element.dt_txt);
       });
    };

    return (
        <div style={{ 
            width: '100vw',
            height: '100vh',
          }}>
            <Cabecera mostrarBotonHome={true}/>
            <div className="seleccion">
                <h2>PARTE DE ARRIBA</h2>
                <SearchBox onPlaceSelected ={handlePlaceSelected} />
            </div>
            <div className="dias">
                <h2>PARTE DE ABAJO</h2>
                <div className="dia1">
                    DIA1
                </div>
                <div className="dia2">
                DIA2
                </div>
                <div className="dia3">
                DIA3
                </div>
                <div className="dia4">
                DIA4
                </div>
                <div className="dia5">
                DIA5
                </div>
            </div>
            <Pie/>
        </div>
        
    ); 
};

export default Pronostico;
