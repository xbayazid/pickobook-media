import React from 'react';

const PostSection = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
            <img className='w-16' src="https://i.ibb.co/Df6D24W/portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-deligh.png" alt="" />
            </div>
            <div className='ml-4'>
            <input type="text" placeholder="Share something..." className="input input-bordered input-accent w-full" />
            {/* <input className='ms-5' type="file" name="" id="" /> */}
            </div>
            <div className="ml-3">
                <button type='submit' className='btn btn-accent'>Post</button>
            </div>
        </div>
    );
};

export default PostSection;