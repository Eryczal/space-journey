import styles from "./ExplorePage.module.css";

import { useRef, useState } from "react";
import { Header } from "./components/Header/Header";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Description } from "./components/Description/Description";
import Planet from "./components/Planet";
import { MoveableBackground } from "./components/MoveableBackground/MoveableBackground";
import { planets } from "../../data/planetData";

function ExplorePage() {
    const lightRef = useRef(null);
    const [planetIndex, setPlanetIndex] = useState(0);

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
                        <spotLight
                            ref={lightRef}
                            position={[0, 0, 12]}
                            target-position={[0, 0, 8]}
                            intensity={planets[planetIndex].light}
                            penumbra={1}
                            angle={Math.PI / 10}
                            castShadow
                        />
                        <ambientLight intensity={planets[planetIndex].ambientLight || 0} />
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
                            minPolarAngle={Math.PI * 0.2}
                            maxPolarAngle={Math.PI * 0.8}
                            onChange={(e) => {
                                if (!e) {
                                    return;
                                }

                                const camera = e.target.object;

                                if (lightRef.current) {
                                    const direction = camera.position.clone().normalize().multiplyScalar(12);
                                    lightRef.current.position.set(direction.x, direction.y, direction.z);
                                    lightRef.current.angle = Math.PI / (12 - 0.5 * (camera.position.length() - 6));
                                }
                            }}
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
