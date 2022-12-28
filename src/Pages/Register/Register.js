import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const {providerLogin} = useContext(AuthContext);
    const {createUser, updateUser} = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const navigate = useNavigate();
    const handleGoogleSignIn = () =>{
        providerLogin(googleAuthProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast('User Registered Successfully')
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        
        const userInfo = {
            displayName: name
        }
      
        createUser( email,password)
              .then(result =>{
                  const user = result.user;
                  console.log(user);
                  toast('User Created Successfully')
                  
                  updateUser(userInfo)
                  .then(() =>{
                    // saveUser(name, email);
                  })
                  .catch(error => console.log(error))
                  form.reset();
                  setError('');
              })
              .catch(error => {
                  console.error(error);
                  setError(error.message)
              })
      
      }
    return (
        <div className='grid  lg:grid-cols-2 w-[1080px] mx-auto mt-32'>
            <div>
                <h1 className='text-5xl text-cyan-600 lg:mt-24 title'>PickoBook</h1>
                <h2 className='text-3xl w-2/3 message'>Connect with friends and the world around you.</h2>
            </div>
            <div>
                <h3 className='text-4xl text-center section-title mb-4'>Register</h3>
                <div>
                <Form onSubmit={handleSubmit}>
                <div>
                <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full mb-3 required" />
                </div>
                <div className='my-5'>
                <input type="password" name='password' placeholder="Password" className="input input-bordered w-full mb-3 required" />
                </div>
                <div>
                    <button className='btn btn-accent w-full' type='submit'>Register</button>
                </div>
                <p className='mt-2'>Already Registerd? <Link className="text-secondary" to='/login'>Login</Link> </p>
                <div className="divider">OR</div>
                <div className='mx-auto p-3 rounded-md text-center' style={{border: "2px solid", width: '530px'}}>
                    <button onClick={handleGoogleSignIn}>Register with Google</button>
                </div>
            </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;