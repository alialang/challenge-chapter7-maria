import { Carousel } from "bootstrap";
import React, { Component } from "react";

class Corousel extends Component {
    render() {
        return (
            <div className="testimonial pt-5" id="For-Testimonial">
                <h2 className="text-center my-2">Testimonial</h2>
                <p className="text-center my-3">
                    Berbagai review positif dari para pelanggan kami
                </p>
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="card">
                            <div className="row">
                                <div className="col-3">
                                    <img src="./images/photocewe.png" className="profil" alt="..." />
                                </div>
                                <div className="col-9">
                                    <div className="card-body">
                                        <img className="mt-3" style="width: 90px" src="./images/Rate.png" alt="" />
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod
                                        </p>
                                        <p><strong>Keisha 26, Kelud</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <div className="row">
                                <div className="col-3">
                                    <img src="./images/photo.png" className="profil" alt="..." />
                                </div>
                                <div className="col-9">
                                    <div className="card-body">
                                        <img className="mt-3" style="width: 90px" src="./images/Rate.png" alt="" />
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod
                                        </p>
                                        <p><strong>Terra 24, Jambu</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <div className="row">
                                <div className="col-3">
                                    <img src="./images/photo.png" className="profil" alt="..." />
                                </div>
                                <div className="col-9">
                                    <div className="card-body">
                                        <img className="mt-3" style="width: 90px" src="./images/Rate.png" alt="" />
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod
                                        </p>
                                        <p><strong>Gheinara 22, Bromo</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;