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

  const menuClasses = [
    'flex items-center gap-8 font-medium',
    'max-md:fixed max-md:inset-0 max-md:z-[60] max-md:bg-white max-md:flex-col max-md:justify-center max-md:items-center',
    'max-md:transition-all max-md:duration-300 max-md:ease-out'
  ];

  const mobileMenuState = menuOpen
    ? 'max-md:opacity-100 max-md:pointer-events-auto'
    : 'max-md:opacity-0 max-md:pointer-events-none';

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
            className={[...menuClasses, mobileMenuState].join(' ')}
            aria-hidden={!menuOpen}
          >
            <a href="#" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#features" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#about" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About Us</a>

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

        <div className="flex-1 flex flex-col justify-center items-center w-full px-4 pb-24 pt-36">
          <div className="flex items-center gap-2 bg-indigo-50/70 backdrop-blur-sm border border-indigo-200/60 rounded-full w-max mx-auto px-5 py-2.5 mb-8">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white text-xs shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                <path d="M12 2v4" />
                <path d="m2 12 2 2 4-4" />
                <path d="m14 12 4-4 6 6" />
                <path d="M12 22v-4" />
                <path d="m12 12 4 4-4 4-4-4 4-4Z" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-indigo-700 uppercase tracking-wide">AI-Powered Business Solutions</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold max-w-5xl text-center mx-auto text-[#050040] leading-tight mb-6">
            Enterprise AI Automation & Custom LLM Solutions  for{' '}
            <span className="bg-gradient-to-r from-[#5f4dff] via-[#7d4dff] to-[#e547d0] text-transparent bg-clip-text">
             For Business Growth 
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 mx-auto max-w-3xl text-center mb-12 leading-relaxed">
            GenX Pro AI delivers custom AI chatbots, enterprise LLM implementations, and workflow automation using n8n and Zapier for businesses in [Healthcare,Finance,IT Industry].
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm md:text-base font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </span>
              5+ Projects Delivered
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </span>
              100% Client Satisfaction
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </span>
              24/7 Expert Support
            </div>
          </div>
        </div>
      </section>
      <ConsultationModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
}





