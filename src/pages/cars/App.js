import React from 'react';
import Header from '../../components/Header/Header';
import CarCard from './Components/CarCard';
import Footer from '../../components/Footer/Footer';

class AppCard extends React.Component {
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

export default AppCard;