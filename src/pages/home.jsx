import React from 'react';
import Hero from '../components/Hero';
import { Features } from '../components/Features';
import { AboutUs } from '../components/AboutUs';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Footer } from '../components/Footer';

const Home = () => {
    return (
        <main>
            <Hero />
            <Features />
            <AboutUs />
            <WhyChooseUs />
            <Footer />
        </main>
    );
};

export default Home;