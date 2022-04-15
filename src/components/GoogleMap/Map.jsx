import React from 'react';
import GoogleMapReact from 'google-map-react'
import { Paper, typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab';

const Map = () => {
    const isMobile = useMediaQuery('min-width:600px')

    const cords = { lat: 0, lng: 0}

    return (
        <div>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBasARaUJF7z7VL28TCBc3LyboQcwTSG1o'}}
                defaultCenter={cords}
                center={cords}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
};

export default Map;