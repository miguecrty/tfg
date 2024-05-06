import React, { useRef } from 'react';
import { StandaloneSearchBox, LoadScript} from '@react-google-maps/api';

const GOOGLE_PLACES_API_KEY="AIzaSyBsZnTlM4g1LCqmg4u74pouNXE3mlQF6Uk";


const SearchBox = ({ onPlaceSelected }) => {
    const inputRef = useRef();
    const handlePlaceChanged = () => {
        const [place] = inputRef.current.getPlaces();
        if (place){
            const nombre_corto = place.address_components[0].long_name;
            let confirmar=confirm("¿Estás seguro que quieres seleccionar: "+nombre_corto+" ?");
            if(confirmar){
            onPlaceSelected(place);
            }
        }
    };
    return (
        <div>
            <LoadScript
                googleMapsApiKey={GOOGLE_PLACES_API_KEY}
                libraries={["places"]}
            >
                <StandaloneSearchBox
                onLoad = {ref => (inputRef.current = ref)}
                onPlacesChanged={handlePlaceChanged}
                >
                    <input type="text" className="form-control" placeholder="Enter Location" 
                    style={{
                        boxSizing: `border-box`,
                        border: `1px solid transparent`,
                        width: `900px`,
                        height: `50px`,
                        padding: `0 12px`,
                        borderRadius: `3px`,
                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                        fontSize: `20px`,
                        outline: `none`,
                        textOverflow: `ellipses`,
                        position: "absolute",
                        left: "30%",
                        marginLeft: "0px"
                      }}
                    />
                    </StandaloneSearchBox>
                    </LoadScript>
        </div>
    );
};

export default SearchBox;

