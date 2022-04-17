import React from 'react';
import Subscribe from '../../Subscribe/Subscribe';
import Banner from '../Banner/Banner';
import Services from '../Services.js/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Subscribe />
        </div>
    );
};

export default Home;