import React from 'react';
import Hero from '../components/Hero';
import { Features } from '../components/Features';
import { WhyChooseUs } from '../components/WhyChooseUs';

const Home = () => {
    return (
        <main>
            <Hero />
            <Features />
            <WhyChooseUs />
        </main>
    );
};

export default Home;