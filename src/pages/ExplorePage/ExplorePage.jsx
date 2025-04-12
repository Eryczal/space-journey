import styles from "./ExplorePage.module.css";

import { useEffect, useState } from "react";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Description } from "./components/Description";
import Planet from "./components/Planet";

const planets = [
    {
        name: "Mercury",
        scale: 0.006,
    },
    {
        name: "Venus",
        scale: 0.006,
    },
    {
        name: "Earth",
        scale: 0.006,
    },
];

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
            <main className={styles.page} onDoubleClick={changePlanet}>
                <div className={styles.planetContainer}>
                    <Canvas camera={{ position: [0, 0, 8] }} gl={{ localClippingEnabled: true }}>
                        <ambientLight intensity={5} />
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
                <Description selectedPlanet={planets[planetIndex].name} />
                <Background isExploring={true} />
            </main>
        </>
    );
}

export { ExplorePage };
