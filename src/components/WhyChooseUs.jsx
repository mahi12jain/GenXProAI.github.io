

import React, { useState } from 'react';

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const reasons = [
    {
      icon: "🎯",
      // number: "01",
      title: "End-to-End Partnership",
      desc: "From initial AI strategy and planning through full-scale implementation to continuous optimization—we're with you every step.",
      highlight: "Complete ownership of your success",
      metrics: "Strategy → Implementation → Growth"
    },
    {
      icon: "⚡",
      // number: "02",
      title: "Tech-Agnostic Approach",
      desc: "No vendor lock-in. We evaluate and recommend the best AI models, platforms, and tools specifically for your use case.",
      highlight: "Right tool for right job",
      metrics: "GPT-4 • Claude • Gemini • Custom Models"
    },
    {
      icon: "💰",
      // number: "03",
      title: "ROI-Centric Solutions",
      desc: "Every implementation is tracked with clear KPIs. We measure success by your bottom line, not by buzzwords.",
      highlight: "Guaranteed measurable impact",
      metrics: "Average 3-5x ROI in 6 months"
    },
    // {
    //   icon: "🔗",
    //   // number: "04",
    //   title: "Seamless Integrations",
    //   desc: "Our solutions fit perfectly into your existing ecosystem—CRM, ERP, marketing stacks, and custom systems.",
    //   highlight: "Zero disruption to operations",
    //   metrics: "150+ pre-built integrations"
    // },
    // {
    //   icon: "🏆",
    //   // number: "05",
    //   title: "Industry Expertise",  
    //   desc: "20+ years combined experience across e-commerce, healthcare, finance, real estate, SaaS, manufacturing, and more.",
    //   highlight: "We speak your language",
    //   metrics: "50+ successful implementations"
    // },
    {
      icon: "📈",
      // number: "06",
      title: "Scale Without Hiring",
      desc: "Multiply your team's output 5-10x through automation. Grow revenue while keeping headcount flat or reducing costs.",
      highlight: "More work, same team",
      metrics: "Avg. 60% cost reduction"
    },
    {
      icon: "🔄",
      // number: "07",
      title: "Always-On Automation",
      desc: "24/7 customer support, lead generation, operations, and insights. Your business never sleeps while you do.",
      highlight: "Continuous value creation",
      metrics: "0 downtime • 99.9% uptime"
    }
  ];

  return (
    <section id="why-us" className="why-choose-us-section">
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-badge">🌟 Why Businesses Trust Us</div>
          <h2>
            Why <span className="text-gradient">Flowbotic AI</span> is Your Ideal Partner
          </h2>
          <p className="header-subtitle">
            Not just another AI vendor. We're committed to real, measurable results for your business.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`reason-card ${hoveredIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Number Badge */}
              <div className="card-number">{reason.number}</div>

              {/* Icon */}
              <div className="card-icon">{reason.icon}</div>

              {/* Content */}
              <div className="card-content">
                <h3>{reason.title}</h3>
                <p className="card-description">{reason.desc}</p>

                {/* Highlight */}
                <div className="highlight-box">
                  <span className="highlight-dot"></span>
                  <span className="highlight-text">{reason.highlight}</span>
                </div>

                {/* Metrics */}
                <div className="metrics-tag">{reason.metrics}</div>
              </div>

              {/* Hover Accent */}
              <div className="card-accent"></div>
            </div>
          ))}
        </div>

        {/* CTA Banner
        <div className="cta-banner">
          <div className="banner-content">
            <h3>See These Benefits in Action</h3>
            <p>Watch how we've transformed businesses like yours</p>
          </div>
          <div className="banner-buttons">
            <button className="btn btn-primary">📊 View Case Studies</button>
            <button className="btn btn-secondary">💬 Talk to Our Experts</button>
          </div>
        </div> */}
      </div>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .why-choose-us-section {
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #fafbff 0%, #f5f7ff 50%, #f0f4ff 100%);
        }

        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          animation: float 25s infinite ease-in-out;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          top: -200px;
          left: -200px;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          bottom: -150px;
          right: -150px;
          animation-delay: -8s;
        }

        .orb-3 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #06b6d4, #10b981);
          top: 50%;
          right: 5%;
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

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          animation: slideUp 0.8s ease;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .header-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(99, 102, 241, 0.1));
          border: 1.5px solid rgba(124, 58, 237, 0.2);
          color: #7c3aed;
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .section-header h2 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          color: #0f172a;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .text-gradient {
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-subtitle {
          font-size: 1.2rem;
          color: #475569;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 500;
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .reason-card {
          position: relative;
          background: white;
          border: 1.5px solid rgba(124, 58, 237, 0.1);
          border-radius: 24px;
          padding: 2.5rem 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
        }

        .reason-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.12);
          transform: translateY(-8px);
        }

        .reason-card.active {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.02), rgba(99, 102, 241, 0.02));
        }

        .card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #7c3aed, #6366f1);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .reason-card:hover .card-accent {
          transform: scaleX(1);
        }

        .card-number {
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.15;
          position: absolute;
          top: -20px;
          right: 20px;
          font-family: 'Courier New', monospace;
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: inline-block;
          animation: float 3s ease-in-out infinite;
        }

        .reason-card:hover .card-icon {
          animation: bounce 0.6s ease;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .card-content h3 {
          font-size: 1.35rem;
          color: #0f172a;
          margin-bottom: 0.8rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .card-description {
          font-size: 0.98rem;
          color: #475569;
          line-height: 1.75;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .highlight-box {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(74, 222, 128, 0.08));
          border: 1px solid rgba(34, 197, 94, 0.15);
          padding: 1rem 1.2rem;
          border-radius: 12px;
          margin-bottom: 1.2rem;
          transition: all 0.3s;
        }

        .reason-card:hover .highlight-box {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.12), rgba(74, 222, 128, 0.12));
          border-color: rgba(34, 197, 94, 0.3);
        }

        .highlight-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .highlight-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: #166534;
        }

        .metrics-tag {
          display: inline-block;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(99, 102, 241, 0.1));
          border: 1px solid rgba(124, 58, 237, 0.15);
          color: #7c3aed;
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s;
        }

        .reason-card:hover .metrics-tag {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(99, 102, 241, 0.15));
          border-color: rgba(124, 58, 237, 0.3);
        }

        .cta-banner {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(99, 102, 241, 0.1));
          border: 2px solid rgba(124, 58, 237, 0.2);
          border-radius: 24px;
          padding: 3.5rem 3rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.05) 0%, transparent 50%);
          backdrop-filter: blur(20px);
        }

        .banner-content h3 {
          font-size: 1.8rem;
          color: #0f172a;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .banner-content p {
          font-size: 1rem;
          color: #475569;
          font-weight: 500;
        }

        .banner-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 1.8rem;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
        }

        .btn-secondary {
          background: white;
          color: #7c3aed;
          border: 2px solid #7c3aed;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.15);
        }

        .btn-secondary:hover {
          background: #f8f4ff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.25);
        }

        @media (max-width: 1024px) {
          .reasons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .why-choose-us-section {
            padding: 4rem 1.5rem;
          }

          .section-header h2 {
            font-size: 2.3rem;
          }

          .reasons-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .cta-banner {
            flex-direction: column;
            text-align: center;
            padding: 2.5rem 1.5rem;
          }

          .banner-buttons {
            justify-content: center;
            width: 100%;
          }

          .btn {
            flex: 1;
            min-width: 200px;
          }

          .card-number {
            font-size: 2.5rem;
            right: 10px;
            top: -10px;
          }
        }

        @media (max-width: 480px) {
          .section-header h2 {
            font-size: 1.8rem;
          }

          .reason-card {
            padding: 2rem 1.5rem;
          }

          .btn {
            padding: 0.85rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
