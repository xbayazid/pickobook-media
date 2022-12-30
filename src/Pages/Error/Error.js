import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assests/error.gif'

const Error = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <img src={error} alt="" />
        </div>
    );
};

export default Error;