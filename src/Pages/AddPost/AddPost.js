import React, { useEffect, useState } from 'react';

const AddPost = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://pickobook-media-server.vercel.app/availablePost')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[]);
    
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const author =  form.author.value;
        const authorImg =  form.authorImg.value;
        const img = form.img.value;
        const postTitle = form.postTitle.value;
    }
    return (
        <div>
            
        </div>
    );
};

export default AddPost;