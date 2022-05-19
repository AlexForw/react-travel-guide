import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box, Divider, Chip } from '@mui/material';
import {Place, Phone} from '@material-ui/icons';


const CardElem = ({ data }) => {
    return (
        <Card sx={{ marginBottom: { xs: 1, sm: 3, md: 4 }, marginTop: { xs: 1, sm: 3, md: 4 } }}>
            <CardMedia
                component="img"
                height="30%"
                width="100"
                image={data.photo ? data.photo?.images?.medium?.url : 'https://api.interior.ru/media/images/DESIGN/Modnoe%20Mesto/Russki_restaurant/cover_RUSKI_interior_5.jpg'}
                alt={data.name}
            />
            <CardContent>
                <Typography variant='h6'>{data.name}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='subtitle1'>Price</Typography>
                    <Typography variant='subtitle1'>{data.price ? data.price : '$5 - $10'}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='subtitle1'>Ranking</Typography>
                    <Typography variant='subtitle1'>{data.ranking ? data.ranking : 'without rank'}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1.5 }}>
                    {data?.cuisine?.map((elem) => (
                        <Chip key={elem.key} label={elem.name} />
                    ))}
                </Box>

                {data?.address && (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt:1.5 }}>
                        <Typography variant='subtitle1' fontSize='13px'><Place /></Typography>
                        <Typography variant='subtitle1' fontSize='13px'>{data.address}</Typography>
                    </Box>
                )}
                {data?.phone && (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant='subtitle1' fontSize='13px'><Phone /></Typography>
                        <Typography variant='subtitle1' fontSize='13px'>{data.phone}</Typography>
                    </Box>
                )}



                <Divider sx={{ height: 5, m: 0.5 }} orientation="horizontal" />
                <Typography variant="body2" color="text.secondary">

                </Typography>
                <IconButton variant='a' sx={{ borderRadius: 3, mt: 2, fontSize:'18px' }} target="_blank" href={data.web_url}>Trip advisor</IconButton>
                <IconButton variant='a' sx={{ borderRadius: 3, mt: 2, fontSize:'18px' }} target="_blank" href={data.website}>Website</IconButton>
            </CardContent>

        </Card>
    );
};

export default CardElem;