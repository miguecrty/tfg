import React, { useRef, useState, useEffect } from 'react';
import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api';
import { googleApiKey } from '@/pages/_app';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { server } from '@/pages/_app';
import Cookies from 'js-cookie';

const SearchBox = ({ onPlaceSelected, mostrarMapa, ubicacionSeleccionada, setUbicacionSeleccionada, setOpciones, opciones }) => {
    const username = Cookies.get('username');
    const [marcador, setMarcador] = useState(ubicacionSeleccionada);
    const zoom = 15;
    const inputRef = useRef();

    useEffect(() => {
        setMarcador(ubicacionSeleccionada);
    }, [ubicacionSeleccionada]);

    const iniciarSondeo = async (datos) => {
        try {
            const response = await fetch('/api/iniciarsondeo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });

            if (response.status === 200) {
                console.log('Sondeo iniciado');
            } else {
                console.error('Error al iniciar sondeo');
            }
        } catch (error) {
            console.error('Error al iniciar sondeo:', error);
        }
    };

    const handlePlaceChanged = async () => {
        const [place] = inputRef.current.getPlaces();
        if (place) {
            const nombre_corto = place.address_components[0].long_name;
            let confirmar = confirm("¿Estás seguro que quieres seleccionar: " + nombre_corto + " ?");
            if (confirmar) {
                const json = JSON.stringify(place);
                const lugar = JSON.parse(json.toString());
                await new Promise(async (resolve) => {
                    //console.log(place.address_components[0].long_name);
                    onPlaceSelected(place, resolve);
                    setUbicacionSeleccionada({ lat: lugar.geometry.location.lat, lng: lugar.geometry.location.lng });
                    setMarcador({ lat: lugar.geometry.location.lat, lng: lugar.geometry.location.lng });
    
                    const datos = { usuario: username, nombre_lugar: place.address_components[0].long_name, lat: lugar.geometry.location.lat, lng: lugar.geometry.location.lng };
                    await iniciarSondeo(datos);
                    setOpciones(prevOpciones => [...prevOpciones, place.address_components[0].long_name]);
                });
            }
        }
    };
    
    return (
        <div>
            <LoadScript
                googleMapsApiKey={googleApiKey}
                libraries={["places"]}
            >
                <div className='searchbox'>
                    <StandaloneSearchBox
                        onLoad={ref => (inputRef.current = ref)}
                        onPlacesChanged={handlePlaceChanged}
                    >
                        <input type="text" className="form-control" placeholder="Introduce lugar a monitorizar"
                            style={{
                                boxSizing: `border-box`,
                                border: `1px solid transparent`,
                                width: `400px`,
                                height: `40px`,
                                padding: `0 12px`,
                                borderRadius: `3px`,
                                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                fontSize: `16px`,
                                outline: `none`,
                                textOverflow: `ellipses`,
                                position: "absolute",
                                left: "1%",
                                marginLeft: "0px"
                            }}
                        />
                    </StandaloneSearchBox>
                </div>
                {mostrarMapa && (
                    <div className='map'>
                        <GoogleMap
                            mapContainerStyle={{ height: '400px', width: '30%' }}
                            center={ubicacionSeleccionada}
                            zoom={zoom}
                        >
                            {marcador && (
                                <Marker position={marcador} />
                            )}
                        </GoogleMap>
                    </div>
                )}
            </LoadScript>
        </div>
    );
};

export default SearchBox;
