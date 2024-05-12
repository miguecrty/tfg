import React, { useRef, useState } from 'react';
import { StandaloneSearchBox, LoadScript} from '@react-google-maps/api';
import { googleApiKey } from '@/pages/_app';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { server } from '@/pages/_app';
import Cookies from 'js-cookie';

const SearchBox = ({ onPlaceSelected }) => {
    const username = Cookies.get('username');
    const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState({ lat: 40.7128, lng: -74.006 });
    const [marcador, setMarcador] = useState(null);
    const zoom = 15;
    const inputRef = useRef();

    const iniciarSondeo = async (coordenadas) =>{
        try {
            const response = await fetch('http://'+server+'/iniciarsondeo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(coordenadas)
            });

            if (response.status === 200) {
            } else {
                console.error('Éxito');
            }
        } catch (error) {
            console.error('Error al obtener la lista:', error);
        }
    }
    const handlePlaceChanged = () => {
        const [place] = inputRef.current.getPlaces();
        if (place){
            const nombre_corto = place.address_components[0].long_name;
            let confirmar=confirm("¿Estás seguro que quieres seleccionar: "+nombre_corto+" ?");
            if(confirmar){
            const json=JSON.stringify(place);
            const lugar = JSON.parse(json.toString());
            onPlaceSelected(place);
            setUbicacionSeleccionada({lat:lugar.geometry.location.lat,lng:lugar.geometry.location.lng});
            setMarcador({lat:lugar.geometry.location.lat,lng:lugar.geometry.location.lng});
            
            const coordenadas={usuario:username,nombre_lugar:place.address_components[0].long_name,lat:lugar.geometry.location.lat,lng:lugar.geometry.location.lng};
            iniciarSondeo(coordenadas);
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
                onLoad = {ref => (inputRef.current = ref)}
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
                      }
                    
                    }
                    />
                    
                    </StandaloneSearchBox>
                    </div>
                    
                    <div className='map' >
                    <GoogleMap
                        mapContainerStyle={{ height: '400px', width: '30%' }}
                        center={ubicacionSeleccionada}
                        zoom={zoom}>
                    {marcador && (
                    <Marker position={marcador} />
                    )}
                    </GoogleMap>
                    
                        </div>
                        
                    </LoadScript>
                    
                    
        </div>
    );
};

export default SearchBox;

