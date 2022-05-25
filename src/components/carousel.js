import { Carousel } from "bootstrap";
import React, { Component } from "react";

class Corousel extends Component {
    render() {
        return (
            <div class="testimonial pt-5" id="For-Testimonial">
                <h2 class="text-center my-2">Testimonial</h2>
                <p class="text-center my-3">
                    Berbagai review positif dari para pelanggan kami
                </p>
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="card">
                            <div class="row">
                                <div class="col-3">
                                    <img src="./images/photocewe.png" class="profil" alt="..." />
                                </div>
                                <div class="col-9">
                                    <div class="card-body">
                                        <img class="mt-3" style="width: 90px" src="./images/Rate.png" alt="" />
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
                    <div class="item">
                        <div class="card">
                            <div class="row">
                                <div class="col-3">
                                    <img src="./images/photo.png" class="profil" alt="..." />
                                </div>
                                <div class="col-9">
                                    <div class="card-body">
                                        <img class="mt-3" style="width: 90px" src="./images/Rate.png" alt="" />
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
                    <div class="item">
                        <div class="card">
                            <div class="row">
                                <div class="col-3">
                                    <img src="./images/photo.png" class="profil" alt="..." />
                                </div>
                                <div class="col-9">
                                    <div class="card-body">
                                        <img class="mt-3" style="width: 90px" src="./images/Rate.png" alt="" />
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