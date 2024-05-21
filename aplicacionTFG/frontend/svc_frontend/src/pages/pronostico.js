import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';
import { server } from './_app';
import Cookies from 'js-cookie';
import ChartTemp from '@/components/chartTemp';
import ChartNubes from '@/components/chartNubes';
import Head from 'next/head';

const Pronostico = () => {
    const [diasSemana, setDiasSemana] = useState(null);
    const [bandera, setBandera] = useState(false);
    const [datos, setDatos] = useState(null);
    const [nombrelugar, setNombreLugar] = useState(null);
    const [labels, setLabels] = useState([]);
    const [valoresN, setValoresN] = useState([]);
    const [valoresT, setValoresT] = useState([]);
    const [valoresV, setValoresv] = useState([]);
    const [valoresActuales, setValoresActuales] = useState(null);
    const [diaSeleccionado, setDiaSeleccionado] = useState(null);
    const windSpeedData = [10, 15, 8, 12, 20, 18, 13, 9];
    const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState({ lat: 40.7128, lng: -74.006 });

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

    const handlePlaceSelected = async (place, resolve) => {
        resolve();
        setBandera(true);
        const lugar = JSON.stringify(place);
        const mensaje = JSON.parse(lugar.toString());
        setNombreLugar(mensaje.address_components[0].long_name);
        const lat = mensaje.geometry.location.lat;
        const long = mensaje.geometry.location.lng;
        try {
            const response = await fetch(`/api/obtenerpronostico?lat=${lat}&lon=${long}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
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
            <>
             <Head>
                <title>Pronóstico</title>
                <link rel="icon" href="./images/map.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Head>
            <Cabecera mostrarBotonHome={true} />
            {bandera && (
                <>
            <div className="row">
                <div className='col mt-3'>
                    <div className='card align-items-center border-2 ml-3' style={{height:'200px'}}>
                    <h5 className='text-center'>PRUEBAAAA</h5>
                    <SearchBox onPlaceSelected={handlePlaceSelected}
                    pronostico={true}
                    mostrarMapa={false}
                    ubicacionSeleccionada={ubicacionSeleccionada}
                    setUbicacionSeleccionada={setUbicacionSeleccionada} 
                />
                </div>
                </div>
                <div className='col-md-3 mt-3'>
                {nombrelugar && valoresActuales && (
                        <>
                        <div className="d-flex card border-2 text-center mb-5 mr-3">
                            
                            <h1 ><strong>{valoresActuales.temperatura}ºC</strong> en <strong>{nombrelugar}</strong></h1>
                                <p><strong>Descripción: </strong>{valoresActuales.description}
                                <img className="icono" src={getIconUrl(diasSemana[0])} alt="Icono del clima"></img>
                                </p>
                                <p><strong>Amanecer: </strong>{valoresActuales.amanecer}</p>
                                <p><strong>Atardecer: </strong>{valoresActuales.atardecer}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="row-2">
                <div className="row">
            {diasSemana && (
                <>
                <div className="row mr-2">
                    <h3 className='text-center mb-3'>Pronóstico de los siguientes días</h3>
                            <div className="col">
                                {valoresT && labels && (
                                    <ChartTemp data={valoresT} labels={labels} /> 
                                )}
                            </div>
                            <div className="col">
                                {valoresN && labels && (
                                   <ChartNubes data={valoresN} labels={labels} />
                                )}
                            </div>
                            <div className="col">
                                    <ChartTemp data={valoresT} labels={labels} /> 
                            </div>
                        </div>               
                <div className="row mb-3">
                                {diasSemana.map((dia, index) => (
                                    <div className='col'>
                                    <div
                                        key={index}
                                        className={`card`}
                                        style={{cursor:'pointer'}}
                                        onClick={() => handleDiaSeleccionado(dia)}
                                    >
                                        <p className="text-center">
                                        {dia}
                                        <img src={getIconUrl(dia)} alt="Icono del clima" className="imagen"/>
                                        </p>
                                            
                                       
                                    </div>
                                    </div>
                                ))}
                            </div>    
                </>
            )}
            </div>
            </div>
            
        </>)
            }
            {!bandera && (
               <>
               <div className='row'>
               <div className="col d-flex justify-content-center align-items-center" style={{height:'500px'}}>
                   <div className="p-4 rounded shadow bg-white" style={{ maxWidth: '400px', width: '100%' }}>
                       <h2 className="mb-4 text-center">Buscar Ubicación</h2>
                       <SearchBox 
                           onPlaceSelected={handlePlaceSelected}
                           pronostico={true}
                           mostrarMapa={false}
                           ubicacionSeleccionada={ubicacionSeleccionada}
                           setUbicacionSeleccionada={setUbicacionSeleccionada} 
                       />
                   </div>
            
               </div>
               <div className="col-12 col-md-6 d-flex justify-content-center align-items-center vh-90 mt-2">
            <div className="card rounded shadow mx-4 mb-5" style={{ width: '100%' }}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Información de la Sección Pronóstico</h2>
                    <p className="card-text">En esta sección se podrá seleccionar un lugar para observar el pronóstico del tiempo en los 5 siguientes días:</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Gráfica Temperatura</strong></li>
                        <li className="list-group-item"><strong>Gráfica Nubes</strong></li>
                        <li className="list-group-item"><strong>Gráfica Viento</strong></li>
                    </ul>
                    <h3 className='text-center'>Ejemplo</h3>
                    <div className="text-center">
                        <img src='./images/pronosticoj.png' className='img-fluid' alt='Pronóstico Ejemplo' />
                    </div>
                </div>
            </div>
        </div>

               </div>
               

           </>
           
            )}
            <Pie />
            </>
    );
};

export default Pronostico;
