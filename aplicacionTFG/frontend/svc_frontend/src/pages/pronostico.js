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
    const [diasSemana, setDiasSemana] = useState(null);
    const [datos,setDatos] = useState(null);
    const [nombrelugar,setNombreLugar] = useState(null);
    const [labels,setLabels] = useState([]);
    const [valores,setValores] = useState([]);
    const [valoresActuales,setValoresActuales] = useState(null);
    const handleDiaSeleccionado = async (dia) => {
        setLabels(datos.nubes[dia].horas);
        setValores(datos.nubes[dia].valores);
        let icono;
        let descripcion;
        let temperatura;
        let a = valoresActuales;
        if(datos.descripcion_tiempo[dia].valores.length == 8)
        {
            icono = datos.descripcion_tiempo[dia].valores[3].icon;
            descripcion = datos.descripcion_tiempo[dia].valores[3].description;
            temperatura = datos.temperatura[dia].valores[3].temp;
            const nuevosValores={
                icon:icono,
                temperatura:temperatura,
                description:descripcion,
                amanecer:valoresActuales.amanecer,
                atardecer:valoresActuales.atardecer
            }
            a=nuevosValores;
        }
        setValoresActuales(a);
        /*
        else{
            let tamanio =datos.descripcion_tiempo[dia].valores.length;
            let tamanio2 =datos.temperatura[dia].valores.length;
            tamanio = Math.floor(((tamanio2-1)/2));
            icono = valoresActuales.icon;
            descripcion = valoresActuales.description;
            temperatura= valoresActuales.temperatura;
        }*/
       
        
    }

    const handlePlaceSelected = async (place) => {
        const lugar= JSON.stringify(place);
        const mensaje = JSON.parse(lugar.toString());
        setNombreLugar(mensaje.address_components[0].long_name);
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
                let dias_semana = [];
                for (const dia in data.nubes) {
                    dias_semana.push(dia);
                }   
                setDiasSemana(dias_semana);
                setDatos(data);
                
                setLabels(data.nubes[dias_semana[0]].horas);
                setValoresActuales(data.datos_actuales);
                setValores(data.nubes[dias_semana[0]].valores)
            }
        }
         catch(error){
            console.log(error);
         }
          
    

}
useEffect(() => {
    console.log(valores);
}, [valores]);  
    return (
        <div style={{ 
            width: '100vw',
            height: '100vh',
          }}>
            
            <Cabecera mostrarBotonHome={true}/>
            <div className="seleccion">
                <h2>PARTE DE ARRIBA</h2>
                <SearchBox onPlaceSelected ={handlePlaceSelected} />
                <div class="dias">
                {nombrelugar && valoresActuales && (
                    <>
                        <img class="icono" src={`http://openweathermap.org/img/w/${valoresActuales.icon}.png`} alt="Icono del clima"></img>
                        <h1><strong>{valoresActuales.temperatura}ºC</strong> en <strong>{nombrelugar}</strong></h1><div class="info">
                            <p class="parrafo"><strong>Descripción:</strong>{valoresActuales.description}</p>
                            <p class="parrafo"><strong>Amanecer:</strong>{valoresActuales.amanecer}</p>
                            <p class="parrafo"><strong>Atardecer:</strong>{valoresActuales.atardecer}</p>
                        </div></>
                        )
                        
                        }

                    </div>
            </div>
            {diasSemana && (
            <><div className="eltiempo">
                    <div class="graficas">
                    <div class="grafica1">
                    {valores && labels && (
                        <ChartNubes data={valores} labels={labels} />
                    )
                    }
                    </div>
                    <div class="grafica2">
                    {valores && labels && (
                        <ChartNubes data={valores} labels={labels} />
                    )
                    }
                    </div>
                    <div class="grafica3">
                    {valores && labels && (
                        <ChartNubes data={valores} labels={labels} />
                    )
                    }
                    </div>
                    </div>
                    
                    <div class="selecciondias">
                        <div class="infodias">
                            <div class="dia1" onClick={() => handleDiaSeleccionado(diasSemana[0])}>

                                <p>{diasSemana[0]}
                                    <img src={`http://openweathermap.org/img/w/01n.png`} alt="Icono del clima" />
                                </p>

                            </div>
                            <div class="dia2" onClick={() => handleDiaSeleccionado(diasSemana[1])}>
                                <p>{diasSemana[1]}
                                    <img src={`http://openweathermap.org/img/w/01n.png`} alt="Icono del clima" />
                                </p>

                            </div>
                            <div class="dia3" onClick={() => handleDiaSeleccionado(diasSemana[2])}>
                                <p><strong>{diasSemana[2]}</strong></p>
                                    <img src={`http://openweathermap.org/img/w/01n.png`} alt="Icono del clima" />
                                

                            </div>
                            <div class="dia4" onClick={() => handleDiaSeleccionado(diasSemana[3])}>
                                <p>{diasSemana[3]}
                                    <img src={`http://openweathermap.org/img/w/01n.png`} alt="Icono del clima" />
                                </p>

                            </div>
                            <div class="dia5" onClick={() => handleDiaSeleccionado(diasSemana[4])}>
                                <p>{diasSemana[4]}
                                    <img src={`http://openweathermap.org/img/w/01n.png`} alt="Icono del clima" />
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
                </>)}
                <Pie />
        </div>
        
    ); 
};

export default Pronostico;
