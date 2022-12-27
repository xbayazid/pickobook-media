import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 w-[1080px] mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl title text-4xl">PickoB<span className='text-blue-600'>oo</span>k</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to="">Media</Link></li>
      <li><Link to="">Message</Link></li>
      <li><Link to="">About Me</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;<h1>Hello</h1>