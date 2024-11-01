import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './CustomButton/Button'
import './styles/herosection.css'

function HeroSection() {
    const navigate = useNavigate();

    const handleNavigation =()=>{
        navigate('/product')
    }
    return (
        <section className="hero-slider">
            <div className="container">
                <div className="row">
                  
                    <div className="logo-heading-and-content">
                        <h1>Delight In Every Bite</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis numquam, ipsum enim totam incidunt officia, in itaque adipisci hic corrupti exercitationem dolore. Dolore?</p>
                        <Button title='Order Now' onClick={handleNavigation}/>
                    
                    </div>
                </div>
            </div>
        </section>)
}

export default HeroSection