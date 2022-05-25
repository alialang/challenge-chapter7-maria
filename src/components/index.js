import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Heading from './Header/Header';
import Footer from './Footer/Footer';
// import bootstrap from 'react-bootstrap';

class AppKu extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Heading />
                <Footer />
            </div>
        );
    }
}

export default AppKu;