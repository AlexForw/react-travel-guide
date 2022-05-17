import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';


const CardElem = ({ text }) => {
    return (
        <Card sx={{ marginBottom: { xs: 1, sm: 3, md: 4 }, marginTop: { xs: 1, sm: 3, md: 4 } }}>
            <CardMedia
                component="img"
                height="30%"
                width="100"
                // image={props.imageUrl}
                alt="City"
            />
            <CardContent>
                <Typography variant='h6'>{text}</Typography>
                <Divider sx={{ height: 5, m: 0.5 }} orientation="horizontal" />
                <Typography variant="body2" color="text.secondary">

                </Typography>
                <IconButton variant='a' sx={{ borderRadius: 3, mt: 2 }} target="_blank">Read more</IconButton>
            </CardContent>

        </Card>
    );
};

export default CardElem;