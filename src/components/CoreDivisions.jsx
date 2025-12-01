
import React, { useState } from 'react';
import ConsultationModal from './consulationModal';

export default function CoreDivisions() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const divisions = [
    {
      icon: "🤖",
      title: "AI Chatbot Solutions",
      tagline: "Your 24/7 Digital Employee",
      shortDesc: "Never miss a customer query. Our AI chatbots handle thousands of conversations, answer instantly, and convert visitors into customers.",
      impact: "Save 40+ hours/week",
      stats: { number: "10K+", label: "Messages Daily" },
      fullDetails: {
        description: "Imagine having a tireless employee who never sleeps, never takes breaks, and can talk to thousands of customers at once. That's what our AI chatbots do for you.",
        howItWorks: [
          "We train AI on your business - products, services, FAQs",
          "Deploy on WhatsApp, website, Instagram in 48 hours",
          "Chatbot learns from every conversation",
          "Automatically captures leads and schedules calls"
        ],
        benefits: [
          "Answer customer questions 24/7 in any language",
          "Handle 1000+ chats simultaneously",
          "Reduce support costs by 70%",
          "Increase conversions by 3x",
          "Free up your team for complex tasks"
        ],
        realExample: "A clothing store used our chatbot and went from answering 50 queries/day to handling 500+ automatically, increasing sales by 40%."
      }
    },
    {
      icon: "⚙️",
      title: "Business Process Automation",
      tagline: "Stop Doing Repetitive Work",
      shortDesc: "Automate boring tasks like data entry, email replies, and report generation. Get hours back in your day.",
      impact: "60% cost reduction",
      stats: { number: "500+", label: "Hours Saved" },
      fullDetails: {
        description: "Think about all the repetitive tasks your team does daily - copying data, sending follow-up emails, updating spreadsheets. What if a robot did all that?",
        howItWorks: [
          "We map out your current manual processes",
          "Identify what can be automated (usually 70%+)",
          "Build custom automation workflows",
          "Train your team on the new system"
        ],
        benefits: [
          "Auto-update Excel reports every morning",
          "Send personalized emails to 1000s instantly",
          "Extract data from invoices/documents automatically",
          "Schedule social media posts for weeks ahead",
          "Eliminate human errors completely"
        ],
        realExample: "An accounting firm automated invoice processing, cutting time from 3 hours to 10 minutes per batch - saving 40 hours weekly."
      }
    },
    {
      icon: "🎯",
      title: "AI Strategy & Implementation",
      tagline: "Your AI Transformation Partner",
      shortDesc: "Not sure where to start? We analyze your business, find opportunities, and implement AI that actually works.",
      impact: "3x faster results",
      stats: { number: "95%", label: "Success Rate" },
      fullDetails: {
        description: "Most businesses know they need AI but don't know where to start. We become your AI department - from planning to execution.",
        howItWorks: [
          "Free AI Audit: We analyze your business operations",
          "Opportunity Report: Show exactly what can be automated",
          "Roadmap: Step-by-step plan for 3, 6, 12 months",
          "Implementation: We build and deploy everything",
          "Training: Make your team AI-confident"
        ],
        benefits: [
          "No guesswork - clear roadmap from day one",
          "Custom AI models built for your specific needs",
          "Works with your existing software (CRM, ERP, etc.)",
          "Predictive analytics to forecast trends",
          "Computer vision for quality control/monitoring"
        ],
        realExample: "A manufacturing company used our AI audit to identify 12 automation opportunities, implemented 8 in 6 months, saving $200K annually."
      }
    },
    {
      icon: "🎨",
      title: "Creative & Marketing AI",
      tagline: "Create Content at Lightning Speed",
      shortDesc: "Generate blog posts, social media content, images, and videos in minutes. Scale your marketing without hiring.",
      impact: "10x content output",
      stats: { number: "1000+", label: "Posts Created" },
      fullDetails: {
        description: "Creating content is time-consuming. What if you could generate a week's worth of social posts in 10 minutes? Or write a blog post in 5 minutes?",
        howItWorks: [
          "Connect your brand guidelines and style",
          "AI learns your brand voice and tone",
          "Generate content ideas automatically",
          "Create text, images, videos with one click",
          "Schedule and publish automatically"
        ],
        benefits: [
          "Write blog posts in 5 minutes vs 3 hours",
          "Create custom images without designers",
          "Generate videos without filming",
          "A/B test 10 ad variations instantly",
          "Optimize content for SEO automatically"
        ],
        realExample: "A digital agency went from posting 3x/week to daily posts across 5 platforms, growing client reach by 400% with same team size."
      }
    },
    {
      icon: "🎓",
      title: "Training & Support",
      tagline: "Master AI, Don't Fear It",
      shortDesc: "We teach your team to use AI confidently with hands-on workshops and ongoing support.",
      impact: "Team AI-ready in 2 weeks",
      stats: { number: "100+", label: "Teams Trained" },
      fullDetails: {
        description: "Technology is useless if your team doesn't know how to use it. We ensure everyone becomes comfortable and confident with AI tools.",
        howItWorks: [
          "Initial assessment of team's current AI knowledge",
          "Customized training program for your needs",
          "Interactive workshops (not boring lectures)",
          "Hands-on practice with real scenarios",
          "Ongoing support via chat/calls/email"
        ],
        benefits: [
          "Team learns AI basics in 2-3 days",
          "Custom playbooks for your specific tools",
          "1-on-1 coaching for key team members",
          "Troubleshooting help whenever needed",
          "Regular updates on new AI capabilities"
        ],
        realExample: "A 50-person sales team went from AI-confused to AI-powered in 2 weeks, with 100% adoption rate and 35% productivity increase."
      }
    }
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="divisions" className="divisions-section">
      <div className="bg-gradient"></div>
      <div className="floating-blob blob-1"></div>
      <div className="floating-blob blob-2"></div>
      <div className="floating-blob blob-3"></div>

      <div className="container">
        <div className="section-header">
          <div className="badge">🚀 Our Expertise</div>
          <h2>How We Help Your <span className="gradient-text">Business Grow</span></h2>
          <p className="subtitle">
            We don't just talk about AI – we make it work for real businesses like yours.
          </p>
        </div>

        <div className={`divisions-grid ${expandedCard !== null ? 'has-expanded' : ''}`}>
          {divisions.map((division, index) => (
            <div
              key={index}
              className={`division-card ${expandedCard === index ? 'expanded' : ''} ${expandedCard !== null && expandedCard !== index ? 'dimmed' : ''}`}
            >
              {/* Card Content */}
              <div className="card-main">
                <div className="card-header">
                  <div className="icon-wrapper">{division.icon}</div>
                  <div className="header-content">
                    <h3>{division.title}</h3>
                    <p className="tagline">{division.tagline}</p>
                  </div>
                </div>

                <p className="short-description">{division.shortDesc}</p>

                <div className="stats-impact">
                  <div className="impact-badge">
                    <span className="impact-icon">⚡</span>
                    <span>{division.impact}</span>
                  </div>
                  <div className="stats-badge">
                    <strong>{division.stats.number}</strong>
                    <span>{division.stats.label}</span>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCard === index && (
                <div className="expanded-wrapper">
                  <div className="expanded-content">
                    <div className="content-section">
                      <h4>💡 What This Means for You</h4>
                      <p>{division.fullDetails.description}</p>
                    </div>

                    <div className="content-section">
                      <h4>🔧 How It Works</h4>
                      <ol className="steps-list">
                        {division.fullDetails.howItWorks.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    <div className="content-section">
                      <h4>✨ Key Benefits</h4>
                      <ul className="benefits-list">
                        {division.fullDetails.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="example-box">
                      <div className="example-icon">📊</div>
                      <div>
                        <strong>Real-World Example</strong>
                        <p>{division.fullDetails.realExample}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Button */}
              <button 
                className="toggle-btn"
                onClick={() => toggleCard(index)}
              >
                <span>{expandedCard === index ? 'Show Less' : 'Learn More'}</span>
                <span className="arrow">{expandedCard === index ? '↑' : '→'}</span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="process-cta">
            <div className="cta-content">
                <div className="cta-badge">Limited Availability</div>
                <p className="cta-text">Ready to Transform Your Business Vision into Reality?</p>
                <p className="cta-subtext">Join industry leaders who trust us to deliver exceptional results</p>
                <button className="cta-button" onClick={() => setIsModalOpen(true)}>
                    Schedule Strategic Consultation
                    <span className="button-arrow">→</span>
                </button>
                <div className="cta-features">
                    <div className="feature-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>No obligations</span>
                    </div>
                    <div className="feature-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Confidential discussion</span>
                    </div>
                    <div className="feature-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Actionable insights</span>
                    </div>
                </div>
            </div>
        </div> */}

        {/* {isModalOpen && <ConsultationModal onClose={() => setIsModalOpen(false)} />} */}

      </div>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .divisions-section {
          padding: 3rem 1rem;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        @media (min-width: 768px) {
          .divisions-section {
            padding: 5rem 2rem;
          }
        }

        .bg-gradient {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #f8faff 0%, #f0f4ff 50%, #e8f0fe 100%);
          z-index: -2;
        }

        .floating-blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          z-index: -1;
          animation: float 20s infinite ease-in-out;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          top: -200px;
          left: -200px;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          top: 40%;
          right: -150px;
          animation-delay: -7s;
        }

        .blob-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          bottom: -150px;
          left: 20%;
          animation-delay: -14s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
          animation: slideDown 0.6s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .section-header h2 {
          font-size: 3.5rem;
          margin: 0 0 1.5rem 0;
          color: #0f172a;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #475569;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 500;
        }

        .divisions-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 4rem;
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .divisions-grid {
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .divisions-grid {
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          }
        }

        .divisions-grid.has-expanded {
          grid-template-columns: 1fr;
        }

        .division-card {
          background: white;
          border: 1px solid rgba(124, 58, 237, 0.08);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          position: relative;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 640px) {
          .division-card {
            padding: 2rem;
            border-radius: 20px;
          }
        }

        .division-card:hover:not(.dimmed) {
          border-color: rgba(124, 58, 237, 0.2);
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.08);
          transform: translateY(-4px);
        }

        .division-card.expanded {
          box-shadow: 0 12px 48px rgba(124, 58, 237, 0.15);
          border-color: rgba(124, 58, 237, 0.3);
        }

        .division-card.dimmed {
          opacity: 0.5;
          pointer-events: none;
        }

        .card-main {
          flex: 1;
        }

        .card-header {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 1.5rem;
          align-items: flex-start;
        }

        .icon-wrapper {
          font-size: 2.8rem;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(99, 102, 241, 0.08));
          border-radius: 16px;
          flex-shrink: 0;
          border: 2px solid rgba(124, 58, 237, 0.1);
        }

        .header-content h3 {
          margin: 0 0 0.4rem 0;
          color: #0f172a;
          font-size: 1.35rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .tagline {
          color: #7c3aed;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .short-description {
          color: #475569;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 0.97rem;
          font-weight: 500;
        }

        .stats-impact {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .impact-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(74, 222, 128, 0.08));
          padding: 0.7rem 1.2rem;
          border-radius: 25px;
          border: 1.5px solid rgba(34, 197, 94, 0.2);
          font-size: 0.9rem;
          color: #166534;
          font-weight: 600;
          flex: 1;
          transition: all 0.3s;
        }

        .impact-icon {
          font-size: 1.2rem;
        }

        .stats-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(99, 102, 241, 0.1));
          padding: 0.7rem 1.2rem;
          border-radius: 12px;
          border: 1px solid rgba(124, 58, 237, 0.15);
          min-width: 110px;
        }

        .stats-badge strong {
          font-size: 1.4rem;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.2rem;
        }

        .stats-badge span {
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 500;
        }

        .expanded-wrapper {
          animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expanded-content {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid rgba(124, 58, 237, 0.1);
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .expanded-content {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }

        .content-section {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.04), rgba(99, 102, 241, 0.04));
          padding: 1.5rem;
          border-radius: 14px;
          border: 1px solid rgba(124, 58, 237, 0.08);
          transition: all 0.3s;
        }

        .content-section:hover {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(99, 102, 241, 0.08));
          border-color: rgba(124, 58, 237, 0.15);
        }

        .content-section h4 {
          color: #0f172a;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .content-section p {
          color: #475569;
          line-height: 1.75;
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        .steps-list {
          list-style: none;
          counter-reset: step;
        }

        .steps-list li {
          color: #475569;
          padding-left: 2.5rem;
          margin-bottom: 1rem;
          position: relative;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .steps-list li:last-child {
          margin-bottom: 0;
        }

        .steps-list li::before {
          counter-increment: step;
          content: counter(step);
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          color: white;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.2);
        }

        .benefits-list {
          list-style: none;
        }

        .benefits-list li {
          color: #475569;
          padding-left: 2rem;
          margin-bottom: 0.8rem;
          position: relative;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .benefits-list li:last-child {
          margin-bottom: 0;
        }

        .benefits-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #22c55e;
          font-weight: 800;
          font-size: 1.1rem;
        }

        .example-box {
          grid-column: 1 / -1;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(124, 58, 237, 0.08));
          border: 1.5px solid rgba(124, 58, 237, 0.15);
          border-radius: 14px;
          padding: 1.8rem;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .example-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
        }

        .example-box strong {
          color: #0f172a;
          display: block;
          margin-bottom: 0.6rem;
          font-size: 1rem;
        }

        .example-box p {
          color: #475569;
          line-height: 1.75;
          margin: 0;
          font-size: 0.95rem;
        }

        .toggle-btn {
          align-self: flex-start;
          margin-top: 2rem;
          padding: 0.9rem 1.8rem;
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.2);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .toggle-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.3);
        }

        .arrow {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .toggle-btn:hover .arrow {
          transform: scale(1.2);
        }

        .cta-section {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(99, 102, 241, 0.08));
          border: 2px solid rgba(124, 58, 237, 0.15);
          border-radius: 24px;
          padding: 4rem 2rem;
          text-align: center;
          margin-top: 4rem;
        }

        .cta-section h3 {
          color: #0f172a;
          font-size: 2.2rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .cta-section p {
          color: #475569;
          font-size: 1.1rem;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .cta-button {
          padding: 1.1rem 2.8rem;
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: white;
          border: none;
          border-radius: 14px;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.25);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(124, 58, 237, 0.35);
        }

        .process-cta {
          margin-top: 5rem;
        }

        .cta-content {
          text-align: center;
          padding: 4rem 3rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(236, 72, 153, 0.08) 100%);
          border-radius: 28px;
          border: 2px solid rgba(99, 102, 241, 0.15);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.1);
        }

        .cta-badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .cta-text {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          color: #111827;
          letter-spacing: -0.5px;
          line-height: 1.25;
        }

        .cta-subtext {
          font-size: 1.125rem;
          color: #6b7280;
          margin-bottom: 2rem;
          font-weight: 400;
        }

        .cta-button {
          padding: 1.125rem 3rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1.125rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.875rem;
          transition: all 0.4s ease;
          box-shadow: 0 10px 40px rgba(99, 102, 241, 0.35);
          letter-spacing: 0.3px;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(99, 102, 241, 0.45);
        }

        .button-arrow {
          transition: transform 0.4s ease;
          font-size: 1.25rem;
        }

        .cta-button:hover .button-arrow {
          transform: translateX(6px);
        }

        .cta-features {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 0.938rem;
          color: #4b5563;
          font-weight: 500;
        }

        .feature-item svg {
          color: #10b981;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .cta-text {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .divisions-section {
            padding: 3rem 1rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .divisions-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .divisions-grid.has-expanded {
            grid-template-columns: 1fr;
          }

          .expanded-content {
            grid-template-columns: 1fr;
          }

          .cta-section {
            padding: 2.5rem 1.5rem;
          }

          .cta-section h3 {
            font-size: 1.6rem;
          }

          .card-header {
            gap: 1rem;
            flex-direction: row;
          }

          .icon-wrapper {
            width: 56px;
            height: 56px;
            font-size: 2rem;
          }

          .header-content h3 {
            font-size: 1.1rem;
          }

          .tagline {
            font-size: 0.813rem;
          }

          .short-description {
            font-size: 0.938rem;
          }

          .stats-impact {
            flex-direction: column;
          }

          .impact-badge,
          .stats-badge {
            width: 100%;
          }

          .toggle-btn {
            width: 100%;
          }

          .cta-content {
            padding: 2.5rem 1.5rem;
          }

          .cta-text {
            font-size: 1.5rem;
          }

          .cta-features {
            flex-direction: column;
            gap: 1rem;
          }
        }

        /* Protect Modal Styling */
        .modal-backdrop,
        .modal-backdrop * {
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important; 
        }

        .modal-backdrop {
          z-index: 9999 !important;
        }

        .modal-container {
          z-index: 9999 !important;
        }

        .modal {
          width: 100% !important;
          max-width: 550px !important;
          padding: 2.5rem !important;
        }
      `}</style>
    </section>
  );
}
