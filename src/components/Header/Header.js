import React, { Component } from 'react';
import bootstrap from 'bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Heading extends Component {
    render() {
        return (
            <div className='header'>
                <div className='p-5 mb-8 rounded-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <h2 className='display-5'>Sewa & Rental Mobil Terbaik di Kawasan Jakarta</h2>
                                <p className='col-md-8'>
                                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                                    Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                                </p>
                            </div>
                            <div className='mobil col'>
                                <img src={process.env.PUBLIC_URL + './images/car.png'} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Heading;