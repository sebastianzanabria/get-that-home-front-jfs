import React, {useState} from "react";
import {
    GoogleMap,
    withGoogleMap,
    Marker,
    withScriptjs
} from 'react-google-maps'
import {mapKey} from "../env";
import {Box} from "@chakra-ui/core";

const Map = withScriptjs(withGoogleMap(({coords, getCoords}) => {
    const [coordinates, setCoordinates] = useState(coords)
    function handleClickMap(e){
        if(!coords){
            console.log(e)
            const coords={lat: e.latLng.lat(), lng: e.latLng.lng()}
            setCoordinates(coords);
            getCoords(coords)
        }
    };
        return (
            <GoogleMap
                defaultZoom={coordinates ? 16 : 12}
                defaultCenter={coordinates || {lat:-12.058717, lng: -77.041508}}
                onClick={handleClickMap}
            >
                <Marker position={coordinates}/>
            </GoogleMap>
        )
    }
));

export default function ({height, coords, getCoords}){
    return (
        <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${mapKey}`}
            loadingElement={<Box height="100%" />}
            containerElement={<Box height={height} />}
            mapElement={<Box height="100%" />}
            coords={coords}
            getCoords={getCoords}
        />
    );
}