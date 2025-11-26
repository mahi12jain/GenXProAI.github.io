import React from 'react';

export default function AboutUs() {
  const stats = [
    { number: "50+", label: "AI Projects Delivered" },
    { number: "30+", label: "Enterprise Clients" },
    { number: "$10M+", label: "ROI Generated" },
    { number: "5 yrs", label: "Industry Experience" }
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

//   const team = [
//     {
//       role: "Founder & AI Strategist",
//       experience: "15+ years in AI/ML implementation",
//       focus: "Leading transformations for Fortune 500 companies"
//     },
//     {
//       role: "Head of Engineering",
//       experience: "12+ years full-stack development",
//       focus: "Building scalable, production-grade AI systems"
//     },
//     {
//       role: "Customer Success Lead",
//       experience: "10+ years B2B SaaS",
//       focus: "Ensuring every client achieves their AI goals"
//     },
//     {
//       role: "Data Science Director",
//       experience: "8+ years machine learning",
//       focus: "Custom AI models and predictive analytics"
//     }
//   ];

  return (
    <section className="about-us-section">
      <div className="animated-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>

      <div className="container">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="hero-content">
            <h1>About GenX pro AI</h1>
            <p className="hero-subtitle">
              We're not just another AI consultancy. We're builders, problem-solvers, and your transformation partner.
            </p>
            <div className="hero-description">
              <p>
                Founded with a simple mission: make enterprise-grade AI accessible and practical for businesses of all sizes. 
                We believe AI should work for you, not the other way around.
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
            <h2>Our Story</h2>
            <p>
              GenX pro AI was born from frustration. We watched brilliant businesses struggle with AI adoption—not because 
              the technology wasn't powerful, but because it wasn't accessible or practical for real-world operations.
            </p>
            <p>
              Our founding team spent years implementing AI in enterprise environments. We saw what worked and what didn't. 
              We learned that successful AI isn't about the fanciest models—it's about solving real business problems with 
              practical, scalable solutions.
            </p>
            <p>
              That's why we built GenX pro AI. To bridge the gap between cutting-edge AI and practical business needs. 
              To transform how companies operate. To make AI a competitive advantage, not a complicated experiment.
            </p>
          </div>
          <div className="story-highlight">
            <div className="highlight-box">
              <div className="highlight-icon">💼</div>
              <h3>Our Approach</h3>
              <p>Audit → Strategy → Implementation → Optimization. Simple. Proven. Effective.</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2>Our Core Values</h2>
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

        {/* Team Section */}
        {/* <div className="team-section">
          <h2>Leadership Team</h2>
          <p className="team-intro">Built by AI experts with decades of combined experience.</p>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{index + 1}</div>
                <h3>{member.role}</h3>
                <p className="team-experience">{member.experience}</p>
                <p className="team-focus">{member.focus}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        {/* <div className="cta-section">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how AI can accelerate your growth.</p>
          <button className="cta-button">Schedule a Consultation</button>
        </div> */}
      </div>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .about-us-section {
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #fafbff 0%, #f5f7ff 50%, #f0f4ff 100%);
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

        .about-hero h1 {
          font-size: 3.5rem;
          color: #0f172a;
          margin-bottom: 1.5rem;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: #475569;
          margin-bottom: 2rem;
          font-weight: 500;
          line-height: 1.6;
        }

        .hero-description {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-description p {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.8;
          font-weight: 500;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
          padding: 3rem;
          background: white;
          border-radius: 24px;
          border: 1px solid rgba(124, 58, 237, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .stat-card {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
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
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 6rem;
          padding: 3rem;
          background: white;
          border-radius: 24px;
          border: 1px solid rgba(124, 58, 237, 0.1);
        }

        .story-section h2 {
          font-size: 2.5rem;
          color: #0f172a;
          margin-bottom: 1.5rem;
          font-weight: 700;
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
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(99, 102, 241, 0.1));
          border: 2px solid rgba(124, 58, 237, 0.2);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
        }

        .highlight-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .highlight-box h3 {
          font-size: 1.5rem;
          color: #0f172a;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .highlight-box p {
          font-size: 1rem;
          color: #475569;
          margin-bottom: 0;
          font-weight: 500;
        }

        /* Values Section */
        .values-section {
          margin-bottom: 6rem;
        }

        .values-section h2 {
          font-size: 2.5rem;
          color: #0f172a;
          margin-bottom: 1rem;
          font-weight: 700;
          text-align: center;
        }

        .values-intro {
          font-size: 1.1rem;
          color: #475569;
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 500;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .value-card {
          background: white;
          border: 1.5px solid rgba(124, 58, 237, 0.1);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-8px);
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1);
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .value-card h3 {
          font-size: 1.3rem;
          color: #0f172a;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .value-card p {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.7;
          font-weight: 500;
        }

        /* Team Section */
        .team-section {
          margin-bottom: 6rem;
        }

        .team-section h2 {
          font-size: 2.5rem;
          color: #0f172a;
          margin-bottom: 1rem;
          font-weight: 700;
          text-align: center;
        }

        .team-intro {
          font-size: 1.1rem;
          color: #475569;
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 500;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .team-card {
          background: white;
          border: 1.5px solid rgba(124, 58, 237, 0.1);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-8px);
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1);
        }

        .team-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
        }

        .team-card h3 {
          font-size: 1.2rem;
          color: #0f172a;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .team-experience {
          font-size: 0.9rem;
          color: #7c3aed;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .team-focus {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          font-weight: 500;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(99, 102, 241, 0.1));
          border: 2px solid rgba(124, 58, 237, 0.2);
          border-radius: 24px;
          padding: 4rem 3rem;
          text-align: center;
        }

        .cta-section h2 {
          font-size: 2.2rem;
          color: #0f172a;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .cta-section p {
          font-size: 1.1rem;
          color: #475569;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .cta-button {
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.25);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(124, 58, 237, 0.35);
        }

        @media (max-width: 768px) {
          .about-us-section {
            padding: 4rem 1.5rem;
          }

          .about-hero h1 {
            font-size: 2.3rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            padding: 2rem;
            margin-bottom: 4rem;
          }

          .story-section {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem;
            margin-bottom: 4rem;
          }

          .story-section h2 {
            font-size: 2rem;
          }

          .values-section h2,
          .team-section h2 {
            font-size: 2rem;
          }

          .cta-section {
            padding: 2.5rem 1.5rem;
          }

          .cta-section h2 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .about-hero h1 {
            font-size: 1.8rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
