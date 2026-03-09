import { useState, useEffect } from "react";
import "../styles/contact.css";
import profileImg from "../assets/images/Profile-img.png"; // or whichever profile fits best, let's use small Profile.png if available, but Profile-img.png is high quality
import profileImgSmall from "../assets/images/Profile.png";

function Contact() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const contactSection = document.getElementById("contact");
        if (!contactSection) return;

        const observer = new IntersectionObserver(
            (entries) => {
                setIsVisible(entries[0].isIntersecting);
            },
            { threshold: 0.1 } // Show when at least 10% of contact section is visible
        );

        observer.observe(contactSection);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="contact-section" id="contact">
            {/* Top Shadow from the dark section above if needed, achieved via CSS */}

            <div className="container contact-inner">
                {/* Available Badge */}
                <div className="contact-badge">
                    <span className="contact-badge-dot"></span>
                    Available for New Project
                </div>

                {/* Main Content */}
                <h2 className="contact-heading">HAVE A PROJECT IN MIND?</h2>
                <p className="contact-text">
                    Together, we can create something clear and impactful. Let&apos;s collaborate to bring our
                    ideas to life in a way that resonates with everyone.
                </p>

                {/* Hire Me CTA */}
                <a href="https://mail.google.com/mail/?view=cm&to=jaseel.vpmpd@gmail.com" className="contact-cta">
                    Hire me
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-cta-icon">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </a>

                {/* Bottom Links */}
                <div className="contact-bottom-links">
                    {/* Left: Profile Button */}
                    <a href="#" className="contact-profile-btn">
                        <img src={profileImgSmall} alt="Jaseel VP" className="contact-profile-img" />
                        <span className="contact-profile-name">Jaseel VP</span>
                    </a>

                    {/* Right: Socials */}
                    <div className="contact-socials">
                        <a href="https://www.linkedin.com/in/jaseel-vp-a136121a0/" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            <span className="contact-social-label">Linkedin</span>
                        </a>
                        <a href="https://github.com/jaseellalu1234" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            <span className="contact-social-label">Github</span>
                        </a>
                        <a href="https://dribbble.com/JLcreations" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                            </svg>
                            <span className="contact-social-label">Dribble</span>
                        </a>
                        <a href="https://www.instagram.com/byjazl/" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            <span className="contact-social-label">Instagram</span>
                        </a>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="contact-footer-text">
                    <p>Designed with ❤️, Logic, and a lot of Chai.</p>
                    <p>Copyright © 2025 jaseel.</p>
                    <p>All rights reserved.</p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <a
                href="#home"
                className={`contact-scroll-top${isVisible ? " visible" : ""}`}
                aria-label="Scroll to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
            </a>
        </section>
    );
}

export default Contact;
