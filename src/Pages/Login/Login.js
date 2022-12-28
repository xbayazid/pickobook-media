import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Login.css';

const Login = () => {
    const [error, setError] = useState('');
    const {signIn, loader} = useContext(AuthContext);
    const {providerLogin} = useContext(AuthContext);
    const {loginUserEmail, setLoginUserEmail} = useState('');
    const googleAuthProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () =>{
        providerLogin(googleAuthProvider)
        .then(result =>{
            const user = result.user;
            toast('User Login Successfully');
            navigate(from, {replace: true});
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
          .then(result =>{
              const user = result.user;
              form.reset();
              setError('');
              setLoginUserEmail(email);
          })
          .catch(error => {
              console.error(error);
              setError(error.message);
          })
    }
    return (
        <div className='grid  lg:grid-cols-2 w-[1080px] mx-auto mt-32'>
            <div>
                <h1 className='text-5xl text-cyan-600 lg:mt-24 title'>PickoBook</h1>
                {/* <p>Connect with friends and the world around you.</p> */}
                <h2 className='text-6xl message'>Welcome Back!</h2>
            </div>
            <div>
                <h3 className='text-4xl text-center section-title mb-4'>Login</h3>
                <div>
                <Form onSubmit={handleSubmit}>
                <div>
                <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full mb-3 required" />
                </div>
                <div className='my-5'>
                <input type="password" name='password' placeholder="Password" className="input input-bordered w-full mb-3 required" />
                </div>
                <div>
                    <button className='btn btn-accent w-full' type='submit'>Login</button>
                </div>
                <p className='mt-2'>New to PickoBook? <Link className="text-secondary" to='/register'>Register</Link> </p>
                <div className="divider">OR</div>
                <div className='mx-auto p-3 rounded-md text-center' style={{border: "2px solid", width: '530px'}}>
                    <button onClick={handleGoogleSignIn}>Login with Google</button>
                </div>
            </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;