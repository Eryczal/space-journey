import styles from "./MoveableBackground.module.css";

import { useEffect, useState } from "react";

function MoveableBackground() {
    const [offset, setOffset] = useState({ x: 50, y: 50 });

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleMouseMove = (e) => {
        const xPercent = (e.clientX / window.innerWidth) * 100;
        const yPercent = (e.clientY / window.innerHeight) * 100;

        const movemenetFactor = 0.3;

        const x = 50 + (xPercent - 50) * movemenetFactor;
        const y = 50 + (yPercent - 50) * movemenetFactor;

        setOffset({ x, y });
    };

    const bgStyle = {
        backgroundPosition: `${offset.x}% ${offset.y}%`,
    };

    return <div style={bgStyle} className={`${styles.background}`}></div>;
}

export { MoveableBackground };
