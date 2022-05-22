import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CardElem from '../../assets/CardElem/CardElem';
import { useSelector } from 'react-redux'
import BounceLoader from "react-spinners/BounceLoader";


const List = ({ rating, type, setType, setRating, filterArr }) => {
    const { places, status } = useSelector(state => state.cord)
    return (
        <Box flex={2} p={2}>
            <Typography variant='h4'>Places around you</Typography>

            <FormControl>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All ratings</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            {(status === 'loading') ?
                (<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70%' }}><BounceLoader color='#0770EC' loading={!!status} size={80} /></Box>) :
                (status === 'rejected') ?
                    (<Box>Move the map to start</Box>) :
                    (<Box sx={{ height: '70vh', overflow: 'auto' }}>
                        {(filterArr.length > 0 ? filterArr : places)?.map((e, i) => {
                            return (<CardElem key={i} data={e} />)
                        })}
                    </Box>)
            }
        </Box>
    );
};

export default List;