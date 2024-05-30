import React, { useState, useEffect } from 'react';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';
import Head from 'next/head';
import { useRef } from 'react';
import ChartTodas from '@/components/chartTodas';
const Pronostico = () => {
    const [diasSemana, setDiasSemana] = useState(null);
    const [bandera, setBandera] = useState(false);
    const [datos, setDatos] = useState(null);
    const [datoslugar, setDatosLugar] = useState(null);
    const [labels, setLabels] = useState([]);
    const [valoresT, setValoresT] = useState([]);
    const [datasetsT, setDatasetsT] = useState([]);
    const [datasetsN, setDatasetsN] = useState([]);
    const [datasetsV, setDatasetsV] = useState([]);
    const [valoresActuales, setValoresActuales] = useState(null);
    const [diaSeleccionado, setDiaSeleccionado] = useState(null);
    const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState({ lat: 40.7128, lng: -74.006 });
    const [backgroundColor, setBackgroundColor] = useState('rgba(255,0,0,0.7)');
    
    useEffect(() => {
        const jsonSevilla = `{"address_components":[{"long_name":"Sevilla"},{"long_name":"Sevilla"},{"long_name":"Andalucía"},{"long_name":"España"},{"long_name":41003}],"geometry":{"location":{"lat":37.3890924,"lng":-5.9844589}}}`;
        const jsonObjectSevilla = JSON.parse(jsonSevilla);
        setDatosLugar(jsonObjectSevilla);
        const lat = jsonObjectSevilla.geometry.location.lat;
        const long = jsonObjectSevilla.geometry.location.lng;
        cargarDatos(lat,long);
    }, []);


    const handleDiaSeleccionado = (dia) => {
        setLabels(datos.temperatura[dia].horas);
        setValoresT(datos.temperatura[dia]);
        datasetsN.data = datos.nubes[dia].valores;
        datasetsT.data = datos.temperatura[dia].valores.temp;
        datasetsV.data = datos.viento[dia].valores;
        setDatasetsN(datasetsN);
        setDatasetsT(datasetsT);
        setDatasetsV(datasetsV);

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
        
        setDiaSeleccionado(dia);
        
    };

    const handlePlaceSelected = async (place, resolve) => {
        resolve();
        const lugar = JSON.stringify(place);
        console.log(lugar);
        const mensaje = JSON.parse(lugar.toString());
        setDatosLugar(mensaje);
        const lat = mensaje.geometry.location.lat;
        const long = mensaje.geometry.location.lng;
        cargarDatos(lat,long);
    };

    const cargarDatos= async (lat,long) => {

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
                setLabels(data.temperatura[dias_semana[0]].horas);
                setValoresActuales(data.datos_actuales);
                //Datasets chartTemp
                const datasetsTemperatura = {
                    label: 'Temperatura (ºC)',
                    data: data.temperatura[dias_semana[0]].valores.temp,
                    backgroundColor: 'rgba(255,100,0,0.3)',
                    borderColor:'rgba(255,100,0,0.5)',
                    borderWidth:1
                }
                //Datasets chartNubes
                const datasetsNubes = {
                    label: 'Nubes (%)',
                    data: data.nubes[dias_semana[0]].valores,
                    backgroundColor: 'rgba(0,150,150,0.3)',
                    borderColor:'rgba(0,150,150,0.5)',
                    borderWidth:1
                }
                //Datasets chartViento
                const datasetsViento = {
                    label: 'Viento (m/s)',
                    data: data.viento[dias_semana[0]].valores,
                    backgroundColor: 'rgba(55,30,50,0.3)',
                    borderColor:'rgba(55,30,50,0.5)',
                    borderWidth:1
                }       
                setDatasetsN(datasetsNubes);
                setDatasetsT(datasetsTemperatura);
                setDatasetsV(datasetsViento);
                setValoresT(data.temperatura[dias_semana[0]]);
                setDiaSeleccionado(dias_semana[0]);
            }

        } catch (error) {
            console.log(error);
        }
    };

    function getIconUrl(dia){
        const frecuencia = datos.descripcion_tiempo[dia].valores.reduce((acc, val) => {
            acc[val.icon] = (acc[val.icon] || 0) + 1;
            return acc;
        }, {});
    
        let maxFrecuencia = 0;
        let iconoMasComun;
    
        for (const [icon, count] of Object.entries(frecuencia)) {
            if (count > maxFrecuencia) {
                maxFrecuencia = count;
                iconoMasComun = icon;
            }
        }
            return `http://openweathermap.org/img/w/${iconoMasComun}.png`;
    }
    const targetRef = useRef();
    return (
            <>
             <Head>
                <title>Pronóstico</title>
                <link rel="icon" href="./images/logo.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Head>
            <Cabecera mostrarBotonHome={true} mostrarUser={true} />
                <>
            <div className="row">
                <div className='col-3 mt-1 mr-3'>

                <div className="p-4 rounded shadow bg-warning text-dark bg-opacity-50 ml-3 mt-3 mr-3"  style={{ minWidth:'150px',maxWidth: '400px'}}>
                       <h2 className="mb-4 text-center">Buscar Ubicación</h2>
                       <SearchBox onPlaceSelected={handlePlaceSelected}
                    pronostico={true}
                    mostrarMapa={false}
                    ubicacionSeleccionada={ubicacionSeleccionada}
                    setUbicacionSeleccionada={setUbicacionSeleccionada} 
                    />
                   </div>
                   
                
                </div>
                {datoslugar &&(
                <div className='col-4 mt-1 ml-5'>
                    <div className='card text-center border-0 shadow-lg ml-3 mt-3 mb-2' style={{minWidth:'200px'}}>
                    <div className="card-header" style={{background:'rgba(0,0,255,0.1)'}}>
                    <h1>{datoslugar.address_components[0].long_name}</h1>
                        </div>
                <div className='row'>
                     <div className='col ml-2' >
                        {datoslugar.address_components[1] && (
                        <p>Provincia: <strong>{datoslugar.address_components[1].long_name}</strong></p>
                        )}
                        {datoslugar.address_components[2] && (
                        <p>Comunidad Autónoma: <strong>{datoslugar.address_components[2].long_name}</strong></p>
                        )}
                    </div>
                    <div className='col ml-2 mr-2'>
                    {datoslugar.address_components[4] && (
                        <p>Código postal: <strong>{datoslugar.address_components[4].long_name}</strong></p>
                    )}
                    {datoslugar.address_components[3] && (
                        <p>País: <strong>{datoslugar.address_components[3].long_name}</strong></p>
                    )}
                    </div>
                </div>
                </div>
                </div>
                )}
                <div className='col mt-1' style={{minWidth:'400px'}}>
                <div className='card border-0 shadow-lg ml-3 mt-3 mr-3 mb-2 text-center'>
                {valoresActuales && diaSeleccionado && valoresT &&(
                       <>
                       
                       <div className="card-header" style={{background:'rgba(0,0,255,0.1)'}}>
                       <h1 >Previsión para el {diaSeleccionado}</h1>
                        </div>
                        <div className="row">
                             <div className="col">
                             <strong>Descripción:</strong><p >{valoresActuales.description}</p> 
                                </div>
                                <div className="col">
                                <img className="icono" src={getIconUrl(diaSeleccionado)} alt="Icono del clima"></img>   
                              </div>
                              <div className="col">
                             <strong>Amanecer: </strong><p>{valoresActuales.amanecer}</p>   
                              </div>
                        </div>
                        <div className="row">
                            <div className="col">                    
                            <strong>Temperatura máx:<p className='text-danger'>{valoresT.temp_max} ºC</p> </strong>
                             </div>
                             <div className="col">  
                             <strong>Temperatura mín: <p className='text-primary'>{valoresT.temp_min} ºC</p></strong>
                                </div> 
                                <div className="col"> 
                              <strong>Atardecer: </strong> <p>{valoresActuales.atardecer}</p>
                               </div>
                        </div>     
                      </>
                    )}
                </div>
                
                </div>
               
            </div>
          
            <div className="row-1" style={{marginBottom:'10vh'}}>
                <div className='card border-0 shadow-lg ml-2 mr-2 mb-2'>
                <div className="row">
            {diasSemana && diaSeleccionado &&(
                <>
                <div className="row mr-2 ml-2 mt-2">
                <div className="row mb-3">
                                {diasSemana.map((dia, index) => (
                                    <div className='col'>
                                    <div
                                        key={index}
                                        className={`card border-0 shadow`}
                                        onClick={() => handleDiaSeleccionado(dia)}
                                        style={{
                                        background: diaSeleccionado === dia ? backgroundColor : 'rgba(255,125,0,0.5)',
                                        cursor:'pointer'
                                        }}
                                    >
                                        <h4 className="text-center">{dia}<img src={getIconUrl(dia)} alt="Icono del clima" className="img-fluid"/></h4>
                                    </div>
                                    </div>
                                ))}
                            </div>                    
                    <div className="col text-center">
                        <div className='card border-0 shadow mb-2 ml-2'>
                        <div className="card-header" style={{background:'rgba(255,100,0,0.2)', minWidth:'300px'}}>
                        <h6>Temperatura</h6>
                        </div>
                                {datasetsT && labels && (
                                    <ChartTodas datasets={datasetsT} labels={labels} tipo={'line'}/> 
                                )}
                            </div>
                            </div>
                            <div className="col text-center">
                        <div className='card border-0 shadow mb-2 ml-2'>
                        <div className="card-header" style={{background:'rgba(0,150,150,0.2)', minWidth:'300px'}}>
                        <h6>Nubes</h6>
                        </div>
                                {datasetsN && labels && (
                                   <ChartTodas datasets={datasetsN} labels={labels} tipo={'bar'}/>
                                )}
                            </div>
                            </div>
                            <div className="col text-center">
                        <div className='card border-0 shadow mb-2 ml-2'>
                        <div className="card-header" style={{background:'rgba(55,30,50,0.2)', minWidth:'300px'}}>
                        <h6>Viento</h6>
                        </div>      {datasetsV && labels && (
                                    <ChartTodas datasets={datasetsV} labels={labels} tipo={'line'}/> 
                                )}
                            </div>
                            </div>
                </div>               
               
                </>
            )}
            </div>
            </div>
            </div>
            
        </>
       

            <Pie />
            </>
    );
};

export default Pronostico;


