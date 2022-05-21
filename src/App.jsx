import { Box } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import './App.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlacesData } from './store/cordSlice';


const App = () => {
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('0')
  const [filterArr, setFilterArr] = useState([])

  const { places, bounds } = useSelector(state => state.cord)
  const dispatch = useDispatch()


  // useEffect(() => {
  //   const filter = places.filter((place) => place.rating > rating)

  //   setFilterArr(filter)
  // }, [rating, places])
  // console.log(filterArr);

  // useEffect(() => {
  //   if (bounds) {
  //     dispatch(getPlacesData({ type, sw: bounds.sw, ne: bounds.ne }))
  //     setFilterArr([])
  //     setRating('0')
  //   }
  // }, [dispatch, bounds, type])
  // console.log(places);
  return (
    <>
      <Header />
      <Box display='flex'>
        <List filterArr={filterArr} rating={rating} type={type} setType={setType} setRating={setRating} />
        <Map filterArr={filterArr} />
      </Box>
    </>
  );
}

export default App;
