import React, { useEffect, useState } from 'react';
import PostCard from './PostCard/PostCard';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://pickobook-media-server.vercel.app/availablePost')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);

    const slicePost = posts.slice(0,3)

    return (
        <div className='items-center'>
            {
                slicePost.map(post => <PostCard key={post._id}
                post={post}
                ></PostCard>)
            }
        </div>
    );
};

export default Posts;