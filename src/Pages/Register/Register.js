import React from 'react';
import { Form, Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='grid  lg:grid-cols-2 w-[1080px] mx-auto mt-32'>
            <div>
                <h1 className='text-5xl text-cyan-600 lg:mt-24 title'>PickoBook</h1>
                <h2 className='text-3xl w-2/3 message'>Connect with friends and the world around you.</h2>
            </div>
            <div>
                <h3 className='text-4xl text-center section-title mb-4'>Register</h3>
                <div className='text-center'>
                    <Form>
                    <input type="text" placeholder="Full Name" className="input input-bordered w-full mb-3" />
                    <input type="email" placeholder="Email Address" className="input input-bordered w-full mb-3 required" />
                    <input type="password" placeholder="Password" className="input input-bordered w-full mb-3 required" />
                    <button className='btn w-full'>Register</button>
                    </Form>
                </div>
                <p className="mt-3">Already registered? <Link className="text-secondary" to='/login'>Login</Link> </p>
                <div className='divider'>OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;