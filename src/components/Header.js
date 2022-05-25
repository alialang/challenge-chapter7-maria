import React, { Component } from 'react';

const Navbar = () => {
    return (
        <header id='header'>
            <div className='header'>
                <div className='container-fluid'>
                    <header className='d-flex justify-content-between'>
                        <img className='navbar-brand mx-5 img-fluid' src='./'>
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
                        </img>
                    </header>
                </div>
            </div>
        </header>
    );
}