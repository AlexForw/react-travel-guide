import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './HeaderStyle'


const Header = () => {
    const styles = useStyles()

    return (
        <AppBar className={styles.header}>
            <Toolbar className={styles.toolbar}>
                <Typography variant='h5' className={styles.typography}>Your own guide</Typography>
                <Box display='flex'>
                <Typography variant='h6' className={styles.typography}>Enter your place</Typography>

                {/* </Autocomplete> */}
                    <div className={styles.searchBox}>
                        <div className={styles.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Search..' className={styles.inputInput}></InputBase>
                    </div>
                {/* <Autocomplete> */}

                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;