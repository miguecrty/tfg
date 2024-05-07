
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ center, zoom }) => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBsZnTlM4g1LCqmg4u74pouNXE3mlQF6Uk"
    >
      <GoogleMap
        mapContainerStyle={{ height: '300px', width: '100%' }}
        center={center}
        zoom={zoom}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;