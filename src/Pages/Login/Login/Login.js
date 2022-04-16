import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    return (
        <div className='container w-50 mx-auto '>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='mx-auto w-100 rounded-pill' variant="primary" type="submit">
                    Login
                </Button>
                {/* {errorElement} */}
                <p>New to Modern Dental? <Link to={'/register'} className='test-danger text-decoration-none' > Please Register</Link ></p>
                <p>Forget Password? <button className='btn btn-link text-primary text-decoration-none ' > Reset Password </button ></p>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;