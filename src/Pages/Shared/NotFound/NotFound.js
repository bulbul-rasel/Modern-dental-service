import React from 'react';
import notfound from '../../../image/notfound.png'

const NotFound = () => {
    return (
        <div className='w-100'>
            <h1 className='text-center text-info'>404..! Not Found!</h1>
            <img className='center-block d-block mx-auto w-50' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;