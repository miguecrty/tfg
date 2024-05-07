import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Map from './map';

const SelectPersonalizado = () => {
    const [opciones, setOpciones] = useState([]);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
    const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState({ lat: 40.7128, lng: -74.006 }); // Estado para la ubicación seleccionada
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


    useEffect(() => {
        obtenerLista(username);
    }, []);

    
    

    const handleOpcionSeleccionada = async (opcion, index) => {
        setOpcionSeleccionada(opcion);
        const lista = await obtenerLista(username)
        const [latitud, longitud] = lista[opcion].split("|").map(parseFloat);;

        setUbicacionSeleccionada({ lat: latitud, lng: longitud});
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
                <Map center={ubicacionSeleccionada} zoom={zoom}/> 
                </div>
            </div>
            <div className="contenedor2">
                <h2>Monitorización</h2>
            </div>
        </div>

    );
};

export default SelectPersonalizado;

