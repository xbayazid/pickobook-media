import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">PickoBook</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link>Home</Link></li>
      <li><Link>Media</Link></li>
      <li><Link>Message</Link></li>
      <li><Link>About Me</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;<h1>Hello</h1>