import React from 'react';
import Header from '../../components/Header/Header';
import Main from './Components/Main/Main';
import Footer from '../../components/Footer/Footer';

class AppLanding extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default AppLanding;