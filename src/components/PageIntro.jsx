import { useEffect, useRef } from "react";
import gsap from "gsap";

function PageIntro({ onComplete }) {
    const overlayRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Hold black for a moment, then fade out
        tl.to(overlayRef.current, {
            duration: 0.1,
            opacity: 1, // ensure visible
        }).to(overlayRef.current, {
            duration: 0.8,
            opacity: 0,
            delay: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
                if (overlayRef.current) {
                    overlayRef.current.style.pointerEvents = "none";
                    overlayRef.current.style.display = "none";
                }
                if (onComplete) onComplete();
            },
        });

        return () => tl.kill();
    }, [onComplete]);

    return <div ref={overlayRef} className="page-intro-overlay" />;
}

export default PageIntro;
