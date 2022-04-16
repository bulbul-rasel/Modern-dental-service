import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <>
            <p className='text-center mt-5 text-info'>  &copy; copyright {year} All Rights Reserve Modern Dental Service</p>
        </>
    );
};

export default Footer;