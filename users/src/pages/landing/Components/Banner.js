import React from "react";
import "../../style.css";

const Banner = () => {
    return (
        <div className="container mt-5">
            <div
                id="banner"
                className="p-5 d-flex flex-column align-items-center justify-content-center"
            >
                <h1 className="mt-4 mb-2 text-white fw-bold text-center">
                    Sewa Mobil di Jombang Sekarang
                </h1>
                <p className="text-white text-center mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className='btn btn-success btn-lg' type='button'> Mulai Sewa Mobil </button>
            </div>
        </div>
    );
};

export default Banner;
