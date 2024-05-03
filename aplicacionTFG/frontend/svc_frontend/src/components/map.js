import React from 'react';
import { GoogleMap, StandaloneSearchBox, Marker, useJsApiLoader, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBsZnTlM4g1LCqmg4u74pouNXE3mlQF6Uk', // Reemplaza con tu API Key de Google Maps
    libraries: ['places'], // Añade la biblioteca 'places'
  });

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 51.505,
    lng: -0.09,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBsZnTlM4g1LCqmg4u74pouNXE3mlQF6Uk">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
        >
          <StandaloneSearchBox>
            <input
              type="text"
              placeholder="Buscar ubicación"
              style={{
                boxSizing: 'border-box',
                border: '1px solid transparent',
                width: '240px',
                height: '32px',
                padding: '0 12px',
                borderRadius: '3px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                fontSize: '14px',
                outline: 'none',
                textOverflow: 'ellipses',
                position: 'absolute',
                left: '50%',
                marginLeft: '-120px',
              }}
            />
          </StandaloneSearchBox>
          <Marker position={center} />
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default Map;