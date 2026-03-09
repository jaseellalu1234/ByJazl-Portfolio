import { useState, useEffect } from "react";
import project1 from "../assets/images/project-3.jpg";
import project2 from "../assets/images/project-5.jpg";
import project3 from "../assets/images/project-6.jpg";
import project4 from "../assets/images/project-7.jpg";
import { FaReact, FaSass, FaStripe } from "react-icons/fa";
import {
    SiJavascript,
    SiTailwindcss,
    SiFramer,
    SiGreensock,
    SiNextdotjs,
    SiTypescript,
    SiRedux,
    SiStyledcomponents
} from "react-icons/si";
import "../styles/works.css";

const techIcons = {
    "React": <FaReact />,
    "JavaScript": <SiJavascript />,
    "Tailwind CSS": <SiTailwindcss />,
    "Framer Motion": <SiFramer />,
    "GSAP": <SiGreensock />,
    "Next.js": <SiNextdotjs />,
    "TypeScript": <SiTypescript />,
    "SCSS": <FaSass />,
    "Redux": <SiRedux />,
    "Stripe": <FaStripe />,
    "Styled Components": <SiStyledcomponents />
};

const projects = [
    {
        id: 1,
        title: "Voyon Folks – HRMS Web App Landing Page",
        tag: "UI Design",
        image: project1,
        categories: ["Web Designing"],
        role: "Frontend Developer",
        year: "2024",
        type: "Web Application",
        description:
            "A modern, responsive landing page for Voyon Folks' HRMS web application. Focused on clear hierarchy, conversion-driven layout, and clean UI patterns.",
        techStack: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
        features: [
            "Responsive design",
            "Interactive components",
            "Conversion-optimized layout",
        ],
        liveDemo: "https://example.com/demo",
        sourceCode: "https://github.com/example/code",
    },
    {
        id: 2,
        title: "Voyon Folks – HRMS Web App Landing Page",
        tag: "Landing Page",
        image: project2,
        categories: ["Web Designing"],
        role: "Frontend Developer",
        year: "2024",
        type: "Web Application",
        description:
            "Second iteration of the HRMS landing page with refined visual language, improved mobile responsiveness, and enhanced CTA flow.",
        techStack: ["React", "Tailwind CSS", "GSAP"],
        features: [
            "Complex animations",
            "Performance optimized",
            "Accessible components",
        ],
        liveDemo: "https://example.com/demo",
        sourceCode: "https://github.com/example/code",
    },
    {
        id: 3,
        title: "Brand Identity – Creative Director Portfolio",
        tag: "Dashboard",
        image: project3,
        categories: ["Web Designing"],
        role: "Frontend Developer",
        year: "2024",
        type: "Web Application",
        description:
            "Full brand identity system and portfolio website for a creative director. Includes typography system, color palette, and a bespoke portfolio layout.",
        techStack: ["Next.js", "TypeScript", "SCSS", "Framer Motion"],
        features: [
            "Custom routing transitions",
            "Dynamic themed layouts",
            "CMS integration",
        ],
        liveDemo: "https://example.com/demo",
        sourceCode: "https://github.com/example/code",
    },
    {
        id: 4,
        title: "Reflect Fashion – E-commerce Experience",
        tag: "E-commerce",
        image: project4,
        categories: ["Web Designing", "Creative Works"],
        role: "Frontend Developer",
        year: "2024",
        type: "Web Application",
        description:
            "High-fidelity e-commerce UI for a fashion brand. Features editorial-style product display, smooth transitions, and a full video campaign.",
        techStack: ["React", "Redux", "Stripe", "Styled Components"],
        features: [
            "Shopping cart state management",
            "Checkout flow integration",
            "Advanced product filtering",
        ],
        liveDemo: "https://example.com/demo",
        sourceCode: "https://github.com/example/code",
    },
];

const filters = ["Web Designing", "Creative Works"];

function Works() {
    const [active, setActive] = useState("Web Designing");
    const [selected, setSelected] = useState(null);
    const [panelVisible, setPanelVisible] = useState(false);

    // Prevent body scroll when panel is visible
    useEffect(() => {
        if (panelVisible) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [panelVisible]);

    const filtered = projects.filter((p) => p.categories.includes(active));

    const openPanel = (project) => {
        setSelected(project);
        // Small delay so React renders the panel before CSS transition fires
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setPanelVisible(true));
        });
    };

    const closePanel = () => {
        setPanelVisible(false);
        setTimeout(() => setSelected(null), 500); // match transition duration
    };

    return (
        <section className="works-section" id="works">
            {/* Watermark */}
            <span className="works-watermark">PORTFOLIO</span>

            <div className="container">
                {/* Heading */}
                <h2 className="works-heading">/SELECTED WORK</h2>

                {/* Filter + View All */}
                <div className="works-toolbar">
                    <div className="works-filters">
                        {filters.map((f) => (
                            <button
                                key={f}
                                className={`works-filter-btn${active === f ? " active" : ""}`}
                                onClick={() => setActive(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                    <button className="works-view-all">
                        View All Work <span className="arrow">↗</span>
                    </button>
                </div>

                {/* Grid */}
                <div className="works-grid">
                    {filtered.map((project) => (
                        <div
                            key={project.id}
                            className="works-card"
                            onClick={() => openPanel(project)}
                        >
                            <div className="works-card-image">
                                <span className="works-card-tag">{project.tag}</span>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="works-card-info">
                                <h3 className="works-card-title">{project.title}</h3>
                                <div className="works-card-links">
                                    <span className="works-link-pill">View Project</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Detail Panel ── */}
            {selected && (
                <>
                    {/* Backdrop blur overlay */}
                    <div
                        className={`works-backdrop${panelVisible ? " works-backdrop--visible" : ""}`}
                        onClick={closePanel}
                    />

                    {/* Slide panel */}
                    <div
                        className={`works-panel${panelVisible ? " works-panel--visible" : ""}`}
                        data-lenis-prevent="true"
                    >
                        {/* Close button */}
                        <button className="works-panel-close" onClick={closePanel} aria-label="Close">
                            ✕
                        </button>

                        <div className={`works-panel-content${panelVisible ? " works-panel-content--visible" : ""}`}>
                            {/* Project Image */}
                            <div className="works-panel-image">
                                <img src={selected.image} alt={selected.title} />
                            </div>

                            <hr className="works-panel-divider" />

                            {/* Title & Meta Data */}
                            <h2 className="works-panel-title">{selected.title}</h2>
                            <div className="works-panel-meta-list">
                                <p><strong>Role:</strong> {selected.role}</p>
                                <p><strong>Year:</strong> {selected.year}</p>
                                <p><strong>Type:</strong> {selected.type}</p>
                            </div>

                            <hr className="works-panel-divider" />

                            {/* Description */}
                            <div className="works-panel-section">
                                <h3>Description</h3>
                                <p className="works-panel-desc">{selected.description}</p>
                            </div>

                            <hr className="works-panel-divider" />

                            {/* Tech Stack */}
                            <div className="works-panel-section">
                                <h3>Tech Stack</h3>
                                <ul className="works-panel-tech-list">
                                    {selected.techStack && selected.techStack.map((tech) => (
                                        <li key={tech} className="works-panel-tech-item">
                                            {techIcons[tech] && <span className="tech-icon">{techIcons[tech]}</span>}
                                            <span className="tech-name">{tech}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <hr className="works-panel-divider" />

                            {/* Features */}
                            <div className="works-panel-section">
                                <h3>Features</h3>
                                <ul className="works-panel-features">
                                    {selected.features && selected.features.map((feature, idx) => (
                                        <li key={idx}>• {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sticky Footer Links */}
                        <div className={`works-panel-footer${panelVisible ? " works-panel-footer--visible" : ""}`}>
                            <div className="works-panel-links">
                                {selected.liveDemo && (
                                    <a href={selected.liveDemo} target="_blank" rel="noopener noreferrer" className="works-panel-pill">
                                        Live Demo <span>↗</span>
                                    </a>
                                )}
                                {selected.sourceCode && (
                                    <a href={selected.sourceCode} target="_blank" rel="noopener noreferrer" className="works-panel-pill works-panel-pill--outline">
                                        View Code <span>↗</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}

export default Works;
