import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, } from 'react-router-dom';
import { addToCart } from '../../store/slice/cart';
import toast, { toastSucess } from '../../store/slice/toast';
import Button from '../CustomButton/Button';
import './BakeryItemCard.css';
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';

function BakeryItemCard({ item }) {
  const { id, image, name, price } = item;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToDetailPage = () => {
    navigate(`/ProductDetail/${id}`, { state: { item } });
  };

  const handleCart = () => {

    dispatch(addToCart({ item }));

    dispatch(toastSucess({ text: 'Added to Cart!' }));

  }

  return (
    <div className="bakery-item-card">
      <div className="image-container">
        <img src={image} alt={name} className="bakery-image" />
        <div className="overlay">
          <span className="icon" onClick={goToDetailPage}>View details</span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="item-name">{name}</h3>
        <p className="item-price">${price.toFixed(2)}</p>
        <Button title=' Add' onClick={handleCart} />
      </div>
    </div>
  );
}

export default BakeryItemCard;