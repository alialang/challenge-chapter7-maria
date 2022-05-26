import React, { Component } from 'react';
import bootstrap from 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component {
    render() {
        return (
            <div className='header'>
                <div className='container-fluid'>
                    <header className='d-flex justify-content-between'>
                        <div className="navbar-brand logo text-white text-center">
                            Maria
                        </div>
                        <ul className='nav nav-pills mx-5'>
                            <li className='nav-item'>
                                <a href='' className='nav-link'>Our Services</a>
                            </li>
                            <li className='nav-item'><a href='#' className='nav-link'>Why Us</a></li>
                            <li className='nav-item'><a href='#' className='nav-link'>Testimonial</a></li>
                            <li className='nav-item'><a href='#' className='nav-link'>FAQ</a></li>
                            <li className='nav-item'>
                                <button className='btn btn-success btn-lg' type='button'> Register </button>
                            </li>
                        </ul>
                    </header>
                </div>
            </div>
        );
    }
}

export default Navbar;