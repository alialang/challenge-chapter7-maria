import React from 'react';
import Header from '../../components/Header';
import CarCard from './Components/CarCard';
import Footer from '../../components/Footer';

class Cars extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <CarCard />
                <Footer />
            </div>
        );
    }
}

export default Cars;