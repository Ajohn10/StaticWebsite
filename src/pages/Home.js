import React from 'react';
import TypingEffect from '../components/TypingEffect';

function Home() {
    return (
        <div className="flex-grow flex items-center justify-center highlight highlight-variant-19 after:opacity-10">
            <TypingEffect message="Hello...  Thank you for visiting my site."></TypingEffect>
        </div>
    );
}

export default Home;
