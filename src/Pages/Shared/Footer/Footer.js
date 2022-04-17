import React from 'react';
import flogo from '../../../image/facebook.png'
import ulogo from '../../../image/ulogo.png'
import ilogo from '../../../image/ilogo.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='container'>
            < div className='row d-flex mt-5 w-100'>
                <div className='col-sm-6 col-md-3 col-lg-3 mt-3'>
                    <p className='text-info'>Information </p>
                    <p>About Us</p>
                    <p>Blogs</p>
                    <p>More Result</p>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3 mt-3'>
                    <p className='text-info'>Service </p>
                    <p>Dental Service</p>
                    <p>Health Guid</p>
                    <p>24*7 Support</p>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3 mt-3'>
                    <p className='text-info'>Helpful Link </p>
                    <p>Health Services</p>
                    <p>Trems & Conditions</p>
                    <p>Privacy</p>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3 my-3'>
                    <p className='text-info'>Connect Me </p>
                    <div className='mb-3'>
                        <img style={{ width: "40px" }} src={ulogo} className='rounded-pill ' alt="" />
                        <img style={{ width: "30px" }} src={flogo} className='rounded-pill mx-3' alt="" />
                        <img style={{ width: "30px" }} src={ilogo} className='rounded-pill ' alt="" />
                    </div>
                    <p>✉ rasel.bulbul7@gmail.com</p>
                    <p>📞 +8801234567890</p>
                </div>
            </div>
            <p className='text-center mt-5 text-info'>  &copy; copyright {year} All Rights Reserve Modern Dental Service</p>

        </div>
    );
};

export default Footer;