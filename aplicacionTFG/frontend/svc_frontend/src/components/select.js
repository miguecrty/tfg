import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Map from './map';
import ChartTodas from './chartTodas';
import SearchBox from '../components/searchbox';

const SelectPersonalizado = () => {
  const [opciones, setOpciones] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState({ lat: 40.7128, lng: -74.006 });
  const [datasets, setDatasets] = useState(null);
  const [datasetslista, setDatasetsLista] = useState([]);
  const [labels, setLabels] = useState([]);
  const [datosActuales, setDatosActuales] = useState(null);
  const center = { lat: 40.7128, lng: -74.006 };
  const zoom = 15;
  const username = Cookies.get('username');
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    let color, borde;
    console.log("::::::::::::::::::");
    console.log(datasetslista[index])
if (index === 0) {
  color = 'rgba(0, 0, 255, 0.5)'; // Azul
  borde = 'rgba(0, 0, 255, 0.2)';
} else if (index === 1) {
  color = 'rgba(0, 255, 255, 0.5)'; // Cyan
  borde = 'rgba(0, 255, 255, 0.2)';
} else if (index === 2) {
  color = 'rgba(255, 0, 255, 0.5)'; // Magenta
  borde = 'rgba(255, 0, 255, 0.2)';
} else if (index === 3) {
  color = 'rgba(255, 255, 0, 0.5)'; // Amarillo
  borde = 'rgba(255, 255, 0, 0.2)';
} else if (index === 4) {
  color = 'rgba(0, 0, 255, 0.5)'; // Azul
  borde = 'rgba(0, 0, 255, 0.2)';
} else if (index === 5) {
  color = 'rgba(173, 216, 230, 0.5)'; // Azul claro
  borde = 'rgba(173, 216, 230, 0.2)';
}

    
      datasetslista[index].backgroundColor=color;
      datasetslista[index].borderColor=borde;
      datasetslista[index].borderWidth=1;
      setActiveTab(index);
      setDatasets(datasetslista[index]);
  };

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
       const nombresPersonalizados = ['Temperatura (ºC)', 'Temperatura máxima (ºC)', 'Temperatura mínima (ºC)', 'Sensación térmica (ºC)', 'Presión (hPa)','Humedad (%)'];
        const newDatasets = Object.keys(data.datosClimaticos).filter(key => key !== 'tomas').map((key, index) => ({
          label: nombresPersonalizados[index],
          data: data.datosClimaticos[key],
        }));
        await Promise.all([
          setDatasetsLista(newDatasets),
          setLabels(data.datosClimaticos.tomas),
          setDatosActuales(data.datosActuales)
        ]);
        handleTabClick(0);
      } else {
        console.error('Error al obtener los datos para el gráfico');
      }
    } catch (error) {
      console.error('Error al obtener los datos para el gráfico:', error);
    }
  };
  useEffect(() => {
    if (datasetslista.length > 0 && labels.length > 0 && datosActuales !== null) {
      handleTabClick(0);
    }
  }, [datasetslista, labels, datosActuales]);
  useEffect(() => {
    obtenerLista(username, true);
  }, []);

  return (
    <>
     <div className="row mr-0 ml-0">
     <div className="col-md-4">
      <div className="row-md-4 mt-3 ml-3">
      
            <div className="card">
              <div className="card-body">
            <h4>Lista de lugares</h4>
            {opciones.length ? (

                  <div className="list-group"  style={{ minHeight:'160px',maxHeight: '160px', overflowY: 'auto' }}>
                  {opciones.map((opcion, index) => (
                    <button
                      key={index}
                      className="list-group-item mb-2 border-2 list-group-item-action"
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
      <div className="col mt-3  mr-3">
            <div className="card" style={{ minHeight:'670px',maxHeight: '670px'}}>
              <div className="card-body">
                {opcionSeleccionada ? (
                  <h4>Monitorizando {opcionSeleccionada}</h4>
                ) : (
                  <h4>Monitorización</h4>
                )}
                <div className="row">
                  <div className='col'>
                <div className="card mt-4 border-0">
                  {opcionSeleccionada ? (
                    <>
                    <div className='row'>
                  <ul className="nav nav-tabs border-0">
                  <li className="nav-item">
                    <button className={`nav-link ml-3 ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>Temperatura</button>
                  </li>
                  <li className="nav-item">
                    <button className={`nav-link ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>Temperatura Máx</button>
                  </li>
                  <li className="nav-item">
                    <button className={`nav-link ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Temperatura Mín</button>
                  </li>
                  <li className="nav-item">
                    <button className={`nav-link ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>Sensación térmica</button>
                  </li>
                  <li className="nav-item">
                    <button className={`nav-link ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>Presión</button>
                  </li>
                  <li className="nav-item">
                    <button className={`nav-link ${activeTab === 5 ? 'active' : ''}`} onClick={() => handleTabClick(5)}>Humedad</button>
                  </li>
                  </ul>
                  </div>
                  <div className='row mb-5'>
                    {datasets && labels &&(
                    <ChartTodas datasets={datasets} labels={labels} tipo={'line'} />
                    )}
                  </div>
                  </>
              
                  ) : (
                    <strong className='text-center pt-3 pb-3'> ⬅ ⬅ Selecciona un lugar para monitorizar</strong>
                  )}
                </div>
                </div>
                
                  {datosActuales ? (
                    
                    <>
                    <div className='col-md-3'>
                      <div className='mt-5'>
                    <h5 className='text-center'>Informe climático ({new Date().toLocaleTimeString('en-GB', { hour12: false, hour: '2-digit', minute: '2-digit'})})</h5>
                <div className="card">
                      <p className='text-center'>Descripción: <strong>{datosActuales.tiempo_actual}</strong>
                        <img src={`http://openweathermap.org/img/w/${datosActuales.icono}.png`} alt="Icono del clima" />
                      </p>
                      <p className='text-center'>Dirección del viento: <strong>{datosActuales.viento_direccion}º</strong></p>
                      <p className='text-center'>Velocidad del viento: <strong>{datosActuales.viento_velocidad.toFixed(2)}m/s</strong></p>
                      <p className='text-center'>Nubes: <strong>{datosActuales.nubes_actual}%</strong></p>
                      </div>
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
          </>
  );
};

export default SelectPersonalizado;
