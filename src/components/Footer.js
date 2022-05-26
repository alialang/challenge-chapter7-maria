import React from "react";
import bootstrap from 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <footer>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <div className='wrapper-col-1'>
                                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                                    <p>binarcarrental@gmail.com</p>
                                    <p>081-233-334-808</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='wrapper-col-2'>
                                    <ul>
                                        <li><h4>Our Services</h4></li>
                                        <li><h4>Why Us</h4></li>
                                        <li><h4>Testimonial</h4></li>
                                        <li><h4>FAQ</h4></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='wrapper-col-3'>
                                    <div className='wrapper-icon'>
                                        <p>Connect with us</p>
                                        <a href='#'>
                                            <img className='icon-card' src={process.env.PUBLIC_URL + './images/icon_facebook.png'} />
                                        </a>
                                        <a href='#'>
                                            <img className='icon-card' src={process.env.PUBLIC_URL + './images/icon_instagram.png'} />
                                        </a>
                                        <a href='#'>
                                            <img className='icon-card' src={process.env.PUBLIC_URL + './images/icon_twitter.png'} />
                                        </a>
                                        <a href='#'>
                                            <img className='icon-card' src={process.env.PUBLIC_URL + './images/icon_mail.png'} />
                                        </a>
                                        <a href='#'>
                                            <img className='icon-card' src={process.env.PUBLIC_URL + './images/icon_twitch.png'} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='wrapper-col-4'>
                                    <p>Copyright Binar 2022</p>
                                    <img src={process.env.PUBLIC_URL + './images/logo.png'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </footer>
    )
}

export default Footer;