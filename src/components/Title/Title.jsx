import React from 'react'
import "./Title.css"
const Title = ({text,desc,className}) => {
    return (
        <div className={`pb-5 ${className || ""}`}>
            <p className="title">{text}</p>
            <p className="card-create">{desc}</p>
        </div>
    )
}

export default Title