import React from 'react';
import Navbar from '../../components/Navbar';
import Heading from '../../components/Header';
import Main from './Components/Main';
import Carousel from '../../components/Carousel';
import Banner from './Components/Banner';
import Accordion from './Components/Accordion';
import Footer from '../../components/Footer';
import '../style.css';

function Landing() {
    return (
        <>
            <Navbar />
            <Heading />
            <Main />
            <Carousel />
            <Banner />
            <Accordion />
            <Footer />
        </>
    )
}

export default Landing;