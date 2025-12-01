export default function Hero({ onOpenContact }) {
  return (
    <section className="hero-section">
      <div className="hero-content fade-in-up">
        <h1 className="hero-title">
          Transform Your Business with <span className="text-gradient"> AI Automation</span>
        </h1>
        <p className="hero-subtitle">
          GenXPro delivers intelligent chatbots, workflow automation, and AI solutions that scale with your business
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onOpenContact}>Get Started</button>
        </div>
      </div>

      <style>{`
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          z-index: 2;
          text-align: center;
          max-width: 900px;
          width: 100%;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          margin-bottom: 3rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Mobile: Smaller screens */
        @media (min-width: 640px) {
          .hero-section {
            padding: 6rem 3rem;
          }

          .hero-content {
            max-width: 700px;
          }
        }

        /* Tablet: Medium screens */
        @media (min-width: 768px) {
          .hero-section {
            padding: 8rem 4rem;
          }

          .hero-content {
            max-width: 800px;
          }
        }

        /* Desktop: Large screens */
        @media (min-width: 1024px) {
          .hero-section {
            padding: 4rem;
          }

          .hero-content {
            max-width: 900px;
          }
        }

        /* Extra large screens */
        @media (min-width: 1440px) {
          .hero-section {
            padding: 6rem;
          }

          .hero-content {
            max-width: 1000px;
          }
        }
      `}</style>
    </section >
  );
}
