import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';
import { server } from './_app';
import Cookies from 'js-cookie';
import ChartTemp from '@/components/chartTemp';
import ChartNubes from '@/components/chartNubes';

const Pronostico = () => {
    const [diasSemana, setDiasSemana] = useState(null);
    const [datos, setDatos] = useState(null);
    const [nombrelugar, setNombreLugar] = useState(null);
    const [labels, setLabels] = useState([]);
    const [valoresN, setValoresN] = useState([]);
    const [valoresT, setValoresT] = useState([]);
    const [valoresV, setValoresv] = useState([]);
    const [valoresActuales, setValoresActuales] = useState(null);
    const [diaSeleccionado, setDiaSeleccionado] = useState(null);
    const windSpeedData = [10, 15, 8, 12, 20, 18, 13, 9];

    const handleDiaSeleccionado = (dia) => {
        setLabels(datos.nubes[dia].horas);
        setValoresN(datos.nubes[dia].valores);
        setValoresT(datos.temperatura[dia].valores);
        //setValoresV(datos.temperatura[dia].valores);
        const temperatura = datos.descripcion_tiempo[dia].valores.length == 8 ?
            datos.temperatura[dia].valores.temp[3] :
            valoresActuales.temperatura;
            
        const nuevosValores = {
            icon: datos.descripcion_tiempo[dia].valores[0].icon,
            temperatura: temperatura,
            description: datos.descripcion_tiempo[dia].valores[0].description,
            amanecer: valoresActuales.amanecer,
            atardecer: valoresActuales.atardecer
        };
        setValoresActuales(nuevosValores);
        setDiaSeleccionado(dia); // Guardar el día seleccionado
    };

    const handlePlaceSelected = async (place) => {
        const lugar = JSON.stringify(place);
        const mensaje = JSON.parse(lugar.toString());
        setNombreLugar(mensaje.address_components[0].long_name);
        const lat = mensaje.geometry.location.lat;
        const long = mensaje.geometry.location.lng;
        try {
            const datos = {
                latitud: lat,
                longitud: long,
            };

            const response = await fetch('http://'+server+'/obtenerpronostico', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });

            if (response.ok) {
                const data = await response.json();
                const dias_semana = Object.keys(data.nubes);
                setDiasSemana(dias_semana);
                setDatos(data);
                setLabels(data.nubes[dias_semana[0]].horas);
                setValoresActuales(data.datos_actuales);
                setValoresN(data.nubes[dias_semana[0]].valores);
                setValoresT(data.temperatura[dias_semana[0]].valores);
                //setValoresV(data.viento[dias_semana[0]].valores);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const getIconUrl= (dia) =>`http://openweathermap.org/img/w/${datos.descripcion_tiempo[dia].valores[0].icon}.png`;

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
        }}>

            <Cabecera mostrarBotonHome={true} />
            <div className="seleccion">
                <h2>PARTE DE ARRIBA</h2>
                <SearchBox onPlaceSelected={handlePlaceSelected} />
                <div className="dias">
                    {nombrelugar && valoresActuales && (
                        <>
                            <img className="icono" src={getIconUrl(diasSemana[0])} alt="Icono del clima"></img>
                            <h1><strong>{valoresActuales.temperatura}ºC</strong> en <strong>{nombrelugar}</strong></h1>
                            <div className="info">
                                <p className="parrafo"><strong>Descripción:</strong>{valoresActuales.description}</p>
                                <p className="parrafo"><strong>Amanecer:</strong>{valoresActuales.amanecer}</p>
                                <p className="parrafo"><strong>Atardecer:</strong>{valoresActuales.atardecer}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {diasSemana && (
                <>
                    <div className="eltiempo">
                        <div className="graficas">
                            <div className="grafica1">
                                {valoresT && labels && (
                                    <ChartTemp data={valoresT} labels={labels} />
                                )}
                            </div>
                            <div className="grafica2">
                                {valoresN && labels && (
                                    <ChartNubes data={valoresN} labels={labels} />
                                )}
                            </div>
                            <div className="grafica3">
                                {/* Render additional chart if needed */}
                            </div>
                        </div>

                        <div className="selecciondias">
                            <div className="infodias">
                                {diasSemana.map((dia, index) => (
                                    <div
                                        key={index}
                                        className={`dia${index + 1} ${diaSeleccionado === dia ? 'seleccionado' : ''}`}
                                        onClick={() => handleDiaSeleccionado(dia)}
                                    >
                                        <p className="textodia">{dia}</p>
                                            <img src={getIconUrl(dia)} alt="Icono del clima" className="imagen"/>
                                       
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
            <Pie />
        </div>

    );
};

export default Pronostico;
