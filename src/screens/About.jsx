import React from 'react'
import './about.css'
import image from '../assets/images/about.jpeg'

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className='about-heading'>About Our Bakery</h1>
        <p>
          Welcome to our bakery, where tradition meets innovation! We take pride in using 
          the finest ingredients to bake our wide selection of cakes, pastries, and breads. 
          Every item is made with love and care, ensuring the highest quality and flavor. 
          Whether you’re craving a sweet treat or looking for the perfect cake for a special 
          occasion, we have something for everyone.
        </p>
      </div>
      <div className="about-image">
        <img src={image} alt="Bakery" />
      </div>
    </div>
  );
}
export default About