import React from 'react';
import Banner from '../Banner/Banner';
import Posts from '../Posts/Posts';
import PostSection from '../PostSection/PostSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PostSection></PostSection>
            <Posts></Posts>
        </div>
    );
};

export default Home;