import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const PostModal = () => {
    const { user, loading } = useContext(AuthContext);
    // const { displayName, photoURL, email } = user;
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/availablePost')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[]);
    
    const handlePost = event =>{
        event.preventDefault();
        const form = event.target;
        const author =  form.author.value;
        const authorImg =  form.authorImg.value;
        const img = form.img.value;
        const postTitle = form.postTitle.value;
        const post = {author, authorImg, img, postTitle};
        
        fetch("http://localhost:5000/availablePost",{
          method: "POST",
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify(post),
        })
        .then((res)=> res.json())
        .then((data)=>{
          const newPost = [...post, data];
          setPosts(newPost);
        })
        .catch((error) => console.error(error));
        form.reset();
    }

    return (
        <div>
          <input type="checkbox" id="post-create-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <div>
                <h3 className="text-center text-lg font-bold"></h3>
                <label
                  htmlFor="post-create-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
              </div>
              <div className="divider"></div>
              <div className="flex items-center">
                {/* <img src={photoURL} alt="" className="w-[50px] rounded-full" /> */}
                {/* <p name="author" className="text-lg ml-2">{displayName}</p> */}
              </div>
              <Form onSubmit={handlePost}>
              <input
                type="text" name='postTitle'
                placeholder="What's on your mind..."
                className="input input-bordered w-full mt-3"
              />
              <div className=" mt-3 w-full h-20 border-2 rounded-sm flex justify-center items-center">
                <input type="file" name="drag and drop img" id="" className="w-full h-full pt-7 pl-28" />
              </div>
              </Form>
              {/* <button className="btn btn-block btn-primary mt-3">Post</button> */}
              <input className='btn btn-accent mt-3 w-full' type="submit" value="submit" />
            </div>
          </div>
        </div>
      );
};

export default PostModal;