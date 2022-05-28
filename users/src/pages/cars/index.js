import React from 'react';
import Navbar from '../../components/Navbar'
import Header from '../../components/Header';
import Filter from './Components/SearchFilter';
import Footer from '../../components/Footer';

function Cars() {

    return (
        <div>
            <Navbar />
            <Header showbtn={false} />
            <Filter />
            <Footer />
        </div>
    );
}


export default Cars;