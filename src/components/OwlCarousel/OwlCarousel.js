import React from 'react';
import DataTesti from '../../data/carousel.json';
import CarouselItem from './Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import '../../pages/style.css'

function Owl() {
    <OwlCarousel
        className="owl-theme"
        loop={true}
        margin={32}
        autoHeight={true}
        nav={true}
        center={true}
        dots={false}
        navText={[
            "<img src='/img/Left_button.png' style='width: 32px; margin-right: 10px;'>",
            "<img src='/img/Right_button.png' style='width: 32px'>",
        ]}
        responsive={{
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        }}
    >

        {DataTesti.map((item) => {
            return (
                <CarouselItem
                    profil={item.profil}
                    rate={item.rate}
                    comment={item.comment}
                    name={item.name}
                />
            )
        })}
    </OwlCarousel>
}

export default Owl;