import React from 'react';
import "./ButtonAuth.css";

const ButtonAuth = ({ className = '', text, onClick}) => {
  return (
    <button 
      className={`login mb-5 ${className}`} 
      onClick={onClick} 
    >
      {text}
    </button>
  );
};

export default ButtonAuth;
