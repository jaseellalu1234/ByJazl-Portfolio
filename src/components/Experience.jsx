import { useState } from "react";
import serviceUiImg from "../assets/images/service-ui.png";
import serviceWebImg from "../assets/images/service-web.png";
import serviceBrandingImg from "../assets/images/service-branding.png";
import "../styles/experience.css";

const experiences = [
    {
        id: "freelance",
        title: "Freelance",
        role: "Ui Developer",
        duration: "Sep 2025 - Now",
        image: serviceUiImg,
    },
    {
        id: "voyon",
        title: "Voyon Technologies",
        role: "Ui Developer",
        duration: "Feb 2022 - Sep 2025",
        image: serviceWebImg,
    },
    {
        id: "desparrow",
        title: "De Sparrow Solutions",
        role: "Web Designer",
        duration: "Feb 2020 - Sep 2021",
        image: serviceBrandingImg,
    },
];

function Experience() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="experience-section" id="experience">
            {/* Watermark */}
            <span className="experience-watermark">EXPERIENCE</span>

            <div className="container experience-inner">
                <div className="experience-header">
                    <h2 className="experience-heading">/EXPERIENCE</h2>
                    <span className="experience-years">4+ years of experience</span>
                </div>

                {/* Experience rows */}
                <ul className="experience-list">
                    {experiences.map((exp) => (
                        <li
                            key={exp.id}
                            className={`experience-item${hovered === exp.id ? " hovered" : ""}`}
                            onMouseEnter={() => setHovered(exp.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <div className="experience-item-content">
                                <span className="experience-item-title">{exp.title}</span>
                                <span className="experience-item-role">{exp.role}</span>
                            </div>
                            <span className="experience-item-duration">{exp.duration}</span>

                            {/* Floating image — appears above current hovered row */}
                            <div className={`experience-float-image${hovered === exp.id ? " visible" : ""}`}>
                                {exp.image && (
                                    <img src={exp.image} alt={exp.title} />
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Experience;
