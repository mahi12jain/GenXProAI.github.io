import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
                <div className="text-2xl font-bold font-display tracking-tight">
                    GenX pro<span className="text-primary-600">.AI</span>
                </div>

                <div className="hidden md:flex gap-8 font-medium text-secondary-900/80">
                    <a href="#overview" className="hover:text-primary-600 transition-colors">Overview</a>
                    <a href="#divisions" className="hover:text-primary-600 transition-colors">Divisions</a>
                    <a href="#why-us" className="hover:text-primary-600 transition-colors">Why Us</a>
                    <a href="#process" className="hover:text-primary-600 transition-colors">Process</a>
                    
                </div>

                <button onClick={typeof window !== 'undefined' ? (() => { const ev = new CustomEvent('openContact'); window.dispatchEvent(ev); }) : undefined} className="bg-secondary-900 text-white px-6 py-2 rounded-full font-medium hover:bg-secondary-900/90 transition-colors">
                    Contact Us
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
