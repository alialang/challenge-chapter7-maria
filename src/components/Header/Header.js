import React, { Component } from 'react';

class Heading extends Component {
    render() {
        return (
            <header id='header'>
                <div className='header'>
                    <div className='container-fluid'>
                        <header className='d-flex justify-content-between'>
                            <img className='navbar-brand mx-5 img-fluid' src={process.env.PUBLIC_URL + './images/logo.png'} />
                            <ul className='nav nav-pills mx-5'>
                                <li className='nav-item'>
                                    <a href="#" class="nav-link">Our Services</a>
                                </li>
                                <li className='nav-item'><a href="#" class="nav-link">Why Us</a></li>
                                <li className='nav-item'><a href="#" class="nav-link">Testimonial</a></li>
                                <li className='nav-item'><a href="#" class="nav-link">FAQ</a></li>
                                <li className='nav-item'>
                                    <button className='btn btn-success btn-lg' type='button'> Register </button>
                                </li>
                            </ul>
                        </header>
                    </div>
                    <div class="p-5 mb-8 rounded-3">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col">
                                    <h2 class="display-5">Sewa & Rental Mobil Terbaik di Kawasan Jakarta</h2>
                                    <p class="col-md-8">
                                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                                        Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                                    </p>
                                </div>
                                <div class="mobil col">
                                    <img src={process.env.PUBLIC_URL + "./images/car.png"} class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        );
    }
}

export default Navbar;