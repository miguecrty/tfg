import React, { useRef, useState, useEffect } from 'react';
import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api';
import { googleApiKey } from '@/pages/_app';
import { GoogleMap, Marker } from '@react-google-maps/api';
import Cookies from 'js-cookie';

const SearchBox = ({ onPlaceSelected, mostrarMapa, ubicacionSeleccionada, setUbicacionSeleccionada, setOpciones, opciones, pronostico }) => {
    const username = Cookies.get('username');
    const [marcador, setMarcador] = useState(ubicacionSeleccionada);
    const [mensajeExito, setMensajeExito] = useState(null);
    const [mensajeError, setMensajeError] = useState(null);
    const zoom = 15;
    const inputRef = useRef();

    useEffect(() => {
      
        setMarcador(ubicacionSeleccionada);
    }, [ubicacionSeleccionada]);

    const iniciarSondeo = async (datos) => {
        try {
           let avanzada = confirm("¿Desea selecccionar la monitorización avanzada?");
           datos.avanzada = avanzada;
            const response = await fetch('/api/iniciarsondeo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });
              const respuesta = await response.json();
            if (response.status === 200) {
                setMensajeExito(respuesta.exito);
                setTimeout(() => {
                  setMensajeExito(null);
                },5000);
                
            } else {
                setMensajeError(respuesta.error);
                setTimeout(() => {
                  setMensajeError(null);
                },5000);
            }
        } catch (error) {
            console.error('Error al iniciar sondeo:', error);
        }
    };

    const handlePlaceChanged = async (avanzada,event) => {
        const [place] = inputRef.current.getPlaces();
        if (place) {
            const nombre_corto = place.address_components[0].long_name;
            let confirmar = confirm("¿Estás seguro que quieres seleccionar: " + nombre_corto + " ?");
            if (confirmar) {
                const json = JSON.stringify(place);
                const lugar = JSON.parse(json.toString());
                
                    //console.log(place.address_components[0].long_name);
                    
                    setUbicacionSeleccionada({ lat: lugar.geometry.location.lat, lng: lugar.geometry.location.lng });
                    if (setOpciones != null || opciones != null){
                    setMarcador({ lat: lugar.geometry.location.lat, lng: lugar.geometry.location.lng });
                    const datos = { usuario: username, nombre_lugar: place.address_components[0].long_name, lat: lugar.geometry.location.lat, lng: lugar.geometry.location.lng };
                    await iniciarSondeo(datos);
                    }
                    if(onPlaceSelected != null)
                      {
                        onPlaceSelected(lugar);
                      }
                
            }
        }
    };
    
    return (
      <>
        {!pronostico && (
          
        <div style={{ height: '300px', maxHeight:'300px', width: '100%', position: 'relative' }}>
          {mensajeExito && (
          <div className='mb-3 mt-3 alert alert-success text-center'><strong>{mensajeExito}</strong></div>
          )}
          {mensajeError && (
          <div className='mb-3 mt-3 alert alert-danger text-center'><strong>{mensajeError}</strong></div>
          )}
          <LoadScript googleMapsApiKey={googleApiKey} libraries={["places"]}>
            <div className='searchbox text-center' style={{ position: 'absolute', zIndex: 1}}>
              <StandaloneSearchBox
                onLoad={ref => (inputRef.current = ref)}
                onPlacesChanged={() => handlePlaceChanged(true)}
              >
                <input type="text" className="form-control" placeholder="Introduce lugar"
                  style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    maxWidth: `400px`,
                    height: `auto`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `16px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                  }}
                />
              </StandaloneSearchBox>
              
            </div>
            
            {mostrarMapa && (
              <GoogleMap
                mapContainerStyle={{ height: '90%', width: '100%', position: 'relative', zIndex: 0,top:'30px',bottom:'30px' }}
                center={ubicacionSeleccionada}
                zoom={zoom}
              >
                {marcador && (
                  <Marker position={marcador} />
                )}
              </GoogleMap>
            )}
          </LoadScript>
        </div>
          )
        }

        {pronostico && (
          <>
          <LoadScript googleMapsApiKey={googleApiKey} libraries={["places"]}>
              <StandaloneSearchBox
                onLoad={ref => (inputRef.current = ref)}
                onPlacesChanged={handlePlaceChanged}
              >
                <input type="text" className="form-control" placeholder="Introduce lugar"
                  style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `auto`,
                    height: `auto`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `16px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                    width:`100%`
                  }}
                />
              </StandaloneSearchBox>
              
            </LoadScript>
        </>
        )}



        </>
      );
      
    }      
      

export default SearchBox;
