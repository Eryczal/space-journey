import styles from "./MainPage.module.css";

import { Background } from "../components/Background";
import { ExploreButton } from "../components/ExploreButton";
import { Header } from "../components/Header";
import { ReadyText } from "../components/ReadyText";

import { useState } from "react";

function MainPage() {
    const [exploring, setExploring] = useState(false);

    const startExploration = () => {
        setExploring(true);
    };

    return (
        <>
            <Header />
            <main className={styles.page}>
                <ReadyText />
                <ExploreButton start={startExploration} />
                <Background isExploring={exploring} />
            </main>
        </>
    );
}

export { MainPage };
