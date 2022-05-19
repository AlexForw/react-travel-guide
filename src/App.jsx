import { Box } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import './App.css'
import { getPlacesData } from './api/index'
import { useEffect, useState } from 'react';


const App = () => {
  const [places, setPlaces] = useState([])

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne)
      .then(data => {
          console.log(data);
          setPlaces(data)
        })
    }
  }, [coordinates, bounds])
  console.log(places);
  return (
    <>
      <Header />
      <Box display='flex'>
        <List places={places} />
        <Map bounds={bounds} setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
      </Box>
    </>
  );
}

export default App;
