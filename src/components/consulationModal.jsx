import React, { useState, useEffect } from 'react';

export default function ConsultationModal({ visible = true, onClose = () => {} }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    message: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [step, setStep] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!visible) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1 && formData.name && formData.email) {
      setStep(2);
    } else if (step === 2 && formData.phone && formData.company) {
      setStep(3);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '5ec99ed0-6665-44d3-b9ab-8f669aaa276b',
          subject: `🚀 New Consultation Request: ${formData.name} from ${formData.company}`,
          from_name: formData.name,
          email: formData.email,
          message: `
🎯 NEW CONSULTATION BOOKING

═══════════════════════════════
📊 CONTACT INFORMATION
═══════════════════════════════
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

═══════════════════════════════
🏢 COMPANY DETAILS
═══════════════════════════════
Company: ${formData.company}
Industry: ${formData.businessType}

═══════════════════════════════
📅 MEETING PREFERENCES
═══════════════════════════════
Date: ${formData.date}
Time: ${formData.time}

═══════════════════════════════
💬 REQUIREMENTS
═══════════════════════════════
${formData.message || 'No additional details provided'}

═══════════════════════════════
⏰ Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          `,
          to: 'jainmahi1848@gmail.com'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setFormData({ name: '', email: '', phone: '', company: '', businessType: '', message: '', date: '', time: '' });
          setStep(1);
          setSubmitStatus(null);
        }, 3000);
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const gradientX = (mousePosition.x / window.innerWidth) * 100;
  const gradientY = (mousePosition.y / window.innerHeight) * 100;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 0.8; }
        }

        .consult-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
          animation: fadeIn 0.3s ease-out;
        }

        .consult-modal-container {
          position: relative;
          width: 100%;
          max-width: 550px;
        }

        .consult-gradient-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease-out;
          animation: pulse 4s infinite;
          z-index: 0;
        }

        .consult-modal {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .consult-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.25rem;
          color: #64748b;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .consult-close-btn:hover {
          background: rgba(0, 0, 0, 0.1);
          transform: rotate(90deg);
        }

        .consult-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .consult-badge {
          display: inline-block;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .consult-header h2 {
          margin: 0 0 0.75rem 0;
          font-size: 1.85rem;
          background: linear-gradient(135deg, #1e293b 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .consult-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .consult-progress-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1.5rem;
          gap: 0.5rem;
        }

        .consult-progress-step {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
          color: #94a3b8;
          transition: all 0.3s;
        }

        .consult-progress-step.active {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
          transform: scale(1.1);
        }

        .consult-progress-line {
          width: 60px;
          height: 3px;
          background: #e2e8f0;
          transition: all 0.3s;
        }

        .consult-progress-line.active {
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
        }

        .consult-step-content {
          margin-top: 2rem;
        }

        .consult-step-content h3 {
          margin: 0 0 1.5rem 0;
          color: #1e293b;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .consult-input-group {
          margin-bottom: 1.25rem;
        }

        .consult-input-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #334155;
          font-size: 0.9rem;
        }

        .consult-input-group input,
        .consult-input-group textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 0.95rem;
          transition: all 0.2s;
          font-family: inherit;
          background: white;
        }

        .consult-input-group input:focus,
        .consult-input-group textarea:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }

        .consult-input-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .consult-input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .consult-btn-primary,
        .consult-btn-secondary {
          width: 100%;
          padding: 0.95rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          margin-top: 0.5rem;
        }

        .consult-btn-primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
        }

        .consult-btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
        }

        .consult-btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .consult-btn-secondary {
          background: white;
          color: #64748b;
          border: 2px solid #e2e8f0;
        }

        .consult-btn-secondary:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        .consult-btn-group {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 0.75rem;
        }

        .consult-trust-bar {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
          font-size: 0.85rem;
          color: #64748b;
          flex-wrap: wrap;
        }

        .consult-success-screen {
          text-align: center;
          padding: 2rem 0;
        }

        .consult-success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          margin: 0 auto 1.5rem;
          animation: slideUp 0.5s ease-out;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
        }

        .consult-success-screen h3 {
          margin: 0 0 0.75rem 0;
          color: #1e293b;
          font-size: 1.5rem;
        }

        .consult-success-screen p {
          color: #64748b;
          margin: 0 0 2rem 0;
          line-height: 1.6;
        }

        .consult-success-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .consult-detail {
          background: #f0f9ff;
          padding: 0.75rem;
          border-radius: 8px;
          color: #0369a1;
          font-weight: 500;
        }

        .consult-error-message {
          background: #fee2e2;
          color: #991b1b;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          border: 1px solid #fca5a5;
        }

        @media (max-width: 640px) {
          .consult-modal {
            padding: 2rem 1.5rem;
          }
          .consult-header h2 {
            font-size: 1.5rem;
          }
          .consult-input-row {
            grid-template-columns: 1fr;
          }
          .consult-btn-group {
            grid-template-columns: 1fr;
          }
          .consult-trust-bar {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
          .consult-progress-line {
            width: 40px;
          }
        }
      `}</style>

      <div className="consult-modal-backdrop" onClick={onClose}>
        <div className="consult-modal-container" onClick={(e) => e.stopPropagation()}>
          <div 
            className="consult-gradient-orb"
            style={{
              left: `${gradientX}%`,
              top: `${gradientY}%`
            }}
          />
          
          <div className="consult-modal">
            <button className="consult-close-btn" onClick={onClose}>✕</button>
            
            <div className="consult-header">
              <div className="consult-badge">🤖 AI Consultation</div>
              <h2>Book Your Free Strategy Session</h2>
              <p>Join 500+ companies transforming their business with AI automation</p>
              
              <div className="consult-progress-bar">
                <div className={`consult-progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
                <div className={`consult-progress-line ${step >= 2 ? 'active' : ''}`} />
                <div className={`consult-progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`consult-progress-line ${step >= 3 ? 'active' : ''}`} />
                <div className={`consult-progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
              </div>
            </div>

            {submitStatus === 'success' ? (
              <div className="consult-success-screen">
                <div className="consult-success-icon">✓</div>
                <h3>Consultation Booked Successfully!</h3>
                <p>Check your email for confirmation. Our AI specialist will contact you within 24 hours.</p>
                <div className="consult-success-details">
                  <div className="consult-detail">📧 Confirmation email sent</div>
                  <div className="consult-detail">📞 Expect our call soon</div>
                  <div className="consult-detail">🚀 Get ready to transform</div>
                </div>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <div className="consult-step-content">
                    <h3>👋 Let's Get Started</h3>
                    <div className="consult-input-group">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="consult-input-group">
                      <label>Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <button 
                      className="consult-btn-primary"
                      onClick={handleNext}
                      disabled={!formData.name || !formData.email}
                    >
                      Continue →
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="consult-step-content">
                    <h3>🏢 About Your Company</h3>
                    <div className="consult-input-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    <div className="consult-input-group">
                      <label>Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Tech Solutions Pvt Ltd"
                        required
                      />
                    </div>
                    <div className="consult-input-group">
                      <label>Industry / Business Type</label>
                      <input
                        type="text"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        placeholder="E-commerce, SaaS, Healthcare..."
                      />
                    </div>
                    <div className="consult-btn-group">
                      <button className="consult-btn-secondary" onClick={() => setStep(1)}>
                        ← Back
                      </button>
                      <button 
                        className="consult-btn-primary"
                        onClick={handleNext}
                        disabled={!formData.phone || !formData.company}
                      >
                        Continue →
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="consult-step-content">
                    <h3>📅 Schedule Your Call</h3>
                    <div className="consult-input-row">
                      <div className="consult-input-group">
                        <label>Preferred Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div className="consult-input-group">
                        <label>Preferred Time *</label>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="consult-input-group">
                      <label>What challenges are you facing? (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="e.g., Manual data entry, slow customer response, repetitive tasks..."
                      />
                    </div>
                    
                    {submitStatus === 'error' && (
                      <div className="consult-error-message">
                        ❌ Failed to send. Please try again or email us directly.
                      </div>
                    )}
                    
                    <div className="consult-btn-group">
                      <button className="consult-btn-secondary" onClick={() => setStep(2)}>
                        ← Back
                      </button>
                      <button 
                        className="consult-btn-primary"
                        onClick={handleSubmit}
                        disabled={isSubmitting || !formData.date || !formData.time}
                      >
                        {isSubmitting ? '⏳ Booking...' : '🚀 Book My Consultation'}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="consult-trust-bar">
              <span>🔒 Secure & Confidential</span>
              <span>⚡ 24hr Response</span>
              <span>✨ No Commitment</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}