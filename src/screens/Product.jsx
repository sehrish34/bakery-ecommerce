import React, { useState, useEffect, useRef } from 'react';
import './product.css';
import bakeryData from '../../products.json';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/CustomButton/Button';
import BakeryItemCard from '../components/BakeryItemCard/Cards';

function Product() {

  const categories = bakeryData.bakeryItems[0];
  const location = useLocation();
  const navigate = useNavigate();

  const categoryRefs = useRef({});


  const handleNavigate = (categoryKey) => {
    navigate(`/product`);

    if (categoryRefs.current[categoryKey]) {
      categoryRefs.current[categoryKey].scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  };



  console.log(location, 'loc')
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>See Our Menu</h2>
        <p>Delicious pastries made fresh daily. Pick your favorite and order now!</p>
      </div>
      <div>
        <div className="category-container">
          {Object.keys(categories).map((categoryKey) => {
            const category = categories[categoryKey];

            return (
              <div key={categoryKey} className="category-card">
                <img src={category.image} alt={categoryKey} className="category-image" />
                <h3>{categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}</h3>

                <div className="overlay">
                  <Button title='Buy now' onClick={() => handleNavigate(categoryKey)} />

                </div>
              </div>
            );
          })}
        </div>
      </div>


      {location.pathname === '/product' && (
        <>
          <div>
            {Object.entries(categories).map(([categoryName, categoryData]) => (
              <div
              key={categoryName}
              className="category-section"

              ref={(el) => (categoryRefs.current[categoryName] = el)}
            >
                <h2 className="category-heading">{categoryName.toUpperCase()}</h2>
                <p className="category-description">{categoryData.description}</p>


                <div className="items-grid">
                  {categoryData.items.map(item => (
                    <BakeryItemCard key={item.id} item={item} />
                  ))}
                </div>
                </div>
            ))}
          </div>
        </>)}
    </div>
  );
}

export default Product;