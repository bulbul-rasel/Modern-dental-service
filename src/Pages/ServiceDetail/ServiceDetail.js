import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-info text-center'>Checkout Details: Service ID {serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn  btn-primary'>Proceed Checkout</button>
                </Link>

            </div>
        </div>
    );
};

export default ServiceDetail;