import { lazy, Suspense } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const LoadingSpinner = () => (
  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="spinner-container">
      <div className="spinner"></div>
      <p style={{ color: 'white', marginTop: '1rem', fontSize: '0.9rem', fontWeight: '500' }}>Loading 3D Scene...</p>
    </div>
  </div>
);

export default function Hero({ onOpenContact }) {
  return (
    <section className="hero-section">
      <div className="hero-content fade-in-up">
        <h1 className="hero-title">
          Transform Your Business with <span className="text-gradient"> AI Automation</span>
        </h1>
        <p className="hero-subtitle">
          GenXPro delivers intelligent chatbots, workflow automation, and AI solutions that scale with your business        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onOpenContact}>Get Started</button>
          {/* <button className="btn" style={{ background: 'white', border: '1px solid var(--text-tertiary)' }}>Learn More</button> */}
          
        </div>
      </div>
      <div className="hero-spline">
        <Suspense fallback={<LoadingSpinner />}>
          <Spline scene="https://prod.spline.design/oiOVyQkjOrar0fRG/scene.splinecode" />
        </Suspense>
      </div>

      <style>{`
        .hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 4rem 1rem;
          position: relative;
          overflow: hidden;
          gap: 2rem;
        }

        .hero-content {
          z-index: 2;
          text-align: center;
          max-width: 100%;
          width: 100%;
          padding: 0 1rem;
        }

        .hero-title {
          font-size: clamp(1.75rem, 5vw, 3rem);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 3vw, 1.25rem);
          margin-bottom: 2.5rem;
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-spline {
          width: 100%;
          height: 300px;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .spinner-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Hide Spline "Built with Spline" badge */
        iframe[src*="spline"] + div,
        .hero-spline [data-spline-logo],
        .hero-spline img[src*="spline"],
        svg[data-spline-logo],
        .hero-spline > div:last-child {
          display: none !important;
        }

        /* Mobile: Smaller screens */
        @media (min-width: 640px) {
          .hero-section {
            padding: 5rem 2rem;
          }

          .hero-spline {
            height: 350px;
          }

          .hero-content {
            padding: 0;
          }
        }

        /* Tablet: Medium screens */
        @media (min-width: 768px) {
          .hero-section {
            flex-direction: column;
            padding: 6rem 3rem;
          }

          .hero-spline {
            height: 400px;
          }

          .hero-title {
            font-size: clamp(2rem, 5vw, 2.5rem);
          }
        }

        /* Desktop: Large screens */
        @media (min-width: 1024px) {
          .hero-section {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 4rem;
            min-height: 100vh;
            gap: 4rem;
          }

          .hero-content {
            width: 45%;
            text-align: left;
            padding: 2rem 0;
          }

          .hero-content .hero-title {
            text-align: left;
            font-size: 3rem;
          }

          .hero-subtitle {
            margin-left: 0;
            margin-right: 0;
            text-align: left;
            font-size: 1.25rem;
          }

          .hero-actions {
            justify-content: flex-start;
          }

          .hero-spline {
            width: 50%;
            height: 600px;
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
        }

        /* Extra large screens */
        @media (min-width: 1440px) {
          .hero-section {
            padding: 6rem;
          }

          .hero-spline {
            height: 700px;
          }
        }
      `}</style>
    </section>
  );
}
