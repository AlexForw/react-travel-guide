import * as React from 'react';
import { useState } from 'react';
import { Menu } from '@material-ui/icons';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '../../components/List/List';

const Burger = () => {
    const [open, setOpen] = useState(false)
    return (
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Button sx={{ color: 'white' }}><Menu onClick={() => setOpen(true)} /></Button>
            <SwipeableDrawer
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
            >
                {open && (<Box sx={{ width: '100vw' }}>{<List />}</Box>)}
            </SwipeableDrawer>

        </Box>
    );
}


export default Burger