import styles from "./Background.module.css";

import { useEffect, useState } from "react";

function Background({ isExploring }) {
    const [isActive, setIsActive] = useState(false);
    const [offset, setOffset] = useState({ x: 50, y: 50 });

    useEffect(() => {
        setTimeout(() => {
            setIsActive(true);
        }, 5000);
    }, [isExploring]);

    const handleMouseMove = (e) => {
        const xPercent = (e.clientX / window.innerWidth) * 100;
        const yPercent = (e.clientY / window.innerHeight) * 100;

        const movemenetFactor = 0.3;

        const x = 50 + (xPercent - 50) * movemenetFactor;
        const y = 50 + (yPercent - 50) * movemenetFactor;

        setOffset({ x, y });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    });

    const bgStyle = isActive
        ? {
              backgroundPosition: `0 0, ${offset.x}% ${offset.y}%`,
              transition: "none",
          }
        : {};

    return <div style={bgStyle} className={`${styles.background} ${isExploring ? styles.exploring : ""}`}></div>;
}

export { Background };
