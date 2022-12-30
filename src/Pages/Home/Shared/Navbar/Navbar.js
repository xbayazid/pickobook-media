import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }
    return (
        <div className="navbar w-[1080px] mx-auto">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost title text-4xl">PickoB<span className='text-blue-600'>oo</span>k</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to="/media">Media</Link></li>
      <li><Link to="/message">Message</Link></li>
      <li><Link to="/about">About Me</Link></li>
      <li>
      {
            user?.uid ? 
          
            <li><button onClick={handleLogOut}>Log Out</button></li>

            :
            <li>
            <Link to="/login">Login</Link>
          </li>
          }
      </li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;<h1>Hello</h1>