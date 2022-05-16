import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search'
import Search from '../../../assets/Search/Search';


const Header = () => {

    return (
        <AppBar position='relative'>
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
                        
                        <Search text='Search..' icon={<SearchIcon/>}/>
                    </Box>
                </Box>

            </Box>
        </Toolbar>
        </AppBar >
    );
};

export default Header;