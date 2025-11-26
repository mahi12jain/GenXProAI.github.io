export default function CompanyOverview() {
    return (
        <section id="overview" className="section">
            <div className="container">
                <div className="glass-card fade-in-up">
                    <h2 className="text-center">Company <span className="text-gradient">Overview</span></h2>
                    <p className="overview-text">
                        GenX pro AI is a next-generation AI solutions and automation agency that helps businesses harness the power of artificial intelligence to accelerate growth, streamline operations, and deliver superior customer experiences.
                    </p>
                    <p className="overview-text">
                        We combine strategic consulting, cutting-edge AI tools, and custom integrations to design end-to-end solutions that drive measurable business impact.
                    </p>
                </div>
            </div>
            <style>{`
        .overview-text {
          font-size: 1.125rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 1.5rem;
          color: var(--text-secondary);
        }
      `}</style>
        </section>
    );
}
