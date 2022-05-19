import { useMap } from "react-leaflet";

const useMapElem = ({setBounds, setCoordinates}) => {

    const map = useMap()
    // setBounds(map.getBounds())
    const checkBounds = () => {
        // console.log(map.getBounds())
        setBounds({ne: map.getBounds()._northEast, sw: map.getBounds()._southWest})
        setCoordinates(map.getCenter())
        map.getBounds()
    }
    map.on('move',checkBounds)
    return null
};

export default useMapElem;