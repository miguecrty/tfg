import React, { useState, useEffect } from 'react';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';
import ChartNubes from '@/components/chartNubes';
import Head from 'next/head';
import ChartTemperatura from '@/components/chartTemperatura';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import { useRef } from 'react';
const getTargetElement = () => document.getElementById('content-id');
const Pronostico = () => {

    const options = {
        // default is `save`
        method: 'open',
        // default is Resolution.MEDIUM = 3, which should be enough, higher values
        // increases the image quality but also the size of the PDF, so be careful
        // using values higher than 10 when having multiple pages generated, it
        // might cause the page to crash or hang.
        resolution: Resolution.HIGH,
        page: {
           // margin is in MM, default is Margin.NONE = 0
           margin: Margin.SMALL,
           // default is 'A4'
           format: 'letter',
           // default is 'portrait'
           orientation: 'landscape',
        },
        canvas: {
           // default is 'image/jpeg' for better size performance
           mimeType: 'image/png',
           qualityRatio: 1
        },
        // Customize any value passed to the jsPDF instance and html2canvas
        // function. You probably will not need this and things can break, 
        // so use with caution.
        overrides: {
           // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
           pdf: {
              compress: true
           },
           // see https://html2canvas.hertzen.com/configuration for more options
           canvas: {
              useCORS: true
           }
        },
     };


    const [diasSemana, setDiasSemana] = useState(null);
    const [bandera, setBandera] = useState(false);
    const [datos, setDatos] = useState(null);
    const [datoslugar, setDatosLugar] = useState(null);
    const [labels, setLabels] = useState([]);
    const [valoresN, setValoresN] = useState([]);
    const [valoresT, setValoresT] = useState([]);
    const [valoresV, setValoresv] = useState([]);
    const [valoresActuales, setValoresActuales] = useState(null);
    const [diaSeleccionado, setDiaSeleccionado] = useState(null);
    const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState({ lat: 40.7128, lng: -74.006 });
    const [backgroundColor, setBackgroundColor] = useState('rgba(255,0,0,0.7)');
    const handleDiaSeleccionado = (dia) => {
        
        setLabels(datos.nubes[dia].horas);
        setValoresN(datos.nubes[dia].valores);
        setValoresT(datos.temperatura[dia]);
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
        
        setDiaSeleccionado(dia);
        
    };

    const handlePlaceSelected = async (place, resolve) => {
        resolve();
        setBandera(true);
        const lugar = JSON.stringify(place);
        const mensaje = JSON.parse(lugar.toString());
        setDatosLugar(mensaje);
        console.log(mensaje);
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
                setValoresT(data.temperatura[dias_semana[0]]);
                setDiaSeleccionado(dias_semana[0]);
                //setValoresV(data.viento[dias_semana[0]].valores);
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
                <link rel="icon" href="./images/map.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Head>
            <Cabecera mostrarBotonHome={true} />
            <button onClick={() => generatePDF(targetRef,{page: {
           margin: Margin.SMALL,
           format: 'A4',
           orientation: 'landscape',
        }},{filename: 'page.pdf'})}>Generate PDF</button>
            
         <div ref={targetRef}>
            {bandera && (
                <>
            <div className="row">
                <div className='col-3 mt-1'>

                <div className="p-4 rounded shadow bg-warning text-dark bg-opacity-50 ml-3 mt-3" style={{ maxWidth: '400px', width: '100%' }}>
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
                <div className='col-4 mt-1'>
                    <div className='card text-center border-0 shadow-lg ml-3 mt-3 mb-2'>
                    <div class="card-header" style={{background:'rgba(0,0,255,0.1)'}}>
                    <h1>{datoslugar.address_components[0].long_name}</h1>
                        </div>
                <div className='row'>
                     <div className='col ml-2'>
                        {datoslugar.address_components[1] && (
                        <p>Ciudad: <strong>{datoslugar.address_components[1].long_name}</strong></p>
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
                <div className='col mt-1'>
                <div className='card border-0 shadow-lg ml-3 mt-3 mr-3 mb-2 text-center'>
                {valoresActuales && diaSeleccionado && valoresT &&(
                       <>
                       
                       <div class="card-header" style={{background:'rgba(0,0,255,0.1)'}}>
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
                        <div class="card-header" style={{background:'rgba(0,150,150,0.2)'}}>
                        <h6>Temperatura</h6>
                        </div>
                                {valoresT && labels && (
                                    <ChartTemperatura data={valoresT.valores} labels={labels} /> 
                                )}
                            </div>
                            </div>
                            <div className="col text-center">
                        <div className='card border-0 shadow mb-2 ml-2'>
                        <div class="card-header" style={{background:'rgba(255,100,0,0.2)'}}>
                        <h6>Nubes</h6>
                        </div>
                                {valoresN && labels && (
                                   <ChartNubes data={valoresN} labels={labels} />
                                )}
                            </div>
                            </div>
                            <div className="col text-center">
                        <div className='card border-0 shadow mb-2 ml-2'>
                        <div class="card-header" style={{background:'rgba(55,30,50,0.2)'}}>
                        <h6>Viento</h6>
                        </div>
                                    <ChartTemperatura data={valoresT} labels={labels} /> 
                            </div>
                            </div>
                </div>               
               
                </>
            )}
            </div>
            </div>
            </div>
            
        </>)
       
        }
            </div>
            
            {!bandera && (
               <>
               <div className='row'>
               <div className="col-4 mt-3 mr-3 ml-3 d-flex justify-content-center align-items-center">
                   <div className="p-4 rounded shadow bg-white" style={{width: '100%' }}>
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
               {/* 
               <div className="col d-flex justify-content-center align-items-center vh-90 mt-2 p-0 ">
            <div className="card rounded shadow mx-4 mb-5">
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
                        <img src='./images/pronost.png' className='img-fluid' alt='Pronóstico Ejemplo' />
                    </div>
                </div>
            </div>
            
        </div>
        */}

             </div>
               

           </>
           
            )}
            <Pie />
            </>
    );
};

export default Pronostico;
