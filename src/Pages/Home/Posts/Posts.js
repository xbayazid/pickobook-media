import React, { useEffect, useState } from 'react';
import PostCard from './PostCard/PostCard';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('post.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);

    return (
        <div className=''>
            {
                posts.map(post => <PostCard key={post.id}
                post={post}
                ></PostCard>)
            }
        </div>
    );
};

export default Posts;