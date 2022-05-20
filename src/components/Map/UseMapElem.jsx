import { useMap } from "react-leaflet";
import { useDispatch } from "react-redux";
import { setBounds, setCoordinates } from "../../store/cordSlice";

const useMapElem = () => {
    const dispatch = useDispatch()

    const map = useMap()
    const checkBounds = () => {
        dispatch(setBounds({
            ne: {
                lat: map.getBounds()._northEast.lat,
                lng: map.getBounds()._northEast.lng,
            },
             sw: {
                 lat: map.getBounds()._southWest.lat,
                 lng: map.getBounds()._southWest.lng,
                }
        }))
        dispatch(setCoordinates({ lat: map.getCenter().lat, lng: map.getCenter().lng }))
    }
    map.on('moveend', checkBounds)
    return null
};

export default useMapElem;