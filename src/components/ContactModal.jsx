// import React, { useState, useEffect } from 'react';

// export default function ContactModal({ visible = true, onClose = () => {} }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   if (!visible) return null;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           access_key: '5ec99ed0-6665-44d3-b9ab-8f669aaa276b',
//           subject: `📞 New Contact Request: ${formData.name}`,
//           from_name: formData.name,
//           email: formData.email,
//           message: `
// 📞 NEW CONTACT REQUEST

// ═══════════════════════════════
// 📊 CONTACT INFORMATION
// ═══════════════════════════════
// 👤 Name: ${formData.name}
// 📧 Email: ${formData.email}
// 📱 Phone: ${formData.phone}

// ═══════════════════════════════
// ⏰ Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
//           `,
//           to: 'jainmahi1848@gmail.com'
//         })
//       });

//       const result = await response.json();
      
//       if (result.success) {
//         setSubmitStatus('success');
//         setTimeout(() => {
//           onClose();
//           setFormData({ name: '', email: '', phone: '' });
//           setSubmitStatus(null);
//         }, 3000);
//       } else {
//         throw new Error('Failed');
//       }
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const gradientX = (mousePosition.x / window.innerWidth) * 100;
//   const gradientY = (mousePosition.y / window.innerHeight) * 100;

//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="modal-container" onClick={(e) => e.stopPropagation()}>
//         <div 
//           className="gradient-orb"
//           style={{
//             left: `${gradientX}%`,
//             top: `${gradientY}%`
//           }}
//         />
        
//         <div className="modal">
//           <button className="close-btn" onClick={onClose}>✕</button>
          
//           <div className="header">
//             <div className="badge">💬 Quick Contact</div>
//             <h2>Get In Touch With Us</h2>
//             <p>We'll get back to you within 24 hours</p>
//           </div>

//           {submitStatus === 'success' ? (
//             <div className="success-screen">
//               <div className="success-icon">✓</div>
//               <h3>Message Sent Successfully!</h3>
//               <p>Thank you for reaching out. We'll contact you shortly.</p>
//               <div className="success-details">
//                 <div className="detail">📧 Check your inbox</div>
//                 <div className="detail">📞 We'll call you soon</div>
//                 <div className="detail">⚡ Quick response guaranteed</div>
//               </div>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="contact-form">
//               <div className="input-group">
//                 <label>Your Name *</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label>Email Address *</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="john@example.com"
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label>Phone Number *</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+91 98765 43210"
//                   required
//                 />
//               </div>

//               {submitStatus === 'error' && (
//                 <div className="error-message">
//                   ❌ Failed to send. Please try again or email us directly at jainmahi1848@gmail.com
//                 </div>
//               )}

//               <button 
//                 type="submit" 
//                 className="btn-primary"
//                 disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
//               >
//                 {isSubmitting ? '⏳ Sending...' : '📤 Send Message'}
//               </button>
//             </form>
//           )}

//           <div className="trust-bar">
//             <span>🔒 Secure</span>
//             <span>⚡ Fast Response</span>
//             <span>✨ No Spam</span>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); opacity: 0.5; }
//           50% { transform: scale(1.5); opacity: 0.8; }
//         }

//         .modal-backdrop {
//           position: fixed;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.75);
//           backdrop-filter: blur(8px);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 9999;
//           padding: 1rem;
//           animation: fadeIn 0.3s ease-out;
//         }

//         .modal-container {
//           position: relative;
//           width: 100%;
//           max-width: 500px;
//         }

//         .gradient-orb {
//           position: absolute;
//           width: 600px;
//           height: 600px;
//           background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
//           border-radius: 50%;
//           pointer-events: none;
//           transform: translate(-50%, -50%);
//           transition: all 0.3s ease-out;
//           animation: pulse 4s infinite;
//           z-index: 0;
//         }

//         .modal {
//           background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
//           border-radius: 24px;
//           padding: 2.5rem;
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
//           animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//           position: relative;
//           z-index: 1;
//           border: 1px solid rgba(255, 255, 255, 0.5);
//         }

//         .close-btn {
//           position: absolute;
//           top: 1.5rem;
//           right: 1.5rem;
//           background: rgba(0, 0, 0, 0.05);
//           border: none;
//           width: 36px;
//           height: 36px;
//           border-radius: 50%;
//           cursor: pointer;
//           font-size: 1.25rem;
//           color: #64748b;
//           transition: all 0.2s;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .close-btn:hover {
//           background: rgba(0, 0, 0, 0.1);
//           transform: rotate(90deg);
//         }

//         .header {
//           text-align: center;
//           margin-bottom: 2rem;
//         }

//         .badge {
//           display: inline-block;
//           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
//           color: white;
//           padding: 0.4rem 1rem;
//           border-radius: 20px;
//           font-size: 0.85rem;
//           font-weight: 600;
//           margin-bottom: 1rem;
//           box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
//         }

//         .header h2 {
//           margin: 0 0 0.75rem 0;
//           font-size: 1.85rem;
//           background: linear-gradient(135deg, #1e293b 0%, #6366f1 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           font-weight: 700;
//         }

//         .header p {
//           margin: 0;
//           color: #64748b;
//           font-size: 0.95rem;
//           line-height: 1.5;
//         }

//         .contact-form {
//           margin-top: 2rem;
//         }

//         .input-group {
//           margin-bottom: 1.25rem;
//         }

//         .input-group label {
//           display: block;
//           margin-bottom: 0.5rem;
//           font-weight: 500;
//           color: #334155;
//           font-size: 0.9rem;
//         }

//         .input-group input {
//           width: 100%;
//           padding: 0.85rem 1rem;
//           border: 2px solid #e2e8f0;
//           border-radius: 12px;
//           font-size: 0.95rem;
//           transition: all 0.2s;
//           font-family: inherit;
//           background: white;
//         }

//         .input-group input:focus {
//           outline: none;
//           border-color: #6366f1;
//           box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
//         }

//         .btn-primary {
//           width: 100%;
//           padding: 0.95rem 1.5rem;
//           border-radius: 12px;
//           font-weight: 600;
//           font-size: 1rem;
//           cursor: pointer;
//           border: none;
//           transition: all 0.2s;
//           margin-top: 0.5rem;
//           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
//           color: white;
//           box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
//         }

//         .btn-primary:hover:not(:disabled) {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
//         }

//         .btn-primary:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .trust-bar {
//           display: flex;
//           justify-content: center;
//           gap: 1.5rem;
//           margin-top: 1.5rem;
//           padding-top: 1.5rem;
//           border-top: 1px solid #e2e8f0;
//           font-size: 0.85rem;
//           color: #64748b;
//           flex-wrap: wrap;
//         }

//         .success-screen {
//           text-align: center;
//           padding: 2rem 0;
//         }

//         .success-icon {
//           width: 80px;
//           height: 80px;
//           background: linear-gradient(135deg, #10b981 0%, #059669 100%);
//           color: white;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 3rem;
//           margin: 0 auto 1.5rem;
//           animation: slideUp 0.5s ease-out;
//           box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
//         }

//         .success-screen h3 {
//           margin: 0 0 0.75rem 0;
//           color: #1e293b;
//           font-size: 1.5rem;
//         }

//         .success-screen p {
//           color: #64748b;
//           margin: 0 0 2rem 0;
//           line-height: 1.6;
//         }

//         .success-details {
//           display: flex;
//           flex-direction: column;
//           gap: 0.75rem;
//         }

//         .detail {
//           background: #f0f9ff;
//           padding: 0.75rem;
//           border-radius: 8px;
//           color: #0369a1;
//           font-weight: 500;
//         }

//         .error-message {
//           background: #fee2e2;
//           color: #991b1b;
//           padding: 0.75rem;
//           border-radius: 8px;
//           margin-bottom: 1rem;
//           font-size: 0.9rem;
//           border: 1px solid #fca5a5;
//         }

//         @media (max-width: 640px) {
//           .modal {
//             padding: 2rem 1.5rem;
//           }
//           .header h2 {
//             font-size: 1.5rem;
//           }
//           .trust-bar {
//             flex-direction: column;
//             gap: 0.5rem;
//             text-align: center;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }  
import React, { useState, useEffect } from 'react';

export default function ContactModal({ visible = true, onClose = () => {} }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '5ec99ed0-6665-44d3-b9ab-8f669aaa276b',
          subject: `📞 New Contact Request: ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: `
📞 NEW CONTACT REQUEST

═══════════════════════════════
📊 CONTACT INFORMATION
═══════════════════════════════
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

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
          setFormData({ name: '', email: '', phone: '' });
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

        .contact-modal-backdrop {
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

        .contact-modal-container {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .contact-gradient-orb {
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

        .contact-modal {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .contact-close-btn {
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

        .contact-close-btn:hover {
          background: rgba(0, 0, 0, 0.1);
          transform: rotate(90deg);
        }

        .contact-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .contact-badge {
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

        .contact-header h2 {
          margin: 0 0 0.75rem 0;
          font-size: 1.85rem;
          background: linear-gradient(135deg, #1e293b 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .contact-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .contact-form {
          margin-top: 2rem;
        }

        .contact-input-group {
          margin-bottom: 1.25rem;
        }

        .contact-input-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #334155;
          font-size: 0.9rem;
        }

        .contact-input-group input {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 0.95rem;
          transition: all 0.2s;
          font-family: inherit;
          background: white;
        }

        .contact-input-group input:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }

        .contact-btn-primary {
          width: 100%;
          padding: 0.95rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          margin-top: 0.5rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
        }

        .contact-btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
        }

        .contact-btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .contact-trust-bar {
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

        .contact-success-screen {
          text-align: center;
          padding: 2rem 0;
        }

        .contact-success-icon {
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

        .contact-success-screen h3 {
          margin: 0 0 0.75rem 0;
          color: #1e293b;
          font-size: 1.5rem;
        }

        .contact-success-screen p {
          color: #64748b;
          margin: 0 0 2rem 0;
          line-height: 1.6;
        }

        .contact-success-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-detail {
          background: #f0f9ff;
          padding: 0.75rem;
          border-radius: 8px;
          color: #0369a1;
          font-weight: 500;
        }

        .contact-error-message {
          background: #fee2e2;
          color: #991b1b;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          border: 1px solid #fca5a5;
        }

        @media (max-width: 640px) {
          .contact-modal {
            padding: 2rem 1.5rem;
          }
          .contact-header h2 {
            font-size: 1.5rem;
          }
          .contact-trust-bar {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}</style>

      <div className="contact-modal-backdrop" onClick={onClose}>
        <div className="contact-modal-container" onClick={(e) => e.stopPropagation()}>
          <div 
            className="contact-gradient-orb"
            style={{
              left: `${gradientX}%`,
              top: `${gradientY}%`
            }}
          />
          
          <div className="contact-modal">
            <button className="contact-close-btn" onClick={onClose}>✕</button>
            
            <div className="contact-header">
              <div className="contact-badge">💬 Quick Contact</div>
              <h2>Get In Touch With Us</h2>
              <p>We'll get back to you within 24 hours</p>
            </div>

            {submitStatus === 'success' ? (
              <div className="contact-success-screen">
                <div className="contact-success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We'll contact you shortly.</p>
                <div className="contact-success-details">
                  <div className="contact-detail">📧 Check your inbox</div>
                  <div className="contact-detail">📞 We'll call you soon</div>
                  <div className="contact-detail">⚡ Quick response guaranteed</div>
                </div>
              </div>
            ) : (
              <div className="contact-form">
                <div className="contact-input-group">
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

                <div className="contact-input-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="contact-input-group">
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

                {submitStatus === 'error' && (
                  <div className="contact-error-message">
                    ❌ Failed to send. Please try again or email us directly at jainmahi1848@gmail.com
                  </div>
                )}

                <button 
                  onClick={handleSubmit}
                  className="contact-btn-primary"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                >
                  {isSubmitting ? '⏳ Sending...' : '📤 Send Message'}
                </button>
              </div>
            )}

            <div className="contact-trust-bar">
              <span>🔒 Secure</span>
              <span>⚡ Fast Response</span>
              <span>✨ No Spam</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}