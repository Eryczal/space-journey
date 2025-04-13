import styles from "./ExplorePage.module.css";

import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Description } from "./components/Description/Description";
import Planet from "./components/Planet";
import { MoveableBackground } from "./components/MoveableBackground/MoveableBackground";
import { planets } from "../../data/planetData";

function ExplorePage() {
    const [planetIndex, setPlanetIndex] = useState(0);

    useEffect(() => {
        document.body.style.setProperty("--page-stroke-color", "#070908");
    }, []);

    const changePlanet = () => {
        if (planetIndex === planets.length - 1) {
            setPlanetIndex(0);
            return;
        }

        setPlanetIndex((prev) => prev + 1);
    };

    return (
        <>
            <Header />
            <main className={styles.page}>
                <div className={styles.planetContainer}>
                    <Canvas camera={{ position: [0, 0, 8] }} gl={{ localClippingEnabled: true }} style={planets[planetIndex].additionalStyle}>
                        <ambientLight intensity={planets[planetIndex].light} />
                        <Planet name={planets[planetIndex].name} scale={planets[planetIndex].scale} />
                        <OrbitControls
                            enableZoom={true}
                            minDistance={6}
                            maxDistance={14}
                            autoRotate
                            autoRotateSpeed={-0.4}
                            rotateSpeed={0.2}
                            enableDamping
                            dampingFactor={0.05}
                            minPolarAngle={Math.PI * 0.25}
                            maxPolarAngle={Math.PI * 0.75}
                        />
                    </Canvas>
                </div>
                <Description selectedPlanet={planets[planetIndex].name} isLast={planetIndex >= planets.length - 1} changePlanet={changePlanet} />
                <MoveableBackground />
            </main>
        </>
    );
}

export { ExplorePage };
