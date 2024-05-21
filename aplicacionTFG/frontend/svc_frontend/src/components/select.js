import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Map from './map';
import ChartTemperatura from './chartTemperatura';
import SearchBox from '../components/searchbox';

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

  const handlePlaceSelected = async (place, resolve) => {
    alert("Has seleccionado " + place.address_components[0].long_name);
    await obtenerLista(username, true);
    resolve();
  };

  const handleOpcionSeleccionada = async (opcion, index) => {
    console.log(opcion);
    setOpcionSeleccionada(opcion);
    const lista = await obtenerLista(username, false);
    const [latitud, longitud] = lista[opcion].split("|").map(parseFloat);
    setUbicacionSeleccionada({ lat: latitud, lng: longitud });
    await obtenerDatosParaGrafico(opcion);
  };

  const obtenerLista = async (usuario, actualizar) => {
    let lista = {};
    try {
      const response = await fetch('/api/obtenerlista?usuario=' + usuario, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        lista = await response.json();
        console.log(lista);
        const lugares = [];
        for (let lugar in lista) {
          lugares.push(lugar);
        }
        if (actualizar) {
          setOpciones(lugares);
        }
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
      const response = await fetch('/api/obtenerdatosgraficatemperatura?usuario=' + username + "&lugar=" + lugar, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.datosClimaticos);
        const colores = ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        const nombresPersonalizados = ['Humedad (%)', 'Sensación térmica (ºC)', 'Presión (hPa)', 'Temperatura (ºC)', 'Temperatura máxima (ºC)', 'Temperatura mínima (ºC)'];
        const newDatasets = Object.keys(data.datosClimaticos).filter(key => key !== 'tomas').map((key, index) => ({
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
    obtenerLista(username, true);
  }, []);

  return (
     <div className="row">
     <div className="col-md-4">
       {/*Primera fila de la primera columna*/}
      <div className="row-md-4 mt-3 ml-3">
      
            <div className="card">
              <div className="card-body">
            <h4>Lista de lugares</h4>
            {opciones.length ? (
                  <div className="list-group"  style={{ maxHeight: '160px', overflowY: 'auto' }}>
                  {opciones.map((opcion, index) => (
                    <button
                      key={index}
                      className="list-group-item list-group-item-action"
                      onClick={() => handleOpcionSeleccionada(opcion, index)}
                    >
                      {opcion}
                    </button>
                  ))}
                  </div>
                ) : (
                <p>No hay ningun lugar monitorizándose</p>
                )}
            
              </div>
            </div>
          </div>
      

        {/*Segunda fila de la primera columna*/}
        <div className="row-md-4 mt-3 ml-3 mb-3">
        <div className="card">
        <div className="card-body">
        <h4>Mapa</h4>
          <SearchBox
            onPlaceSelected={handlePlaceSelected}
            mostrarMapa={true}
            ubicacionSeleccionada={ubicacionSeleccionada}
            setUbicacionSeleccionada={setUbicacionSeleccionada}
            opciones={opciones}
            setOpciones={setOpciones}
          />
          </div>
          </div>
      </div>

        </div>
      <div className="col mt-4  mr-3">
            <div className="card pb-5">
              <div className="card-body">
                {opcionSeleccionada ? (
                  <h4>Monitorizando {opcionSeleccionada}</h4>
                ) : (
                  <h4>Monitorización</h4>
                )}
                <div className="row">
                  <div className='col'>
                <div className="card mt-4">
                  {opcionSeleccionada ? (
                    <ChartTemperatura datasets={datasets} labels={labels} />
                  ) : (
                    <strong className='text-center pt-3 pb-3'> ⬅ ⬅ Selecciona un lugar para monitorizar</strong>
                  )}
                </div>
                </div>
                
                  {datosActuales ? (
                    
                    <>
                    <div className='col-md-3'>
                <div className="card mt-5">
                      <p className='text-center'>Descripción: <strong>{datosActuales.tiempo_actual}</strong>
                        <img src={`http://openweathermap.org/img/w/${datosActuales.icono}.png`} alt="Icono del clima" />
                      </p>
                      <p className='text-center'>Dirección del viento: <strong>{datosActuales.viento_direccion}º</strong></p>
                      <p className='text-center'>Velocidad del viento: <strong>{datosActuales.viento_velocidad.toFixed(2)}m/s</strong></p>
                      <p className='text-center'>Nubes: <strong>{datosActuales.nubes_actual}%</strong></p>
                      </div>
                </div>
                    </>
                  ) : (
                    <></>
                  )}
               
                </div>
              </div>
            </div>
          </div>
          </div>
      
  );
};

export default SelectPersonalizado;
