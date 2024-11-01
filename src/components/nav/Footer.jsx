import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="widget first-one">
                    <h2>Bakery Delights</h2>
                    <p>Your one-stop shop for all things delicious! Freshly baked goods made with love.</p>
                    <ul className="social-icons">
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                        <li><a href="#"><FaPinterest /></a></li>
                    </ul>
                </div>

                <div className="widget">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Brand Guidelines</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="widget">
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="#">Cakes</a></li>
                        <li><a href="#">Pastries</a></li>
                        <li><a href="#">Breads</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Cupcakes</a></li>
                    </ul>
                </div>

                <div className="widget">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Bakery Delights. All rights reserved.</p>
        </div>
    </footer>

    )
}

export default Footer