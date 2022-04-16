import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    return (
        <div className='container'>
            <div className='service'>
                <img className='w-100' src={img} alt="" />
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p> <small>{description}</small></p>
                <button className='btn btn-primary'>{name}</button>
            </div>
        </div>
    );
};

export default Service;