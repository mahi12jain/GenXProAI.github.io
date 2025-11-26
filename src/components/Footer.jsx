// export default function Footer() {
//     return (
//         <footer className="footer">
//             <div className="container">
//                 <div className="footer-content">
//                     <div className="footer-brand">
//                         <h3>GenX pro <span className="text-gradient">AI</span></h3>
//                         <p>Intelligent Automation for the Future of Business</p>
//                     </div>
//                     <div className="footer-links">
//                         <div className="link-group">
//                             <h4>Company</h4>
//                             <a href="#overview">About</a>
//                             <a href="#divisions">Services</a>
//                             <a href="#process">Process</a>
//                         </div>
//                         <div className="link-group">
//                             <h4>Connect</h4>
//                             <a href="#">LinkedIn</a>
//                             <a href="#">Twitter</a>
//                             <a href="#">Contact</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="footer-bottom">
//                     <p>&copy; {new Date().getFullYear()} GenX pro AI. All rights reserved.</p>
//                 </div>
//             </div>
//             <style>{`
//         .footer {
//           background: var(--bg-secondary);
//           padding: 4rem 0 2rem;
//           border-top: 1px solid rgba(0,0,0,0.05);
//         }
//         .footer-content {
//           display: flex;
//           flex-direction: column;
//           gap: 3rem;
//           margin-bottom: 3rem;
//         }
//         .footer-brand h3 {
//           font-size: 1.5rem;
//           margin-bottom: 0.5rem;
//         }
//         .footer-links {
//           display: flex;
//           gap: 4rem;
//           flex-wrap: wrap;
//         }
//         .link-group {
//           display: flex;
//           flex-direction: column;
//           gap: 0.5rem;
//         }
//         .link-group h4 {
//           font-size: 1rem;
//           margin-bottom: 1rem;
//         }
//         .footer-bottom {
//           text-align: center;
//           padding-top: 2rem;
//           border-top: 1px solid rgba(0,0,0,0.05);
//           font-size: 0.9rem;
//           color: var(--text-tertiary);
//         }
//         @media (min-width: 768px) {
//           .footer-content {
//             flex-direction: row;
//             justify-content: space-between;
//           }
//         }
//       `}</style>
//         </footer>
//     );
// }


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-main">
                        <div className="footer-brand-section">
                            <div className="brand-logo">
                                <span className="brand-name">GenX pro</span>
                                <span className="brand-ai">.AI</span>
                            </div>
                            <p className="brand-tagline">
                                Intelligent Automation for the Future of Business
                            </p>
                            <p className="brand-description">
                                Empowering enterprises with cutting-edge AI solutions that drive innovation, efficiency, and sustainable growth.
                            </p>
                            <div className="social-links">
                                <a href="#" className="social-link" aria-label="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a href="#" className="social-link" aria-label="Twitter">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </a>
                                <a href="#" className="social-link" aria-label="GitHub">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                <a href="#" className="social-link" aria-label="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="footer-links-grid">
                            <div className="footer-column">
                                <h4 className="column-title">Solutions</h4>
                                <a href="#divisions" className="footer-link">AI Automation</a>
                                <a href="#divisions" className="footer-link">Custom Development</a>
                                <a href="#divisions" className="footer-link">Integration Services</a>
                                <a href="#divisions" className="footer-link">Consulting</a>
                            </div>

                            <div className="footer-column">
                                <h4 className="column-title">Company</h4>
                                <a href="#overview" className="footer-link">About Us</a>
                                <a href="#why-us" className="footer-link">Why Choose Us</a>
                                <a href="#process" className="footer-link">Our Process</a>
                                <a href="#" className="footer-link">Case Studies</a>
                            </div>

                            {/* <div className="footer-column">
                                <h4 className="column-title">Resources</h4>
                                <a href="#" className="footer-link">Blog</a>
                                <a href="#" className="footer-link">Documentation</a>
                                <a href="#" className="footer-link">Support Center</a>
                                <a href="#" className="footer-link">API Reference</a>
                            </div> */}

                            <div className="footer-column">
                                <h4 className="column-title">Contact</h4>
                                <a href="#" className="footer-link">Get Started</a>
                                <a href="#" className="footer-link">Schedule Demo</a>
                                <a href="mailto:info@genxproai.com" className="footer-link">info@genxproai.com</a>
                                <a href="tel:+919327178988" className="footer-link">+91 9327178988</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-newsletter">
                        <div className="newsletter-content">
                            <h4 className="newsletter-title">Stay Updated</h4>
                            <p className="newsletter-description">
                                Get the latest insights on AI automation and business innovation
                            </p>
                        </div>
                        <div className="newsletter-form">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="newsletter-input"
                            />
                            <button className="newsletter-button">
                                Subscribe
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-bottom-content">
                            <p className="copyright">
                                © {currentYear} GenX pro AI. All rights reserved.
                            </p>
                            <div className="legal-links">
                                <a href="#" className="legal-link">Privacy Policy</a>
                                <span className="separator">•</span>
                                <a href="#" className="legal-link">Terms of Service</a>
                                <span className="separator">•</span>
                                <a href="#" className="legal-link">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <style>{`
                .footer {
                    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
                    border-top: 1px solid rgba(99, 102, 241, 0.1);
                    padding: 5rem 0 0;
                }

                .footer-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                .footer-main {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    padding-bottom: 4rem;
                    border-bottom: 1px solid rgba(99, 102, 241, 0.1);
                }

                @media (min-width: 768px) {
                    .footer-main {
                        grid-template-columns: 1.5fr 2fr;
                        gap: 4rem;
                    }
                }

                .footer-brand-section {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .brand-logo {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-size: 1.75rem;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                    margin-bottom: 0.5rem;
                }

                .brand-name {
                    color: #111827;
                }

                .brand-ai {
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .brand-tagline {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1f2937;
                    margin: 0;
                }

                .brand-description {
                    font-size: 0.938rem;
                    line-height: 1.7;
                    color: #6b7280;
                    margin: 0;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background: rgba(99, 102, 241, 0.1);
                    color: #6366f1;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                }

                .social-link:hover {
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                    color: white;
                    transform: translateY(-2px);
                }

                .footer-links-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2.5rem;
                }

                @media (min-width: 640px) {
                    .footer-links-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }

                .footer-column {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .column-title {
                    font-size: 0.938rem;
                    font-weight: 700;
                    color: #111827;
                    margin: 0 0 0.5rem 0;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .footer-link {
                    font-size: 0.938rem;
                    color: #6b7280;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    font-weight: 500;
                }

                .footer-link:hover {
                    color: #6366f1;
                    transform: translateX(3px);
                }

                .footer-newsletter {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    padding: 3rem;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
                    border-radius: 24px;
                    border: 1.5px solid rgba(99, 102, 241, 0.1);
                    margin-bottom: 3rem;
                }

                @media (min-width: 768px) {
                    .footer-newsletter {
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }
                }

                .newsletter-content {
                    flex: 1;
                }

                .newsletter-title {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #111827;
                    margin: 0 0 0.5rem 0;
                }

                .newsletter-description {
                    font-size: 0.938rem;
                    color: #6b7280;
                    margin: 0;
                }

                .newsletter-form {
                    display: flex;
                    gap: 0.75rem;
                    flex: 1;
                    max-width: 400px;
                }

                .newsletter-input {
                    flex: 1;
                    padding: 0.875rem 1.25rem;
                    border: 2px solid #e5e7eb;
                    border-radius: 12px;
                    font-size: 0.938rem;
                    transition: all 0.2s ease;
                    background: white;
                }

                .newsletter-input:focus {
                    outline: none;
                    border-color: #6366f1;
                    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
                }

                .newsletter-button {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1.75rem;
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.938rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                .newsletter-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
                }

                .newsletter-button svg {
                    transition: transform 0.3s ease;
                }

                .newsletter-button:hover svg {
                    transform: translateX(3px);
                }

                .footer-bottom {
                    padding: 2rem 0;
                }

                .footer-bottom-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    text-align: center;
                }

                @media (min-width: 768px) {
                    .footer-bottom-content {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                }

                .copyright {
                    margin: 0;
                    font-size: 0.875rem;
                    color: #6b7280;
                    font-weight: 500;
                }

                .legal-links {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .legal-link {
                    font-size: 0.875rem;
                    color: #6b7280;
                    text-decoration: none;
                    transition: color 0.2s ease;
                    font-weight: 500;
                }

                .legal-link:hover {
                    color: #6366f1;
                }

                .separator {
                    color: #d1d5db;
                    font-size: 0.875rem;
                }

                @media (max-width: 640px) {
                    .newsletter-form {
                        flex-direction: column;
                        max-width: 100%;
                    }

                    .newsletter-button {
                        justify-content: center;
                    }
                }
            `}</style>
        </>
    );
}