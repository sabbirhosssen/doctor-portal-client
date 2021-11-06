import React from 'react';
import Header from '../../../Shared/Navigation/Header';
import AppointmentBannar from '../AppointmentBannar/AppointmentBannar';
import Bannar from '../Bannar/Bannar';

import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header />
            <Bannar />
            <Services></Services>
            <AppointmentBannar></AppointmentBannar>


        </div>
    );
};

export default Home;