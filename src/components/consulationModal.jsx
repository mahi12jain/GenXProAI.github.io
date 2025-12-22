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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .consult-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 1rem;
          animation: fadeIn 0.2s ease-out;
          cursor: auto;
        }

        .consult-modal-container {
          position: relative;
          width: 100%;
          max-width: 520px;
          cursor: auto;
          z-index: 100000;
        }

        .consult-modal {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          animation: slideUp 0.3s ease-out;
          position: relative;
          border: 1px solid #f0f0f0;
          cursor: auto;
          z-index: 100001;
        }

        .consult-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: transparent;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.25rem;
          color: #94a3b8;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .consult-close-btn:hover {
          background: #f1f5f9;
          color: #1e293b;
        }

        .consult-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .consult-header h2 {
          margin: 0 0 0.5rem 0;
          font-size: 1.75rem;
          color: #1e293b;
          font-weight: 600;
        }

        .consult-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.9rem;
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
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          font-size: 0.875rem;
          color: #94a3b8;
          transition: all 0.3s;
        }

        .consult-progress-step.active {
          background: #1e293b;
          color: white;
        }

        .consult-progress-line {
          width: 50px;
          height: 2px;
          background: #e2e8f0;
          transition: all 0.3s;
        }

        .consult-progress-line.active {
          background: #1e293b;
        }

        .consult-step-content {
          margin-top: 2rem;
        }

        .consult-step-content h3 {
          margin: 0 0 1.5rem 0;
          color: #1e293b;
          font-size: 1.125rem;
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
          font-size: 0.875rem;
        }

        .consult-input-group input,
        .consult-input-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.9375rem;
          transition: all 0.2s;
          font-family: inherit;
          background: white;
          cursor: text;
        }

        .consult-input-group input:focus,
        .consult-input-group textarea:focus {
          outline: none;
          border-color: #1e293b;
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
          padding: 0.875rem 1.5rem;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.9375rem;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          margin-top: 0.5rem;
        }

        .consult-btn-primary {
          background: #1e293b;
          color: white;
        }

        .consult-btn-primary:hover:not(:disabled) {
          background: #334155;
        }

        .consult-btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .consult-btn-secondary {
          background: white;
          color: #64748b;
          border: 1px solid #e2e8f0;
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

        .consult-success-screen {
          text-align: center;
          padding: 2rem 0;
        }

        .consult-success-icon {
          width: 64px;
          height: 64px;
          background: #1e293b;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1.5rem;
          animation: slideUp 0.4s ease-out;
        }

        .consult-success-screen h3 {
          margin: 0 0 0.5rem 0;
          color: #1e293b;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .consult-success-screen p {
          color: #64748b;
          margin: 0;
          line-height: 1.6;
          font-size: 0.9375rem;
        }

        .consult-error-message {
          background: #fef2f2;
          color: #991b1b;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          border: 1px solid #fecaca;
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
          .consult-progress-line {
            width: 35px;
          }
        }
      `}</style>

      <div className="consult-modal-backdrop" onClick={onClose}>
        <div className="consult-modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="consult-modal">
            <button className="consult-close-btn" onClick={onClose}>✕</button>
            
            <div className="consult-header">
              <h2>Book a Consultation</h2>
              <p>Let's discuss how AI can transform your business</p>
              
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
                <h3>Consultation Booked</h3>
                <p>We'll contact you within 24 hours to confirm your appointment.</p>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <div className="consult-step-content">
                    <h3>Contact Information</h3>
                    <div className="consult-input-group">
                      <label>Name *</label>
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
                      <label>Email *</label>
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
                      Continue
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="consult-step-content">
                    <h3>Company Details</h3>
                    <div className="consult-input-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
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
                        placeholder="Company Name"
                        required
                      />
                    </div>
                    <div className="consult-input-group">
                      <label>Industry</label>
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
                        Back
                      </button>
                      <button 
                        className="consult-btn-primary"
                        onClick={handleNext}
                        disabled={!formData.phone || !formData.company}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="consult-step-content">
                    <h3>Schedule Meeting</h3>
                    <div className="consult-input-row">
                      <div className="consult-input-group">
                        <label>Date *</label>
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
                        <label>Time *</label>
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
                      <label>Message (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                    
                    {submitStatus === 'error' && (
                      <div className="consult-error-message">
                        Failed to send. Please try again or contact us directly.
                      </div>
                    )}
                    
                    <div className="consult-btn-group">
                      <button className="consult-btn-secondary" onClick={() => setStep(2)}>
                        Back
                      </button>
                      <button 
                        className="consult-btn-primary"
                        onClick={handleSubmit}
                        disabled={isSubmitting || !formData.date || !formData.time}
                      >
                        {isSubmitting ? 'Submitting...' : 'Book Consultation'}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}