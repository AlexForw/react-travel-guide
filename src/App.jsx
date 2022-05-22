import { Box } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import './App.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlacesData } from './store/cordSlice';
import { setFilterArr, setRating } from './store/cordSlice';


const App = () => {
  const { places, bounds, type } = useSelector(state => state.cord)
  const dispatch = useDispatch()


  useEffect(() => {
    if (bounds) {
      dispatch(getPlacesData({ type, sw: bounds.sw, ne: bounds.ne }))
      dispatch(setFilterArr([]))
      dispatch(setRating('0'))
    }
  }, [bounds, type, dispatch])
  console.log(places);
  return (
    <>
      <Header />
      <Box display='flex'>
        <Box flex={2} display={{ xs: 'none', sm: 'block' }}>
          <List />
        </Box>
        <Box flex={4}><Map /></Box>
      </Box>
    </>
  );
}

export default App;
