import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

import flogo from '../../image/facebook.png'
import ulogo from '../../image/ulogo.png'
import ilogo from '../../image/ilogo.png'

const Subscribe = () => {
    const [agree, setAgree] = useState(false);
    const location = useLocation();
    const handleCheckout = (event) => {
        event.preventDefault();
    }

    const handleSubmit = () => {
        toast('Thanks for giving feedback');
        location("/subscribe");
    }
    return (
        <div id='subscribe' className='row container w-100'>
            <div className='register-form col-md-6 col-sm-12'>
                <h2 className='text-info text-center mb-3'>Give Your Feedback</h2>
                <form onSubmit={handleCheckout}>
                    <input
                        className='bg-dark text-white'
                        type="text" placeholder='Enter your name' required />
                    <input
                        className='bg-dark text-white'
                        type="email" name="email" id=""
                        placeholder='Please Enter Email' required />

                    <textarea
                        className='bg-dark text-white w-100' type="text-area"
                        placeholder='Give your Feedback' required />



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
                        value="Submit Feedback" required />
                </form>


            </div>
            <div className=' col-md-6 col-sm-12'>
                <h2 className='text-info text-center'>Please Subscribe</h2>

                <button
                    className='btn btn-primary w-100 rounded-pill my-3'>
                    <img style={{ width: "40px" }} src={ulogo} className='rounded-pill ' alt="" />
                    YouTube
                </button>

                <button
                    className='btn btn-primary w-100 rounded-pill my-2'>
                    <img style={{ width: "30px" }} src={flogo} alt="" />
                    FaceBook
                </button>

                <button
                    className='btn btn-primary w-100 rounded-pill my-3'>
                    <img style={{ width: "30px" }} src={ilogo} alt="" />
                    Instagram
                </button>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Subscribe;