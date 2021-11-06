import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../../images/fluoride.png'
import cavity from '../../../../images/cavity.png'
import whitening from '../../../../images/whitening.png'




const services = [
    {
        name: "Fluoride Treatment",
        description: "Gynaecologists interested in the art and science of Obstetric and Gynaecological Endoscopy. To collect, pool and distribute to the members, all information on technical and bioengineering aspects of Endoscopy used in Obstetrics and Gynecology.",
        img: fluoride
    },
    {
        name: "Cavity filling",
        description: "Gynaecologists interested in the art and science of Obstetric and Gynaecological Endoscopy. To collect, pool and distribute to the members, all information on technical and bioengineering aspects of Endoscopy used in Obstetrics and Gynecology.",
        img: cavity
    },
    {
        name: "whitening",
        description: "Gynaecologists interested in the art and science of Obstetric and Gynaecological Endoscopy. To collect, pool and distribute to the members, all information on technical and bioengineering aspects of Endoscopy used in Obstetrics and Gynecology.",
        img: whitening
    }
]




const Services = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};




export default Services;

