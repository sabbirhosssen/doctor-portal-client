import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../../images/chair.png'
import bg from '../../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';




const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const Bannar = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} style={verticalCenter} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left',

                }}>
                    <Box sx={{ p: 2 }}>
                        <Typography variant='h3'>
                            Your New Smile Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}> Get Appointment</Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={7} style={verticalCenter}  >
                    <img style={{ width: '80%' }} src={chair} alt='' />

                </Grid>

            </Grid>
        </Container>
    );
};

export default Bannar;