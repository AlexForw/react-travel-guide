import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';


const List = () => {


    return (
        <Box flex={2} p={2}>
            <Typography variant='h4'>Places around you</Typography>

            <FormControl>
                <InputLabel>Type</InputLabel>
                <Select value={type}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotel'>Hotel</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel>Rating</InputLabel>
                <Select value={rating}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default List;