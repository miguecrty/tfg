import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Map from './map';
import ChartTemperatura from './chartTemperatura';
import { server } from '@/pages/_app';

const SelectPersonalizado = () => {
  
    const [opciones, setOpciones] = useState([]);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
    const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState({ lat: 40.7128, lng: -74.006 });
    const [datasets, setDatasets] = useState([]);
    const [labels, setLabels] = useState([]);
    const [datosActuales, setDatosActuales] = useState(null);
    const center = { lat: 40.7128, lng: -74.006 };
    const zoom = 15;
    const username = Cookies.get('username');

 
    const obtenerLista = async (usuario) => {
        let lista ={};
        try {
            const response = await fetch('http://'+server+'/obtenerlista', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "usuario": usuario })
            });

            if (response.status === 200) {
                lista = await response.json();
                const lugares =[];
                for (let lugar in lista) {
                    lugares.push(lugar);
                  }
                setOpciones(lugares);
            } else {
                console.error('Error al obtener la lista');
            }
        } catch (error) {
            console.error('Error al obtener la lista:', error);
        }
        return lista;
    };

    const obtenerDatosParaGrafico = async (lugar) => {
        try {
          const datos = {
            username: username,
            lugar: lugar,
          };
      
          const response = await fetch('http://'+server+'/obtenerdatosgraficatemperatura', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log(data.datosClimaticos);
            const colores = ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
            const nombresPersonalizados = ['Humedad (%)', 'Sensación térmica (ºC)', 'Presión (hPa)', 'Temperatura (ºC)', 'Temperatura máxima (ºC)', 'Temperatura mínima (ºC)'];
            const newDatasets = Object.keys(data.datosClimaticos).filter(key => key !== 'tomas').map((key,index)=> ({
              label: nombresPersonalizados[index],
              data: data.datosClimaticos[key],
              backgroundColor: colores[index % colores.length], // Asigna un color único a cada dataset
                borderColor: colores[index % colores.length].replace('0.2', '1'),
              borderWidth: 1,
              hidden: true
            }));
            
            setDatasets(newDatasets);
            setLabels(data.datosClimaticos.tomas);
            setDatosActuales(data.datosActuales);
          } else {
            console.error('Error al obtener los datos para el gráfico');
          }
        } catch (error) {
          console.error('Error al obtener los datos para el gráfico:', error);
        }
      };


    useEffect(() => {
        obtenerLista(username);
    }, []);

    
    

    const handleOpcionSeleccionada = async (opcion, index) => {
        setOpcionSeleccionada(opcion);
        const lista = await obtenerLista(username);
        const [latitud, longitud] = lista[opcion].split("|").map(parseFloat);
      
        setUbicacionSeleccionada({ lat: latitud, lng: longitud });
        await obtenerDatosParaGrafico(opcion);
      };

    return (
        <div className="contenedores">        
          <div className="contenedor1"> 
            <h2>Lista de lugares</h2>
                <div className="listalugares">
                    {opciones.map((opcion, index) => (
                    <div
                        key={index}
                        className="opcion"
                        onClick={() => handleOpcionSeleccionada(opcion, index)} // Pasar la opción y su índice al manejador de clics
                    >
                        <span>{opcion}</span> {/* Suponiendo que cada opción tiene un nombre */}
                    </div>
                ))}
                </div>
                <div className="mapalugares">
                {/* Pasar la ubicación seleccionada al componente Map */}
                <Map center={ubicacionSeleccionada} zoom={zoom} markerPosition={ubicacionSeleccionada}/> 
                </div>
          </div>
          <div className="contenedor2">
            <div className="monitorizar">
            {opcionSeleccionada ? (
                <h2>Monitorizando {opcionSeleccionada}</h2>
                ) : (
                <h2>Monitorización</h2>
                )}
              <div className="temperatura">
              {opcionSeleccionada ? (
                 <ChartTemperatura datasets={datasets} labels={labels} />
                ) : (
                <strong>Selecciona un lugar para monitorizar</strong>
                )}
               
              </div>
              <div className="nubes">
              {datosActuales ? (
                 <>
                 <p>Descripcion: <strong>{datosActuales.tiempo_actual}</strong>
                 <img src={`http://openweathermap.org/img/w/${datosActuales.icono}.png`} alt="Icono del clima"/>
                 </p> 
                <p>Dirección del viento: <strong>{datosActuales.viento_direccion}º</strong></p>
                <p>Velocidad del viento: <strong>{datosActuales.viento_velocidad.toFixed(2)}m/s</strong></p>
                <p>Nubes: <strong>{datosActuales.nubes_actual}%</strong></p>
              </>
            ): (<></>)
              }
              </div>
              <div className="viento">
                
              </div>
            </div>
          </div>
        </div>
      );
};

export default SelectPersonalizado;

