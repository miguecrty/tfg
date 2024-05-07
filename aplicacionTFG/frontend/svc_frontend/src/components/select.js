import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Map from './map';
import ChartComponent from './chartTemperatura';
import ChartTemperatura from './chartTemperatura';

const SelectPersonalizado = () => {
    const [opciones, setOpciones] = useState([]);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
    const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState({ lat: 40.7128, lng: -74.006 }); // Estado para la ubicación seleccionada
    const [data, setData] = useState([]);
    const [labels, setLabels] = useState([]);
    const center = { lat: 40.7128, lng: -74.006 };
    const zoom = 15;
    const username = Cookies.get('username');
    

    const obtenerLista = async (usuario) => {
        let lista ={};
        try {
            const response = await fetch('http://localhost:3000/obtenerlista', {
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

            const response = await fetch('http://localhost:3000/obtenerdatosgraficatemperatura', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });

            if (response.ok) {
                const data= await response.json();
                let listahumedad=[];
                let listatomas=[];
                for(let i = 0; i<data.length;i++){
                const feels_like = data[i].temperatura.feels_like;
                const grnd_level = data[i].temperatura.grnd_level;
                const humidity= data[i].temperatura.humidity;
                const pressure = data[i].temperatura.pressure;
                const sea_level= data[i].temperatura.sea_level;
                const temp = data[i].temperatura.temp;
                const temp_max = data[i].temperatura.temp_max;
                const temp_min = data[i].temperatura.temp_min;
                const toma = data[i].toma;
                const fecha = new Date(data[i].toma);
                const mes = fecha.getMonth() + 1; // Suma 1 ya que los meses van de 0 a 11
                const dia = fecha.getDate();
                const horas = fecha.getHours();
                const minutos = fecha.getMinutes();

                const fechaFormateada = `${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia} ${horas}:${minutos < 10 ? '0' : ''}${minutos}`;
                listahumedad.push(humidity);
                listatomas.push(fechaFormateada);
                }

                setData(listahumedad);
                setLabels(listatomas);
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
        const [latitud, longitud] = lista[opcion].split("|").map(parseFloat);;

        setUbicacionSeleccionada({ lat: latitud, lng: longitud});
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
                {opcionSeleccionada && (
                    <p>Ubicación seleccionada: <strong>{opcionSeleccionada}</strong></p>
                )}
                </div>
                <div className="mapalugares">
                {/* Pasar la ubicación seleccionada al componente Map */}
                <Map center={ubicacionSeleccionada} zoom={zoom} markerPosition={ubicacionSeleccionada}/> 
                </div>
            </div>
            <div className="contenedor2">
                <div class="monitorizar">
                <h2>Monitorización</h2>
                <div className="temperatura">
                <ChartTemperatura data={data} labels={labels} />
                </div>
                <div className="nubes">

                </div>
                <div className="viento">

                </div></div>
            </div>
        </div>

    );
};

export default SelectPersonalizado;

