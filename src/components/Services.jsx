import { useState } from "react";
import serviceUiImg from "../assets/images/service-ui.png";
import serviceWebImg from "../assets/images/service-web.png";
import serviceBrandingImg from "../assets/images/service-branding.png";
import serviceVideoImg from "../assets/images/service-video.png";
import "../styles/services.css";

const services = [
    {
        id: "ui",
        title: "UI DEVELOPMENT",
        description:
            "Designing clear and scalable interfaces for dashboard, mobile apps, and websites.",
        image: serviceUiImg,
    },
    {
        id: "web",
        title: "WEB DESIGN & DEV",
        description:
            "End-to-end web experiences — from wireframes to fully deployed, responsive websites.",
        image: serviceWebImg,
    },
    {
        id: "branding",
        title: "BRANDING",
        description:
            "Visual identity systems that communicate your brand's voice with clarity and impact.",
        image: serviceBrandingImg,
    },
    {
        id: "video",
        title: "CREATIVE WORKS",
        description:
            "Cinematic edits, reels, and motion graphics that keep your audience engaged.",
        image: serviceVideoImg,
    },
];

function Services() {
    const [hovered, setHovered] = useState(null);

    const hoveredService = services.find((s) => s.id === hovered);

    return (
        <section className="services-section" id="services">
            {/* Watermark */}
            <span className="services-watermark">SERVICE</span>

            <div className="container services-inner">
                <h2 className="services-heading">/SERVICE</h2>

                {/* Service rows */}
                <ul className="services-list">
                    {services.map((s) => (
                        <li
                            key={s.id}
                            className={`services-item${hovered === s.id ? " hovered" : ""}`}
                            onMouseEnter={() => setHovered(s.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <div className="services-item-content">
                                <span className="services-item-title">{s.title}</span>
                                <p className="services-item-desc">{s.description}</p>
                            </div>
                            <span className="services-item-arrow">↗</span>

                            {/* Floating image — appears above current hovered row */}
                            <div className={`services-float-image${hovered === s.id ? " visible" : ""}`}>
                                {s.image && (
                                    <img src={s.image} alt={s.title} />
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Services;
