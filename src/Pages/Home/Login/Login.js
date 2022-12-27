import React from 'react';
import { Form, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='grid  lg:grid-cols-2 w-[1080px] mx-auto mt-32'>
            <div>
                <h1 className='text-5xl text-cyan-600 lg:mt-24 title'>PickoBook</h1>
                {/* <p>Connect with friends and the world around you.</p> */}
                <h2 className='text-6xl message'>Welcome Back!</h2>
            </div>
            <div>
                <h3 className='text-4xl text-center section-title mb-4'>Login</h3>
                <div className='text-center'>
                    <Form>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full mb-3" />
                    <input type="password" placeholder="Type here" className="input input-bordered w-full mb-3" />
                    <button className='btn w-full'>Login</button>
                    </Form>
                </div>
                <p className="mt-3">New to PickoBook? <Link className="text-secondary" to='/register'>Create New Account</Link> </p>
                <div className='divider'>OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;