import { Box } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import './App.css'


const App = () => {

  return (
    <>
      <Header />
      <Box display='flex'>
        <List />
        <Map />
      </Box>
    </>
  );
}

export default App;
