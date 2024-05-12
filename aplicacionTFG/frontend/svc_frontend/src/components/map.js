
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { googleApiKey } from '@/pages/_app';
const Map = ({ center, zoom , markerPosition}) => {
  return (
    <LoadScript
      googleMapsApiKey={googleApiKey}
    >
      <GoogleMap
        mapContainerStyle={{ height: '300px', width: '100%' }}
        center={center}
        zoom={zoom}
      >
        {markerPosition && (
          <Marker position={center} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;