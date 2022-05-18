import { Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { useEffect, useRef } from 'react'


const Map = ({ setBounds, setCoordinates, coordinates }) => {
    let refElem = useRef('')

    useEffect(() => {
        console.log(refElem.current)
    }, [refElem])
    
    
    console.log(L.FitBoundsOption);

    return (
        <Box flex={4} p={2} height='90vh' display='flex' gap={2}>
            <MapContainer ref={(e)=> refElem} style={{ height: '100%', width: '100%', margin: '50 50 50 50' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        The cool place!
                    </Popup>
                </Marker>
            </MapContainer>
        </Box>
    );
};

export default Map;