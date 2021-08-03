import React from 'react';
import TweetSection from '../components/menu/tweetSection';
import Navbar from '../components/navbar';

function Home() {
    return (
        <>
            <Navbar />
            <div>
                <TweetSection />
            </div>
        </>
    );
}

export default Home;
