import React from 'react';
import flogo from '../../../image/facebook.png'
import ulogo from '../../../image/ulogo.png'
import ilogo from '../../../image/ilogo.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        < div className='row d-flex mt-5'>
            <div className='col-sm-12 col-md-6'>
                <p className='text-center mt-5 text-info'>  &copy; copyright {year} All Rights Reserve Modern Dental Service</p>
            </div>
            <div className='col-sm-12 col-md-6 mt-3'>
                <p className='text-info text-center'>Connect Me </p>
                <div className='  d-flex justify-content-center'>
                    <img style={{ width: "40px" }} src={ulogo} className='rounded-pill ' alt="" />
                    <img style={{ width: "30px" }} src={flogo} className='rounded-pill mx-3' alt="" />
                    <img style={{ width: "30px" }} src={ilogo} className='rounded-pill ' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;