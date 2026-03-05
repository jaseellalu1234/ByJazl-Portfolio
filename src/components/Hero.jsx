import profileImage from "../assets/images/Profile-img.png";
import SocialLinks from "./Social-Button";
import PageIntro from "./PageIntro";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [navDark, setNavDark] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const hasPlayed = sessionStorage.getItem("introPlayed");

  // Refs for GSAP targets
  const logoRef = useRef(null);
  const badgeRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroImageRef = useRef(null);
  const bottomNavRef = useRef(null);
  const heroContentRef = useRef(null);
  const socialLinksRef = useRef(null);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  // Run intro animation — called by PageIntro after overlay fades
  const runIntro = () => {
    sessionStorage.setItem("introPlayed", "1");
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Top-to-bottom: logo → badge → title
    tl.fromTo(
      logoRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }
    )
      .fromTo(
        badgeRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.45"
      )
      .fromTo(
        heroTitleRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        "-=0.45"
      )
      // Bottom-to-top: image → nav → content → social
      .fromTo(
        heroImageRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        "-=0.3"
      )
      .fromTo(
        bottomNavRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        heroContentRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.4"
      )
      .fromTo(
        socialLinksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5"
      );
  };

  // Darken nav when works or services section is in view
  useEffect(() => {
    const sections = ["works", "services", "experience"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting);
        if (anyVisible) setNavDark(true);
        else if (entries.every((e) => !e.isIntersecting)) setNavDark(false);
      },
      { threshold: 0.1 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Hide nav when contact section is in view
  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setNavHidden(true);
        } else {
          setNavHidden(false);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  // Hide elements initially — only on first load
  useEffect(() => {
    if (hasPlayed) return; // skip: already animated
    gsap.set(
      [logoRef.current, badgeRef.current, heroTitleRef.current,
      heroImageRef.current, bottomNavRef.current,
      heroContentRef.current, socialLinksRef.current],
      { opacity: 0 }
    );
  }, []);

  return (
    <>
      {!hasPlayed && <PageIntro onComplete={runIntro} />}

      <section className="section" id="home">
        <div className="container">
          {/* TOP BAR */}
          <div className="hero-top">
            <div className="availability-badge" ref={badgeRef}>
              <span className="status-dot"></span>
              <span className="badge-text">Available<span className="badge-text-full"> for New Project</span></span>
            </div>
            <div className="logo" ref={logoRef}>Jaz.</div>
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* MAIN HERO */}
          <div className="hero-main">
            <div className="hero-visual">
              <h1 className="hero-title" ref={heroTitleRef}>
                <span className="hero-by">BY</span>
                <span className="hero-name">JAZL</span>
              </h1>
              <div className="hero-image-wrapper" ref={heroImageRef}>
                <img src={profileImage} className="hero-image" alt="Jaz profile" />
                <div className="hero-image-gradient" />
              </div>
            </div>
          </div>

          {/* DESKTOP FLOATING NAV */}
          <nav className={`hero-bottom-nav${navDark ? " hero-bottom-nav--dark" : ""}${navHidden ? " hero-bottom-nav--hidden" : ""}`} ref={bottomNavRef}>
            <ul>
              <li className="nav-logo-item">
                <a href="#home" className="nav-logo">Jaz.</a>
              </li>
              <li className="nav-separator">|</li>
              <li>
                <a href="#home" aria-label="Home">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  <span className="nav-label">Home</span>
                </a>
              </li>
              <li>
                <a href="#works" aria-label="Works">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                  <span className="nav-label">Works</span>
                </a>
              </li>
              <li>
                <a href="#services" aria-label="Services">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span className="nav-label">Services</span>
                </a>
              </li>
              <li>
                <a href="#experience" aria-label="Experience">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                  <span className="nav-label">Experience</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* BOTTOM CONTENT */}
          <div className="Bottom-section">
            <div className="hero-content" ref={heroContentRef}>
              <h2>UI Developer</h2>
              <p>
                Architecting seamless user experiences with<br /> clean code
                and bold design.
              </p>
              <button className="button-primary">Let's Collaborate</button>
            </div>
            <div ref={socialLinksRef}><SocialLinks /></div>
          </div>
        </div>

        {/* MOBILE NAV DRAWER */}
        {menuOpen && (
          <div className={`mobile-nav-drawer${isClosing ? " mobile-nav-drawer--closing" : ""}`}>
            <button
              className="mobile-nav-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
            <ul>
              <li onClick={closeMenu}><a href="#home">Home</a></li>
              <li onClick={closeMenu}><a href="#works">Works</a></li>
              <li onClick={closeMenu}><a href="#services">Services</a></li>
              <li onClick={closeMenu}><a href="#experience">Experience</a></li>
            </ul>
          </div>
        )}
      </section>
    </>
  );
}

export default Hero;
