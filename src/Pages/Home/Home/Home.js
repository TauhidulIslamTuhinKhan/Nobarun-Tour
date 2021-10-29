import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import Pakages from '../Pakages/Pakages';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Pakages></Pakages>
            <About></About>
            <Gallary></Gallary>
        </>
    );
};

export default Home;