import styles from "./ExplorePage.module.css";

import { Suspense, useEffect } from "react";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./components/Earth";
import { OrbitControls } from "@react-three/drei";

function ExplorePage() {
    useEffect(() => {
        document.body.style.setProperty("--page-stroke-color", "#070908");
    }, []);

    return (
        <>
            <Header />
            <main className={styles.page}>
                <div className={styles.planetContainer}>
                    <Canvas camera={{ position: [0, 0, 10] }} gl={{ localClippingEnabled: true }}>
                        <ambientLight intensity={2} />
                        <Suspense fallback={null}>
                            <Earth />
                        </Suspense>
                        <OrbitControls
                            enableZoom={true}
                            minDistance={6}
                            maxDistance={14}
                            autoRotate
                            autoRotateSpeed={-0.4}
                            enableDamping
                            dampingFactor={0.05}
                        />
                    </Canvas>
                </div>
                <Background isExploring={true} />
            </main>
        </>
    );
}

export { ExplorePage };
