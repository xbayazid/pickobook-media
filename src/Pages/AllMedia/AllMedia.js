import React, { useEffect, useState } from 'react';
import PostCards from './PostCards';

const AllMedia = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch("https://pickobook-media-server.vercel.app/availablePost")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);

    return (
        <div>
            {
              posts.map(post => <PostCards key={post._id}
                post={post}
                ></PostCards>)
            }
        </div>
    );
};

export default AllMedia;