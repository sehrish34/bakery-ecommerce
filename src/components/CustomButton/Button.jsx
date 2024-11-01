import React from 'react';
import './Button.css'; 

function Button({ title, onClick, style }) {
  return (
    <button 
      onClick={onClick} 
      className="bakery-button"
      style={style}
    >
      {title}
    </button>
  );
}

export default Button;