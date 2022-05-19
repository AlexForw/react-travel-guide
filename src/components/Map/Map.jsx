import { Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import UseMapElem from './UseMapElem'



const Map = ({ setBounds, setCoordinates, places }) => {

    return (
        <Box flex={4} p={2} height='90vh' display='flex' gap={2}>
            <MapContainer style={{ height: '100%', width: '100%', margin: '50 50 50 50' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <UseMapElem setBounds={setBounds} setCoordinates={setCoordinates} />

                {places?.map((point, i) => {
                    return point?.latitude && (
                            <Marker key={i} position={[point.latitude, point.longitude]}>
                                <Popup>
                                    {point?.name}
                                </Popup>
                            </Marker>

                    )
                }
                )}
            </MapContainer>
        </Box>
    );
};

export default Map;