import { useState } from "react";
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
    },
    {
        id: 2,
        title: "Voyon Folks – HRMS Web App Landing Page",
        tag: "Exploration",
        image: project2,
        categories: ["Web Designing"],
        links: ["Landing Page", "Demo"],
    },
    {
        id: 3,
        title: "Brand Identity – Creative Director Portfolio",
        tag: "Branding",
        image: project1,
        categories: ["Web Designing"],
        links: ["Live Site", "Case Study"],
    },
    {
        id: 4,
        title: "Reflect Fashion – E-commerce Experience",
        tag: "UI Design",
        image: project2,
        categories: ["Web Designing", "Video Editing"],
        links: ["Landing Page", "Demo"],
    },
];

const filters = ["All", "Web Designing", "Video Editing"];

function Works() {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.categories.includes(active));

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
                        <div key={project.id} className="works-card">
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
        </section>
    );
}

export default Works;
