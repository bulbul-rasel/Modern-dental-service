import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service;

    return (
        <div className='container mb-5 w-100'>
            <div className='service  shadow-lg p-3'>
                <img className='w-100 ' src={img} alt="" />
                <h2 className='title'>{name}</h2>
                <p className='fee'>Fee: {price}</p>
                <p className='description'> <small>{description}</small></p>
                <Link to='/checkout'>
                    <button className='btn  btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;