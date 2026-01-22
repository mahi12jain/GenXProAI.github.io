import React from 'react';

export default function AboutUs() {
  const stats = [
    { number: "15+", label: "AI Projects Completed" },
    { number: "5+", label: "Active Projects" },
    { number: "100%", label: "Dedication to Quality" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Results-Driven",
      description: "We measure success by your business outcomes, not by project completion."
    },
    {
      icon: "🚀",
      title: "Innovation First",
      description: "Constantly exploring cutting-edge AI technologies to give you competitive advantage."
    },
    {
      icon: "🤝",
      title: "Partnership Mindset",
      description: "Your success is our success. We're invested in your long-term growth."
    },
    {
      icon: "💡",
      title: "Transparency",
      description: "Clear communication, no hidden costs, and honest recommendations always."
    }
  ];

  return (
    <section id="overview" className="about-us-section">
      <div className="animated-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>

      <div className="container">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="hero-badge">🚀 AI Consulting | Chatbot Development | Machine Learning Services</div>
          <div className="hero-content">
            <h1>AI Solutions & <span className="gradient-text">Chatbot Development Services</span></h1>
            <p className="hero-subtitle">
              Leading AI consulting company specializing in custom chatbot development, machine learning solutions, and intelligent automation for businesses worldwide.
            </p>
            <div className="hero-description">
              <p>
                GenX Pro AI delivers enterprise AI services including conversational AI chatbots, natural language processing (NLP), computer vision, and predictive analytics. Transform your business with our cutting-edge artificial intelligence solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="story-section">
          <div className="story-content">
            <h2>AI Consulting & <span className="gradient-text">Chatbot Experts</span></h2>
            <p>
              GenX Pro AI specializes in artificial intelligence consulting, custom chatbot development, and intelligent automation services. We help businesses deploy AI-powered chatbots, implement machine learning models, and automate workflows using conversational AI technology.
            </p>
            <p>
              Our AI solutions include: customer service chatbots, voice assistants, AI-powered analytics, computer vision systems, and natural language processing (NLP) applications. From chatbot design to full-scale AI implementation, we deliver measurable ROI.
            </p>
            <p>
              Whether you need a WhatsApp chatbot, website chatbot, or enterprise AI system—we build custom AI solutions that scale. Our expertise in GPT-4, Claude, and open-source LLMs ensures cutting-edge chatbot development for customer support, sales automation, and business intelligence.
            </p>
          </div>
          <div className="story-highlight">
            <div className="highlight-box">
              <div className="highlight-icon">🤖</div>
              <h3>AI Services We Provide</h3>
              <p>Chatbot Development | AI Consulting | Machine Learning | Automation</p>
              <div className="approach-features">
                <div className="feature">
                  <span className="check">✓</span>
                  <span>Custom AI Chatbots</span>
                </div>
                <div className="feature">
                  <span className="check">✓</span>
                  <span>NLP & Voice AI</span>
                </div>
                <div className="feature">
                  <span className="check">✓</span>
                  <span>24/7 AI Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2>Our Core <span className="gradient-text">Values</span></h2>
          <p className="values-intro">These aren't just words on a wall. They guide every decision we make.</p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="why-choose-section">
          <h2>Why Choose <span className="gradient-text">GenX Pro AI</span>?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>Startup Agility</h3>
              <p>Fast decisions, quick pivots, and personalized attention. No corporate bureaucracy holding us back.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💎</div>
              <h3>Enterprise Quality</h3>
              <p>Startup spirit with enterprise-grade solutions. We deliver production-ready AI that scales.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎓</div>
              <h3>Hands-On Training</h3>
              <p>We don't just build and leave. We train your team to own and optimize the AI solutions we create.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>Startup-Friendly Pricing</h3>
              <p>Flexible pricing models designed for growing businesses. ROI-focused, not just billable hours.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .about-us-section {
          padding: 5rem 1rem 4rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #fafbff 0%, #f5f7ff 50%, #f0f4ff 100%);
        }

        @media (min-width: 768px) {
          .about-us-section {
            padding: 8rem 2rem 6rem;
          }
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .gradient-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          animation: float 25s infinite ease-in-out;
        }

        .blob-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          top: -200px;
          left: -200px;
        }

        .blob-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          bottom: 0;
          right: -150px;
          animation-delay: -8s;
        }

        .blob-3 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #06b6d4, #10b981);
          top: 50%;
          left: 5%;
          animation-delay: -16s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 50px) scale(1.1); }
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .gradient-text {
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Hero Section */
        .about-hero {
          text-align: center;
          margin-bottom: 5rem;
          animation: slideUp 0.8s ease;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-badge {
          display: inline-block;
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
        }

        .about-hero h1 {
          font-size: 3.8rem;
          color: #0f172a;
          margin-bottom: 1.5rem;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -1.5px;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: #475569;
          margin-bottom: 2rem;
          font-weight: 500;
          line-height: 1.6;
        }

        .hero-description {
          max-width: 850px;
          margin: 0 auto;
        }

        .hero-description p {
          font-size: 1.15rem;
          color: #64748b;
          line-height: 1.8;
          font-weight: 500;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
          padding: 2rem 1.5rem;
          background: white;
          border-radius: 20px;
          border: 1px solid rgba(124, 58, 237, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }

        @media (min-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            padding: 3rem;
            border-radius: 24px;
            margin-bottom: 6rem;
          }
        }

        .stat-card {
          text-align: center;
          padding: 1rem;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          color: #475569;
          font-weight: 600;
        }

        /* Story Section */
        .story-section {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;
          margin-bottom: 4rem;
          padding: 2rem;
          background: white;
          border-radius: 20px;
          border: 1px solid rgba(124, 58, 237, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }

        @media (min-width: 1024px) {
          .story-section {
            grid-template-columns: 1.3fr 1fr;
            gap: 3rem;
            padding: 3.5rem;
            border-radius: 24px;
            margin-bottom: 6rem;
          }
        }

        .story-section h2 {
          font-size: 2.8rem;
          color: #0f172a;
          margin-bottom: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .story-section p {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .story-section p:last-child {
          margin-bottom: 0;
        }

        .highlight-box {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(99, 102, 241, 0.08));
          border: 2px solid rgba(124, 58, 237, 0.2);
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          position: sticky;
          top: 2rem;
        }

        .highlight-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .highlight-box h3 {
          font-size: 1.6rem;
          color: #0f172a;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .highlight-box p {
          font-size: 1.05rem;
          color: #475569;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .approach-features {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-top: 1.5rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.95rem;
          color: #475569;
          font-weight: 500;
        }

        .check {
          color: #22c55e;
          font-weight: 700;
          font-size: 1.2rem;
        }

        /* Values Section */
        .values-section {
          margin-bottom: 6rem;
        }

        .values-section h2 {
          font-size: 2.8rem;
          color: #0f172a;
          margin-bottom: 1rem;
          font-weight: 700;
          text-align: center;
          letter-spacing: -0.5px;
        }

        .values-intro {
          font-size: 1.15rem;
          color: #475569;
          text-align: center;
          margin-bottom: 3.5rem;
          font-weight: 500;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .values-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .value-card {
          background: white;
          border: 1.5px solid rgba(124, 58, 237, 0.1);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.4s ease;
        }

        .value-card:hover {
          transform: translateY(-8px);
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.15);
        }

        .value-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .value-card h3 {
          font-size: 1.4rem;
          color: #0f172a;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .value-card p {
          font-size: 1rem;
          color: #475569;
          line-height: 1.7;
          font-weight: 500;
        }

        /* Why Choose Section */
        .why-choose-section {
          margin-bottom: 4rem;
        }

        .why-choose-section h2 {
          font-size: 2.8rem;
          color: #0f172a;
          margin-bottom: 3rem;
          font-weight: 700;
          text-align: center;
          letter-spacing: -0.5px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .why-card {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(99, 102, 241, 0.05));
          border: 1.5px solid rgba(124, 58, 237, 0.15);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.4s ease;
        }

        .why-card:hover {
          transform: translateY(-8px);
          background: white;
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.15);
        }

        .why-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .why-card h3 {
          font-size: 1.4rem;
          color: #0f172a;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .why-card p {
          font-size: 1rem;
          color: #475569;
          line-height: 1.7;
          font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .story-section {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .highlight-box {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .about-us-section {
            padding: 5rem 1rem 3rem;
          }

          .about-hero {
            margin-bottom: 3rem;
          }

          .about-hero h1 {
            font-size: 2rem;
            letter-spacing: -1px;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-description p {
            font-size: 1rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            padding: 2rem 1.5rem;
            margin-bottom: 3rem;
          }

          .stat-number {
            font-size: 2.2rem;
          }

          .stat-label {
            font-size: 0.875rem;
          }

          .story-section {
            padding: 2rem 1.5rem;
            margin-bottom: 3rem;
          }

          .story-section h2,
          .values-section h2,
          .why-choose-section h2 {
            font-size: 1.75rem;
          }

          .values-section,
          .why-choose-section {
            margin-bottom: 3rem;
          }

          .values-grid,
          .why-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .highlight-box {
            padding: 2rem 1.5rem;
          }

          .value-card,
          .why-card {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .about-hero h1 {
            font-size: 1.75rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1.5rem 1rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .story-section h2,
          .values-section h2,
          .why-choose-section h2 {
            font-size: 1.5rem;
          }

          .value-icon,
          .why-icon {
            font-size: 2.5rem;
          }

          .hero-badge {
            font-size: 0.813rem;
            padding: 0.625rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
