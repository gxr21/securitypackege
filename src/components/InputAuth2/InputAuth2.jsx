import React from 'react';
import "./InputAuth2.css";

const InputAuth2 = ({ placeholder, type, id, className = '', onChange }) => {
    return (
        <div>
            <input 
                type={type} 
                id={id} 
                className={`mb-2 ${className}`} 
                placeholder={placeholder} 
                onChange={onChange} // Handle changes
            />
        </div>
    );
};

export default InputAuth2;
