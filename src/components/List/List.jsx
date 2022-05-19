import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react'
import CardElem from '../../assets/CardElem/CardElem';

const List = ({ places }) => {
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('0')

    return (
        <Box flex={2} p={2}>
            <Typography variant='h4'>Places around you</Typography>

            <FormControl>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotel'>Hotel</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Box sx={{ height: '75vh', overflow: 'auto' }}>
                {places?.map((e, i) => {
                    return (<CardElem key={i} data={e} />)
                })}
            </Box>
        </Box>
    );
};

export default List;