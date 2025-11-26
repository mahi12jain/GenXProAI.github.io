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
          Intelligent Automation for the <span className="text-gradient">Future of Business</span>
        </h1>
        <p className="hero-subtitle">
          GenX pro AI helps businesses harness the power of artificial intelligence to accelerate growth, streamline operations, and deliver superior customer experiences.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onOpenContact}>Get Started</button>
          <button className="btn" style={{ background: 'white', border: '1px solid var(--text-tertiary)' }}>Learn More</button>
          
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
          flex-direction: column-reverse;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 6rem 2rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin-top: 2rem;
        }

        .hero-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-actions{
          display: flex;
          gap: 8px;
        }

        .hero-spline {
          width: 100%;
          height: 400px;
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

        @media (min-width: 1024px) {
          .hero-section {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
            padding: 0 4rem;
          }

          .hero-content {
            width: 50%;
            text-align: left;
            margin-top: 0;
          }

          .hero-subtitle {
            margin-left: 0;
            margin-right: 0;
          }

          .hero-spline {
            width: 50%;
            height: 600px;
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  );
}
