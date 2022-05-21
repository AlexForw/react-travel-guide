import { useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'


function ChangeView() {
    const coords = useSelector(state => state.cord.coordinates)
    const map = useMap();
    useEffect(() => {
        map.setView([coords.lat, coords.lng], 13);
    }, [coords, map])
    return null;
}

export default ChangeView