import React from "react";
import "./Card.css";

const Card = ({ className, children }) => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className={`row d-flex page-card ${className || ""}`}>
                {children}
            </div>
        </div>
    );
};

export default Card;
