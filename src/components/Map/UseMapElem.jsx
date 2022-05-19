import { useMap } from "react-leaflet";

const useMapElem = ({ setBounds, setCoordinates }) => {

    const map = useMap()
    const checkBounds = () => {
        setBounds({ ne: map.getBounds()._northEast, sw: map.getBounds()._southWest })
        setCoordinates(map.getCenter())
    }
    map.on('moveend', checkBounds)
    return null
};

export default useMapElem;