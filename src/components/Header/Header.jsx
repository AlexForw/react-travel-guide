import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search'


const Header = () => {

    return (
        <AppBar>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Typography variant='h5' >Your own guide</Typography>
                <Box sx={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center'
                }}>
                <Typography variant='h6' >Enter your place</Typography>

                <Box>
                    <Box>
                        <SearchIcon />
                    </Box>
                    <InputBase placeholder='Search..'></InputBase>
                </Box>

            </Box>
        </Toolbar>
        </AppBar >
    );
};

export default Header;