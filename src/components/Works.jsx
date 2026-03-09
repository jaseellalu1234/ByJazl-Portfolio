import { useState, useEffect } from "react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import "../styles/works.css";

const projects = [
    {
        id: 1,
        title: "Voyon Folks – HRMS Web App Landing Page",
        tag: "Exploration",
        image: project1,
        categories: ["Web Designing"],
        links: ["Landing Page", "Demo"],
        description:
            "A modern, responsive landing page for Voyon Folks' HRMS web application. Focused on clear hierarchy, conversion-driven layout, and clean UI patterns.",
        year: "2024",
        role: "UI Designer & Developer",
    },
    {
        id: 2,
        title: "Voyon Folks – HRMS Web App Landing Page",
        tag: "Exploration",
        image: project2,
        categories: ["Web Designing"],
        links: ["Landing Page", "Demo"],
        description:
            "Second iteration of the HRMS landing page with refined visual language, improved mobile responsiveness, and enhanced CTA flow.",
        year: "2024",
        role: "UI Designer & Developer",
    },
    {
        id: 3,
        title: "Brand Identity – Creative Director Portfolio",
        tag: "Branding",
        image: project1,
        categories: ["Web Designing"],
        links: ["Live Site", "Case Study"],
        description:
            "Full brand identity system and portfolio website for a creative director. Includes typography system, color palette, and a bespoke portfolio layout.",
        year: "2024",
        role: "Brand Designer",
    },
    {
        id: 4,
        title: "Reflect Fashion – E-commerce Experience",
        tag: "UI Design",
        image: project2,
        categories: ["Web Designing", "Video Editing"],
        links: ["Landing Page", "Demo"],
        description:
            "High-fidelity e-commerce UI for a fashion brand. Features editorial-style product display, smooth transitions, and a full video campaign.",
        year: "2024",
        role: "UI Designer & Video Editor",
    },
];

const filters = ["All", "Web Designing", "Video Editing"];

function Works() {
    const [active, setActive] = useState("All");
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

    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.categories.includes(active));

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
                                    {project.links.map((link) => (
                                        <span key={link} className="works-link-pill">
                                            {link}
                                        </span>
                                    ))}
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
                    <div className={`works-panel${panelVisible ? " works-panel--visible" : ""}`}>
                        {/* Close button */}
                        <button className="works-panel-close" onClick={closePanel} aria-label="Close">
                            ✕
                        </button>

                        <div className={`works-panel-content${panelVisible ? " works-panel-content--visible" : ""}`}>
                            {/* Project image */}
                            <div className="works-panel-image">
                                <img src={selected.image} alt={selected.title} />
                                <span className="works-panel-tag">{selected.tag}</span>
                            </div>

                            {/* Meta row */}
                            <div className="works-panel-meta">
                                <span>{selected.year}</span>
                                <span className="works-panel-dot">·</span>
                                <span>{selected.role}</span>
                            </div>

                            {/* Title */}
                            <h2 className="works-panel-title">{selected.title}</h2>

                            {/* Description */}
                            <p className="works-panel-desc">{selected.description}</p>

                            {/* Link pills */}
                            <div className="works-panel-links">
                                {selected.links.map((link) => (
                                    <a key={link} href="#" className="works-panel-pill">
                                        {link} <span>↗</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}

export default Works;
