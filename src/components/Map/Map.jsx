import { Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useSelector } from 'react-redux';
import ChangeView from './ChangeView';
import UseMapElem from './UseMapElem'



const Map = () => {
    const { places, coordinates, filterArr } = useSelector(state => state.cord)
    return (
        <Box flex={4} p={2} height='90vh' display='flex' gap={2}>
            <MapContainer style={{ height: '100vh', width: '100%', margin: '50 50 50 50' }} center={[coordinates.lat, coordinates.lng]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <UseMapElem />

                {(filterArr.length > 0 ? filterArr : places)?.map((point, i) => {
                    return point?.latitude && (
                        <Marker key={i} position={[point.latitude, point.longitude]}>
                            <Popup>
                                {point?.name}
                            </Popup>
                        </Marker>

                    )
                }
                )}
                <ChangeView />
            </MapContainer>
        </Box>
    );
};

export default Map;