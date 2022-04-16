import React, { useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [user1, loading1] = useAuthState(auth);
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    if (user1) {
        console.log("user", user1);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast('Updated profile');
        navigate("/home")
    }
    const navigateLogin = () => {
        navigate("/login")
    }

    return (
        <div className='register-form'>
            <h2 className='text-info text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className='bg-dark text-white' type="text" placeholder='Enter your name' />
                <input className='bg-dark text-white' type="email" name="email" id="" placeholder='Please Enter Email' required />
                <input className='bg-dark text-white' type="password" name="password" id="" placeholder='Place Enter Your Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? "" : "text-info"} htmlFor="terms"> Accept Terms and Condition</label>
                <input
                    disabled={!agree}
                    className='w-100 rounded-pill btn btn-info'
                    type="submit"
                    value="Register" />

                <p>New to Genius Car? <Link to={'/login'} className='text-info text-decoration-none' onClick={navigateLogin}> Please Login</Link ></p>
            </form>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;