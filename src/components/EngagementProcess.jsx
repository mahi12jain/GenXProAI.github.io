import { useState } from 'react';
import ConsultationModal from './consulationModal';

export default function EngagementProcess() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const steps = [
        {
            title: "Strategic Discovery",
            description: "We begin with an in-depth analysis of your business ecosystem, identifying high-impact opportunities where AI can drive measurable transformation and competitive advantage.",
            icon: "🔍",
            highlight: "Complimentary Consultation",
            metric: "2-3 weeks",
            deliverable: "Opportunity Assessment Report"
        },
        {
            title: "Intelligence Architecture",
            description: "Our experts design a comprehensive AI blueprint tailored to your objectives, ensuring alignment with your long-term vision and quantifiable ROI milestones.",
            icon: "🎯",
            highlight: "Tailored Strategy",
            metric: "1-2 weeks",
            deliverable: "AI Roadmap & Business Case"
        },
        {
            title: "Solution Engineering",
            description: "We architect enterprise-grade systems with cutting-edge technology, prioritizing scalability, security, and seamless integration with your existing infrastructure.",
            icon: "🎨",
            highlight: "Enterprise Architecture",
            metric: "2-4 weeks",
            deliverable: "Technical Specifications"
        },
        {
            title: "Precision Development",
            description: "Our agile methodology ensures rapid, iterative delivery with continuous stakeholder engagement, maintaining zero disruption to your operational workflows.",
            icon: "⚡",
            highlight: "Agile Sprints",
            metric: "6-12 weeks",
            deliverable: "Production-Ready System"
        },
        // {
        //     title: "Quality Assurance",
        //     description: "Through rigorous validation protocols and performance optimization, we guarantee solutions that exceed industry benchmarks and deliver exceptional accuracy.",
        //     icon: "✓",
        //     highlight: "99.9% Reliability",
        //     metric: "2-3 weeks",
        //     deliverable: "QA Certification"
        // },
        {
            title: "Launch Excellence",
            description: "We orchestrate seamless deployment with comprehensive team enablement, ensuring your organization is fully equipped to leverage your new AI capabilities.",
            icon: "🚀",
            highlight: "Zero-Friction Launch",
            metric: "1-2 weeks",
            deliverable: "Deployment Package"
        },
        {
            title: "Continuous Partnership",
            description: "Beyond deployment, we provide proactive monitoring, continuous optimization, and strategic consultation to ensure sustained value and competitive edge.",
            icon: "🛡️",
            highlight: "Elite Support",
            metric: "Ongoing",
            deliverable: "Performance Analytics"
        }
    ];

    return (
        <section id="process" className="process-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Our Methodology</span>
                    <h2 className="section-title">
                        A Proven Framework for <span className="text-gradient">Digital Excellence</span>
                    </h2>
                    <p className="section-subtitle">
                        From strategic vision to measurable impact—our systematic approach transforms ambition into achievement, delivering enterprise solutions that drive lasting competitive advantage
                    </p>
                </div>

                <div className="process-timeline">
                    <div className="timeline-line"></div>
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            className="process-step fade-in-up" 
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="step-wrapper">
                                <div className="step-card glass-card">
                                    <div className="step-header-row">
                                        <div className="step-indicator">
                                            <div className="step-number">{index + 1}</div>
                                            <div className="step-icon">{step.icon}</div>
                                        </div>
                                        <div className="step-badge">{step.highlight}</div>
                                    </div>
                                    
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                    <div className="step-metrics">
                                        <div className="metric-item">
                                            <svg className="metric-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                            </svg>
                                            <span>{step.metric}</span>
                                        </div>
                                        <div className="metric-item">
                                            <svg className="metric-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span>{step.deliverable}</span>
                                        </div>
                                    </div>
                                    <div className="step-footer">
                                        <span className="step-duration">Phase {index + 1} of {steps.length}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {index < steps.length - 1 && (
                                <div className="step-connector">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="process-cta">
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
                </div>
            </div>

            {isModalOpen && <ConsultationModal onClose={() => setIsModalOpen(false)} />}

            <style>{`
                .process-section {
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 50%, #ffffff 100%);
                    padding: 4rem 1rem;
                }

                @media (min-width: 768px) {
                    .process-section {
                        padding: 6rem 1.5rem;
                    }
                }

                .process-section::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -10%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 20s ease-in-out infinite;
                }

                .process-section::after {
                    content: '';
                    position: absolute;
                    bottom: -30%;
                    right: -5%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 25s ease-in-out infinite reverse;
                }

                @keyframes float {
                    0%, 100% { 
                        transform: translate(0, 0) rotate(0deg); 
                    }
                    33% { 
                        transform: translate(30px, -30px) rotate(5deg); 
                    }
                    66% { 
                        transform: translate(-20px, 20px) rotate(-5deg); 
                    }
                }

                .container {
                    position: relative;
                    z-index: 1;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 5rem;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .section-label {
                    display: inline-block;
                    padding: 0.625rem 1.5rem;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
                    border: 1.5px solid rgba(99, 102, 241, 0.25);
                    border-radius: 50px;
                    font-size: 0.813rem;
                    font-weight: 700;
                    color: #6366f1;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 1.5rem;
                    position: relative;
                    overflow: hidden;
                }

                .section-label::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    animation: shimmer 3s infinite;
                }

                @keyframes shimmer {
                    0% { 
                        left: -100%; 
                    }
                    100% { 
                        left: 100%; 
                    }
                }

                .section-title {
                    font-size: 2.75rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.15;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                    color: #111827;
                }

                .text-gradient {
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .section-subtitle {
                    font-size: 1.188rem;
                    color: #4b5563;
                    line-height: 1.75;
                    font-weight: 400;
                    max-width: 700px;
                    margin: 0 auto;
                }

                .process-timeline {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 2.5rem;
                    padding: 2rem 0;
                }

                .timeline-line {
                    display: none;
                }

                .process-step {
                    position: relative;
                    opacity: 0;
                    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .step-wrapper {
                    display: flex;
                    gap: 2rem;
                    align-items: flex-start;
                }

                .step-header-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                    gap: 1rem;
                }

                .step-indicator {
                    flex-shrink: 0;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.75rem;
                }

                @media (min-width: 768px) {
                    .step-header-row {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .step-indicator {
                        flex-direction: row;
                        gap: 1rem;
                    }
                }

                .step-number {
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 800;
                    font-size: 1.25rem;
                    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.35), 0 0 0 4px rgba(99, 102, 241, 0.08);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    z-index: 2;
                }

                @media (min-width: 768px) {
                    .step-number {
                        width: 64px;
                        height: 64px;
                        font-size: 1.5rem;
                        box-shadow: 0 10px 40px rgba(99, 102, 241, 0.35), 0 0 0 6px rgba(99, 102, 241, 0.08);
                    }
                }

                .step-number::after {
                    content: '';
                    position: absolute;
                    inset: -8px;
                    border-radius: 50%;
                    border: 2px solid rgba(99, 102, 241, 0.15);
                    animation: ripple 3s ease-out infinite;
                }

                @keyframes ripple {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }

                .step-icon {
                    font-size: 1.75rem;
                    filter: grayscale(30%) brightness(1.1);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                @media (min-width: 768px) {
                    .step-icon {
                        font-size: 2.25rem;
                    }
                }

                .step-card {
                    flex: 1;
                    padding: 1.5rem;
                    border-radius: 16px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    border: 1.5px solid rgba(99, 102, 241, 0.12);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
                }

                @media (min-width: 640px) {
                    .step-card {
                        padding: 2rem;
                        border-radius: 18px;
                    }
                }

                @media (min-width: 768px) {
                    .step-card {
                        padding: 2.5rem;
                        border-radius: 20px;
                    }
                }

                .step-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .step-card:hover::before {
                    transform: scaleX(1);
                }

                .step-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 25px 50px rgba(99, 102, 241, 0.15);
                    background: rgba(255, 255, 255, 1);
                    border-color: rgba(99, 102, 241, 0.25);
                }

                .process-step:hover .step-number {
                    transform: scale(1.15) rotate(8deg);
                    box-shadow: 0 15px 50px rgba(99, 102, 241, 0.45), 0 0 0 8px rgba(99, 102, 241, 0.12);
                }

                .process-step:hover .step-icon {
                    transform: scale(1.2) rotate(-5deg);
                    filter: grayscale(0%) brightness(1.2);
                }

                .step-badge {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.4rem 0.875rem;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08));
                    border: 1.5px solid rgba(99, 102, 241, 0.2);
                    border-radius: 50px;
                    font-size: 0.688rem;
                    font-weight: 700;
                    color: #6366f1;
                    text-transform: uppercase;
                    letter-spacing: 0.6px;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                @media (min-width: 640px) {
                    .step-badge {
                        padding: 0.5rem 1rem;
                        font-size: 0.75rem;
                        letter-spacing: 0.8px;
                    }
                }

                .step-title {
                    font-size: clamp(1.25rem, 3vw, 1.625rem);
                    font-weight: 800;
                    margin-bottom: 1rem;
                    color: #111827;
                    line-height: 1.25;
                    letter-spacing: -0.3px;
                }

                .step-description {
                    font-size: clamp(0.938rem, 2vw, 1.0625rem);
                    line-height: 1.8;
                    color: #4b5563;
                    margin-bottom: 1.5rem;
                    font-weight: 400;
                }

                .step-metrics {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    margin-bottom: 1.25rem;
                    padding: 1.25rem;
                    background: rgba(99, 102, 241, 0.03);
                    border-radius: 12px;
                    border: 1px solid rgba(99, 102, 241, 0.08);
                }

                .metric-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 0.938rem;
                    color: #374151;
                    font-weight: 500;
                }

                .metric-icon {
                    color: #6366f1;
                    flex-shrink: 0;
                }

                .step-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 1.25rem;
                    border-top: 1.5px solid rgba(99, 102, 241, 0.1);
                }

                .step-duration {
                    font-size: 0.875rem;
                    color: #6b7280;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .step-connector {
                    display: none;
                }

                .process-cta {
                    margin-top: 5rem;
                }

                .cta-content {
                    text-align: center;
                    padding: 2.5rem 1.5rem;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(236, 72, 153, 0.08) 100%);
                    border-radius: 20px;
                    border: 2px solid rgba(99, 102, 241, 0.15);
                    box-shadow: 0 20px 60px rgba(99, 102, 241, 0.1);
                }

                @media (min-width: 640px) {
                    .cta-content {
                        padding: 3rem 2rem;
                        border-radius: 24px;
                    }
                }

                @media (min-width: 768px) {
                    .cta-content {
                        padding: 4rem 3rem;
                        border-radius: 28px;
                    }
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
                    font-size: clamp(1.25rem, 4vw, 2rem);
                    font-weight: 800;
                    margin-bottom: 0.75rem;
                    color: #111827;
                    letter-spacing: -0.5px;
                    line-height: 1.25;
                }

                .cta-subtext {
                    font-size: clamp(0.938rem, 2.5vw, 1.125rem);
                    color: #6b7280;
                    margin-bottom: 2rem;
                    font-weight: 400;
                }

                .cta-button {
                    padding: 1rem 2rem;
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                    color: white;
                    border: none;
                    border-radius: 50px;
                    font-size: 1rem;
                    font-weight: 700;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    transition: all 0.4s ease;
                    box-shadow: 0 10px 40px rgba(99, 102, 241, 0.35);
                    letter-spacing: 0.3px;
                }

                @media (min-width: 640px) {
                    .cta-button {
                        padding: 1.125rem 2.5rem;
                        font-size: 1.063rem;
                        gap: 0.875rem;
                    }
                }

                @media (min-width: 768px) {
                    .cta-button {
                        padding: 1.125rem 3rem;
                        font-size: 1.125rem;
                    }
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
                    .section-title {
                        font-size: 3.5rem;
                    }

                    .step-card {
                        padding: 3rem;
                    }

                    .step-metrics {
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .step-header-row {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 1.25rem;
                    }

                    .step-indicator {
                        flex-direction: column;
                        align-items: center;
                    }

                    .cta-text {
                        font-size: 2.5rem;
                    }
                }

                @media (min-width: 1024px) {
                    .process-timeline {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
                        gap: 3rem;
                        padding: 3rem 0;
                    }

                    .timeline-line {
                        display: block;
                        position: absolute;
                        top: 100px;
                        left: 0;
                        right: 0;
                        height: 3px;
                        background: linear-gradient(90deg, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.5) 30%, rgba(139, 92, 246, 0.5) 70%, rgba(236, 72, 153, 0.15) 100%);
                        z-index: 0;
                    }

                    .step-wrapper {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }

                    .step-indicator {
                        margin-bottom: 1.5rem;
                    }

                    .step-card {
                        width: 100%;
                    }

                    .step-metrics {
                        flex-direction: column;
                    }

                    .step-connector {
                        display: block;
                        position: absolute;
                        right: -3rem;
                        top: 100px;
                        color: #6366f1;
                        z-index: 1;
                        animation: pulse 2.5s ease-in-out infinite;
                    }

                    @keyframes pulse {
                        0%, 100% {
                            opacity: 0.4;
                            transform: translateX(0);
                        }
                        50% {
                            opacity: 1;
                            transform: translateX(6px);
                        }
                    }

                    .process-step:last-child .step-connector {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
}