import { Box } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import './App.css'
import { getPlacesData } from './api/index'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



const App = () => {
  const [places, setPlaces] = useState([])
  const dispatch = useDispatch()
  const bounds = useSelector(state => state.cord.bounds)
  const coordinates = useSelector(state => state.cord.coordinates)
  console.log(bounds);

  useEffect(() => {
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne)
        .then(data => {
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
        <Map places={places} />
      </Box>
    </>
  );
}

export default App;
