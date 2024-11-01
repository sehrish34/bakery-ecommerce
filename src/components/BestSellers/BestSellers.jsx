import React from 'react';
import BakeryItemCard from '../BakeryItemCard/Cards';
import './BestSellers.css';
import bakeryData from '../../../products.json';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";

import { RxArrowRight, RxArrowLeft } from "react-icons/rx";

function BestSellers() {
    const { bakeryItems } = bakeryData;
    const bestSellers = bakeryItems[0]?.ourBestSellers?.items || [];

    return (
        <div className="best-sellers-container">
        <div className="best-sellers">
            <h2 className="best-sellers-heading">Our Best Sellers</h2>
        </div>

        <div className="swiper-container">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 3,
                    },
                    700: {
                        slidesPerView: 5,
                        spaceBetween: 3,
                    },
                }}
                freeMode={true}
            
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[FreeMode,  Navigation]}
            >
                {bestSellers.length > 0 ? (
                    bestSellers.map((item, index) => (
                        <SwiperSlide key={index}>
                            <BakeryItemCard item={item} />
                        </SwiperSlide>
                    ))
                ) : (
                    <p>No best sellers available at the moment.</p>
                )}
            </Swiper>


            <div className="swiper-button-prev">
                <RxArrowLeft size={30} color='black' />
            </div>
            <div className="swiper-button-next">
                <RxArrowRight size={30} color='black'/>
            </div>
            

            <div className="swiper-pagination"></div>
        </div>
    </div>
    );
}

export default BestSellers;