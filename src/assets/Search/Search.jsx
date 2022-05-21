import { InputBase, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux'
import { getCities, setCoordinates } from '../../store/cordSlice';



const SearchBox = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: '10px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const Search = ({ icon, text }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const cities = useSelector(state => state.cord.cities)
    console.log(useSelector(state=>state.cord));

    useEffect(() => {
        dispatch(getCities(value))
    }, [value, dispatch])
    console.log(cities);
    return (
        <Box>
            <SearchBox>
                <SearchIconWrapper>
                    {icon}
                </SearchIconWrapper>
                <StyledInputBase
                    value={value}
                    placeholder={text}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
            </SearchBox>
            <Box sx={{ background: 'white', color: 'text.primary',position:'absolute',zIndex:'4222' }}>
                {value.length > 1 ? (
                    cities?.map(arr => (
                        <Box maxWidth='234px' width='100%' key={arr.id} sx={{ background: 'white' }} onClick={() => dispatch(setCoordinates({ lat: arr.coordinates.latitude, lng: arr.coordinates.longitude }))}>{arr.name}</Box>
                    ))
                ) : console.log('1')}
            </Box>
        </Box>


    );
};

export default Search;