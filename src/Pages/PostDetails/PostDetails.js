import React from 'react';
import { FaGratipay} from "react-icons/fa";

const PostDetails = ({post}) => {
    const {_id, img, postTitle, author, authorImg, react} = post;
    return (
        <div className='mt-8'>
        <div className="card md:w-[45%] mx-auto bg-base-100 shadow-xl">
<div className="card-body">
<div className='flex'>
    <img src={authorImg} className="rounded-full w-14" alt="" />
<h2 className="card-title">{author}</h2>
</div>
    <p className='mt-7'>{postTitle}</p>
</div>
<figure><img src={img} className="mb-3" alt="Shoes" /></figure>
<div className='flex justify-around mb-6'>
<p style={{fontSize: "30px"}} className='flex items-center'><span style={{cursor: "pointer"}} className='text-red-800'><FaGratipay></FaGratipay></span> {react}</p>
<div className='flex'>
<input type="text" style={{border: "2px solid"}} placeholder="Comment" className="input w-full" />
<button className='btn btn-accent ml-3'>POST</button>
</div>
</div>
</div>
    </div>
    );
};

export default PostDetails;