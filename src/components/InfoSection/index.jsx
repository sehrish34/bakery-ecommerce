import React from 'react'
import './infoSection.css'
import image from '../../assets/images/buffet.jpg'

function InfoSection() {
  return (
    <div className="about-container">
    <div className="about-image">
    <img src={image} alt="Bakery" />
  </div>
      <div className="about-text">
        <h1 className='about-heading'>Fresh Pastry, Fresh Start: The Heart of Our Bakery

        </h1>
        <p>
         Each morning, we offer not just pastries, but a promise — that today will be a good day. Our shelves are stocked with the finest ingredients, and every pastry is a reflection of our commitment to quality. We use real butter, fresh fruit, and premium flours, ensuring that every bite you take is as delicious as it is wholesome.

         For us, baking is an art, and our customers are at the heart of every creation. Whether you’re grabbing a quick pastry on your way to work or sitting down for a leisurely breakfast, we hope to make your morning special. At our bakery, each pastry symbolizes a fresh start, a new beginning, and a chance to savor the simple joys of life.

         So come by, grab a pastry, and start your day the right way. Because every fresh pastry is more than just food — it’s a reminder that today holds endless possibilities.
        </p>
      </div>
   
    </div>
  );
}
export default InfoSection