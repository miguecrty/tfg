import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';
import {server} from './_app';
import Cookies from 'js-cookie';
import ChartTemperatura from '@/components/chartTemperatura';
import ChartNubes from '@/components/chartNubes';


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
            <div className="eltiempo">
            <div class="dias">
            <img class="icono" src={`http://openweathermap.org/img/w/01d.png`} alt="Icono del clima"></img>
            <p><strong>22 ºC</strong> en <strong>Cartaya</strong></p>

    <div class="info">
        <p class="parrafo"><strong>Precipitaciones:</strong>valor3</p>
        <p class="parrafo"><strong>Humedad:</strong>valor2</p>
        <p class="parrafo"><strong>Viento:</strong>valor1.</p>
    </div>
    
</div>
    <div class="grafica">
        <ChartNubes></ChartNubes>
    </div>
    <div class="selecciondias">
    <div class="infodias">
        <div class="dia1">
          <p>lunes
        <img src={`http://openweathermap.org/img/w/01n.png`} alt="Icono del clima"/>
        </p>
            </div>
        <div class="dia2">
        <p>lunes
        <img src={`http://openweathermap.org/img/w/01n.png`} alt="Icono del clima"/>
        </p>
            </div>
        <div class="dia3">
        <p>lunes
        <img src={`http://openweathermap.org/img/w/01n.png`} alt="Icono del clima"/>
        </p>
            </div>
        <div class="dia4">
        <p>lunes
        <img src={`http://openweathermap.org/img/w/01n.png`} alt="Icono del clima"/>
        </p>
            </div>
        <div class="dia5">
        <p>lunes
        <img src={`http://openweathermap.org/img/w/01n.png`} alt="Icono del clima"/>
        </p>
            </div>
    </div>

    </div>
    </div>

            <Pie/>
        </div>
        
    ); 
};

export default Pronostico;
