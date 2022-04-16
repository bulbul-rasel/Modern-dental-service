import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='container'>
            <div className='service  shadow-lg p-3'>
                <img className='w-100 ' src={img} alt="" />
                <h2 className='title'>{name}</h2>
                <p className='fee'>Fee: {price}</p>
                <p className='description'> <small>{description}</small></p>
                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>{name}</button>
            </div>
        </div>
    );
};

export default Service;