import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/slice/modal';
import Modal from '../Modal';

function Header() {

    const dispatch = useDispatch();
    const CART = useSelector((state)=>state.cart)

    const {data, quantity, text} = CART;
        const handleModal = () => {
            console.log('here')
            dispatch(openModal())
        }


    return (
        <>
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <h1>Bakery Delights</h1>
                    </div>

                    <nav className="menu">
                        <ul>
                            <li>
                                <NavLink to="/" activeClassName="active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/product" activeClassName="active">Product</NavLink>
                            </li>
                            <li>
                                <NavLink to="/bestsellers" activeClassName="active">Bestsellers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="right-icons">
                        <FaSearch className="icon" />
                        <FaUserCircle className="icon" />
                        <FaShoppingCart className="icon" onClick={handleModal} />
                        <div className='circle'>{ quantity && quantity}</div>
                    </div>
                </div>
            </div>

        </header>
        <Modal />
        </>

    )
}

export default Header