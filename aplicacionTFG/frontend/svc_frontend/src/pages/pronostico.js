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

    const handlePlaceSelected = async (place) => {
        const lugar= JSON.stringify(place);
        const mensaje = JSON.parse(lugar.toString());
        const lat=mensaje.geometry.location.lat;
        const long=mensaje.geometry.location.lng;
        try {
            const datos = {
              latitud: lat,
              longitud: long,
            };
        
        const response = await fetch('http://localhost:3000/obtenerpronostico', {
                method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(datos)
            });

            if (response.ok) {
                const data = await response.json();
                for (const dia in data.nubes) {
                    console.log(dia + ":");
                    console.log("  Horas: " + data.nubes[dia].horas);
                    console.log("  Valores: " + data.nubes[dia].valores);
                }
            }
        }
         catch(error){
            console.log(error);
         }
        
    

}
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
