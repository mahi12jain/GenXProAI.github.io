


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-main">
                        <div className="footer-brand-section">
                            <div className="brand-logo">
                                <span className="brand-name">GenX Pro</span>
                                <span className="brand-ai">AI</span>
                            </div>
                            <p className="brand-tagline">
                                Intelligent Automation for the Future of Business
                            </p>
                            <p className="brand-description">
                                Empowering enterprises with cutting-edge AI solutions that drive innovation, efficiency, and sustainable growth.
                            </p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/genx-pro-ai-688302392" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/genxproai/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="footer-links-grid">
                            {/* <div className="footer-column">
                                <h4 className="column-title">Solutions</h4>
                                <a href="#divisions" className="footer-link">AI Automation</a>
                                <a href="#divisions" className="footer-link">Custom Development</a>
                                <a href="#divisions" className="footer-link">Integration Services</a>
                                <a href="#divisions" className="footer-link">Consulting</a>
                            </div> */}

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
                                <a href="mailto:flowboticai.team@gmail.com" className="footer-link">flowboticai.team@gmail.com</a>
                                <a href="tel:+919327178988" className="footer-link">+91 9327178988</a>
                            </div>
                        </div>
                    </div>
{/* 
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
                                © {currentYear} Flowbotic AI. All rights reserved.
                            </p>
                            <div className="legal-links">
                                <a href="#" className="legal-link">Privacy Policy</a>
                                <span className="separator">•</span>
                                <a href="#" className="legal-link">Terms of Service</a>
                                <span className="separator">•</span>
                                <a href="#" className="legal-link">Cookie Policy</a>
                            </div>
                        </div>
                    </div> */}
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
