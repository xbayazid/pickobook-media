import React from 'react';
import Posts from '../Posts/Posts';
import PostSection from '../PostSection/PostSection';


const Home = () => {
    return (
        <div>
            <PostSection></PostSection>
            <Posts></Posts>
        </div>
    );
};

export default Home;