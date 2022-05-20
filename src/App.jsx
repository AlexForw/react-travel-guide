import { Box } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import './App.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlacesData } from './store/cordSlice';


const App = () => {
  const { places, coordinates, bounds } = useSelector(state => state.cord)
  const dispatch = useDispatch()
  console.log(bounds);

  useEffect(() => {
    if (bounds) {
      dispatch(getPlacesData({sw: bounds.sw, ne: bounds.ne}))
    }
  }, [dispatch, bounds])
  console.log(places);
  return (
    <>
      <Header />
      <Box display='flex'>
        <List/>
        <Map/>
      </Box>
    </>
  );
}

export default App;
