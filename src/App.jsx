import { Box } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import './App.css'
import { getPlacesData } from './api/index'
import { useEffect, useState } from 'react';


const App = () => {
  const [places, setPlaces] = useState('')

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  console.log(coordinates);

  useEffect(()=>{
    getPlacesData().then(data => setPlaces(data))
  },[])
  return (
    <>
      <Header />
      <Box display='flex'>
        <List />
        <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates}/>
      </Box>
    </>
  );
}

export default App;
