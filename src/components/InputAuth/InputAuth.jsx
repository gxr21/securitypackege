import React from 'react';
import "./InputAuth.css";

const InputAuth = ({ label, type, id, className , onChange }) => {
    return (
        <div className={`d-flex flex-column ${className}`}>
            <label htmlFor={id} className="input-title">{label}</label>
            <input type={type} id={id}
            onChange={onChange}
            />
        </div>
    );
};

export default InputAuth;
