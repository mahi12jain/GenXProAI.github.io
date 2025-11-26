import { useState } from 'react';

export default function Header({ onOpenContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          GenX pro <span className="text-gradient">AI</span>
        </div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#overview" className="nav-link" onClick={() => setIsMenuOpen(false)}>Overview</a>
          <a href="#divisions" className="nav-link" onClick={() => setIsMenuOpen(false)}>Divisions</a>
          <a href="#about-us" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="#process" className="nav-link" onClick={() => setIsMenuOpen(false)}>Process</a>
        </nav>
        <button className="btn btn-primary btn-header" onClick={onOpenContact}>Contact Us</button>
      </div>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          padding: 0.75rem 0;
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0 1rem;
          max-width: 100%;
        }

        .logo {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          flex-shrink: 0;
          white-space: nowrap;
        }

        .menu-toggle {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.75rem;
          z-index: 101;
          margin-left: auto;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .hamburger::before,
        .hamburger::after,
        .hamburger span {
          content: '';
          width: 25px;
          height: 3px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger span {
          width: 20px;
        }

        .hamburger.active::before {
          transform: rotate(45deg) translate(8px, 8px);
          width: 25px;
        }

        .hamburger.active::after {
          transform: rotate(-45deg) translate(7px, -7px);
          width: 25px;
        }

        .hamburger.active span {
          opacity: 0;
        }

        .nav {
          display: none;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease;
          display: block;
          padding: 0.5rem 0;
        }

        .nav-link:hover {
          color: var(--accent-primary);
        }

        .btn-header {
          display: none;
        }

        @media (max-width: 767px) {
          .header {
            padding: 0.5rem 0;
          }

          .header-container {
            padding: 0 1rem;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .nav {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1.5rem;
            gap: 1rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            display: none;
            width: 100vw;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }

          .nav.active {
            display: flex;
          }

          .nav-link {
            padding: 0.75rem 1rem;
            font-size: 1rem;
            border-radius: 6px;
            transition: all 0.3s ease;
          }

          .nav-link:active {
            background: rgba(102, 126, 234, 0.1);
          }

          .btn-header {
            display: block;
            width: 100%;
            padding: 0.75rem 1rem;
            margin-top: 0.5rem;
          }
        }

        @media (min-width: 768px) {
          .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .menu-toggle {
            display: none;
          }

          .nav {
            display: flex;
            flex: 1;
            justify-content: center;
            gap: 2.5rem;
          }

          .btn-header {
            display: block;
            flex-shrink: 0;
          }
        }
      `}</style>
    </header>
  );
}
