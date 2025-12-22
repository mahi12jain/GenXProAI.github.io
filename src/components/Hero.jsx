import React, { useState, useEffect, useRef } from 'react';
import ConsultationModal from './consulationModal';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const menuRef = useRef(null);

  // Close on ESC & click outside (mobile overlay)
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    function onClickOutside(e) {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target)) return;
      setMenuOpen(false);
    }

    if (menuOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section
        className="w-full min-h-screen flex flex-col bg-white"
        style={{
          backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      >
        <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full bg-white/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
          <a href="#" aria-label="GenXProAI home" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#050040]">GenXProAI</span>
          </a>

          <div
            id="menu"
            ref={menuRef}
            className={[
              'max-md:absolute max-md:top-0 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-screen max-md:bg-white max-md:flex-col max-md:justify-center',
              'flex items-center gap-8 font-medium',
              menuOpen ? 'max-md:w-full max-md:px-4' : 'max-md:w-0',
            ].join(' ')}
            aria-hidden={!menuOpen}
          >
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>

            <button
              onClick={() => setMenuOpen(false)}
              className="md:hidden absolute top-6 right-6 text-slate-800 hover:text-black transition"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <button onClick={() => setModalVisible(true)} className="hidden md:block text-black font-medium border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
            Contact Us
          </button>

          <button
            id="open-menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-slate-800 hover:text-black transition"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </nav>

        <div className="flex-1 flex flex-col justify-center items-center w-full px-4 pb-20 pt-32">
          <div className="flex items-center gap-2 bg-indigo-50/60 backdrop-blur-sm border border-indigo-200/40 hover:border-indigo-300/60 transition-all rounded-full w-max mx-auto px-5 py-2.5 group cursor-pointer mb-8">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span className="text-sm font-semibold text-indigo-700 uppercase tracking-wide">AI-Powered Business Solutions</span>
          </div>

          <h5 className="text-4xl md:text-6xl lg:text-7xl font-semibold max-w-5xl text-center mx-auto text-black leading-tight mb-6">
            Intelligent AI Solutions for Modern Enterprises
          </h5>

          <p className="text-base md:text-lg text-slate-600 mx-auto max-w-2xl text-center mb-10 leading-relaxed">
            GenXProAI delivers comprehensive AI agency services, from intelligent agents to custom automation, ensuring your business stays ahead of the curve.
          </p>

          <div className="mx-auto w-full flex items-center justify-center gap-4">
            <button onClick={() => setModalVisible(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-full font-medium transition shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <ConsultationModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
}
