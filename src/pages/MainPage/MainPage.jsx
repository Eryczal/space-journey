import { useNavigate } from "react-router";
import styles from "./MainPage.module.css";

import { Background } from "./components/Background/Background";
import { ExploreButton } from "./components/ExploreButton/ExploreButton";
import { ReadyText } from "./components/ReadyText/ReadyText";

import { useState } from "react";

function MainPage() {
    const navigate = useNavigate();
    const [exploring, setExploring] = useState(false);

    const startExploration = () => {
        setExploring(true);

        setTimeout(() => {
            navigate("/explore");
        }, 3000);
    };

    return (
        <>
            <main className={styles.page}>
                <div className={styles.container}>
                    <ReadyText />
                    <ExploreButton start={startExploration} />
                </div>
                <Background isExploring={exploring} />
            </main>
        </>
    );
}

export { MainPage };
