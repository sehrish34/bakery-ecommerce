import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import cart, { addToCart } from '../../store/slice/cart';
import Button from '../CustomButton/Button';
import './detailPage.css';
import images from '../../../public/mbn8.png';

function ProductDetail() {
  const location = useLocation();
  const dispatch = useDispatch();
  const item = location?.state?.item;

  const { id, image, name, price, description } = item;


  const handleCart = () => {
    if (item) {
      const item = {
        id, image, name, price,
      }
      dispatch(addToCart({ item }));
    }

  }
  return (
    <>
      <img src={images} alt={name} className="product-image-head" />

      <div className="product-detail-container">
        <div className="product-image-container">
          <img src={`/${image}`} alt={name} className="product-image" />

        </div>


        <div className="product-details">
          <h2 className="product-name">{name}</h2>
          <p className="product-description">{description}</p>
          <p className="product-price">${price.toFixed(2)}</p>
          <Button title="Buy Now" onClick={handleCart} />
        </div>
      </div>

    </>
  );
}

export default ProductDetail;
