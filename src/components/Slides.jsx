import React, { useState } from 'react';
import '../styles/Slides.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <h2 style={{ color: 'white' }}>{slide.caption}</h2>
          </div>
        ))}
      </div>

      <div className="slider-nav">
        <button onClick={prevSlide}>❮</button>
        <button onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default Slider;