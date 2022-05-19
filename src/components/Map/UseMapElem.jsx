import { useMap } from "react-leaflet";

const useMapElem = ({setBounds}) => {

    const map = useMap()
    // setBounds(map.getBounds())
    const checkBounds = () => {
        // console.log(map.getBounds())
        setBounds(map.getBounds())
        map.getBounds()
    }
    map.on('move',checkBounds)
    return null
};

export default useMapElem;