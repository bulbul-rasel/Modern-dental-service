import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useParams } from 'react-router-dom';


const Checkout = () => {
    const [agree, setAgree] = useState(false);
    const location = useLocation();
    const handleCheckout = (event) => {
        event.preventDefault();
    }

    const handleSubmit = () => {
        toast('Thanks for Checking Out');
        location("/checkout");
    }
    return (
        <div className='register-form'>
            <h2 className='text-info text-center'>Checkout Details</h2>
            <form onSubmit={handleCheckout}>
                <input
                    className='bg-dark text-white'
                    type="text" placeholder='Enter your name' required />
                <input
                    className='bg-dark text-white'
                    type="email" name="email" id=""
                    placeholder='Please Enter Email' required />

                <input
                    className='bg-dark text-white' type="text"
                    placeholder='Enter Address' required />

                <input
                    className='bg-dark text-white' type="text"
                    placeholder='Enter Phone  Number' required />

                <input
                    onClick={() => setAgree(!agree)}
                    type="checkbox" name="terms" id="terms" />

                <label
                    className={agree ? "" : "text-info"}
                    htmlFor="terms"> Accept Terms and Condition?</label>
                <input
                    disabled={!agree}
                    onClick={handleSubmit}
                    className='w-100 rounded-pill btn btn-info'
                    type="button"
                    value="Checkout" required />
            </form>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Checkout;