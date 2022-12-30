import React from 'react';
import './Banner.css';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-black text-white p-60'>
            <div className='rounded-full lg:w-1/2 p-3 mx-auto text-center' style={{border: "2px solid white"}}>
                <h4 className="text-1xl banner-title">Are you ready? Explore how to use PickoBook</h4>
            </div>
            <div className='lg:w-1/2 mx-auto text-center my-5'>
                <h1 className="text-4xl banner-header">This Platform for all the people around the world</h1>
            </div>
        </div>
    );
};

export default Banner;