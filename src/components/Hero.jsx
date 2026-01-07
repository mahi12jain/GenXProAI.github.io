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
      // Prevent closing if the trigger button was clicked (though stopPropagation should handle it)
      if (e.target.closest('#open-menu')) return;
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

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'About Us', href: '#about' },
  ];

  return (
    <>
      <section
        className="w-full min-h-screen flex flex-col bg-white"
        style={{
          backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      >
        <nav className="flex items-center justify-between p-4 md:px-8 lg:px-16 xl:px-24 w-full bg-white/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300">
          <a href="#" aria-label="GenXProAI home" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#050040]">GenXProAI</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-blue-600 transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="flex items-center gap-4 max-md:hidden">
            <button onClick={() => setModalVisible(true)} className="text-black font-medium border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
              Contact Us
            </button>
            <button
              onClick={() => setModalVisible(true)}
              className="px-5 py-2.5 rounded-full bg-[#050040] text-white font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="open-menu"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(true);
            }}
            className="md:hidden text-slate-800 hover:text-black transition p-2"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          id="menu"
          ref={menuRef}
          className={`
            fixed inset-0 z-[60] md:hidden
            transition-all duration-500 ease-out
            ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
          inert={!menuOpen ? true : undefined}
        >
          {/* Background with gradient */}
          <div
            className={`
              absolute inset-0 bg-gradient-to-br from-[#050040] via-indigo-900 to-slate-900
              transition-transform duration-500 ease-out
              ${menuOpen ? 'scale-100' : 'scale-95'}
            `}
          />

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-32 right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            className={`
              absolute top-6 right-6 z-[70] p-3 rounded-full bg-white/10 backdrop-blur-sm
              text-white hover:bg-white/20 transition-all duration-300 cursor-pointer
              ${menuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}
            `}
            style={{ transitionDelay: menuOpen ? '300ms' : '0ms' }}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {/* Menu Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-8">
            {/* Logo */}
            <div
              className={`
                absolute top-6 left-6 transition-all duration-500
                ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
              `}
              style={{ transitionDelay: menuOpen ? '200ms' : '0ms' }}
            >
              <span className="text-2xl font-bold text-white">GenXProAI</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    text-3xl font-semibold text-white hover:text-blue-300
                    transition-all duration-500 ease-out
                    ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  `}
                  style={{ transitionDelay: menuOpen ? `${150 + index * 75}ms` : '0ms' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => { setMenuOpen(false); setModalVisible(true); }}
              className={`
                mt-12 px-8 py-4 rounded-full bg-white text-[#050040] font-bold text-lg
                hover:bg-blue-100 transition-all duration-500 shadow-xl
                ${menuOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
              `}
              style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
            >
              Get Started
            </button>

            {/* Social/Contact Info */}
            <div
              className={`
                absolute bottom-10 left-0 right-0 text-center text-white/60 text-sm
                transition-all duration-500
                ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{ transitionDelay: menuOpen ? '500ms' : '0ms' }}
            >
              info@genxproai.com
            </div>
          </div>
        </div>

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

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold max-w-5xl text-center mx-auto text-[#000] leading-tight mb-6">
            Enterprise AI Solutions for{' '}
            <span className="text-black">
              Business Automation & Growth
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 mx-auto max-w-3xl text-center mb-12 leading-relaxed">
            Transform your business with custom AI development, machine learning solutions, and intelligent automation. GenXProAI delivers proven artificial intelligence strategies that reduce costs, increase efficiency, and drive measurable ROI.
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



