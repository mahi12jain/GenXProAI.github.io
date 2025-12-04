import React from 'react';
import Hero from '../components/Hero';
import { Features } from '../components/Features';
import { AboutUs } from '../components/AboutUs';
import { WhyChooseUs } from '../components/WhyChooseUs';

const Home = () => {
    return (
        <main>
            <Hero />
            <Features />
            <AboutUs />
            <WhyChooseUs />
        </main>
    );
};

export default Home;