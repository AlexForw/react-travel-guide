import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CardElem from '../../assets/CardElem/CardElem';
import { useDispatch, useSelector } from 'react-redux'
import BounceLoader from "react-spinners/BounceLoader";
import { useEffect } from 'react';
import { setFilterArr, setRating, setType } from '../../store/cordSlice';


const List = () => {
    const { places, status, rating, filterArr, type } = useSelector(state => state.cord)
    const dispatch = useDispatch()

    useEffect(() => {
        const filter = places.filter((place) => place.rating > rating)

        dispatch(setFilterArr(filter))
    }, [rating, places, dispatch])
    console.log(filterArr);

    return (
        <Box p={2}>
            <Typography variant='h4' mb={1} display={{ xs: 'none', md: 'block' }}>Places around you</Typography>

            <FormControl>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => dispatch(setType(e.target.value))}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => dispatch(setRating(e.target.value))}>
                    <MenuItem value={0}>All ratings</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            {(status === 'loading') ?
                (<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '65%' }}><BounceLoader color='#0770EC' loading={!!status} size={80} /></Box>) :
                (<Box sx={{ height: { xs: '56vh', md: '65vh' }, overflow: 'auto' }}>
                    {(filterArr?.length > 0 ? filterArr : places)?.map((e, i) => {
                        return (<CardElem key={i} data={e} />)
                    })}
                </Box>)
            }
        </Box>
    );
};

export default List;