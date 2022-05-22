import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search'
import Search from '../../assets/Search/Search';
import Burger from '../../assets/Burger/Burger';


const Header = () => {
    return (
        <AppBar position='relative'>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Typography variant='h5' display={{ xs: 'none', sm: 'block' }} >Shelter</Typography>
                <Box sx={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center'
                }}>
                    <Burger />
                    <Typography variant='h6' display={{ xs: 'none', sm: 'block' }}>Enter place</Typography>

                    <Box>
                        <Box>

                            <Search text='Search..' icon={<SearchIcon />} />
                        </Box>
                    </Box>

                </Box>
            </Toolbar>
        </AppBar >
    );
};

export default Header;