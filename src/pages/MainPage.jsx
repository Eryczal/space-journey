import styles from "./MainPage.module.css";

import { Background } from "../components/Background";
import { ExploreButton } from "../components/ExploreButton";
import { Header } from "../components/Header";
import { ReadyText } from "../components/ReadyText";

import { useEffect, useState } from "react";
import { usePage } from "../contexts/PageContext";

function MainPage() {
    const { setPage } = usePage();
    const [exploring, setExploring] = useState(false);

    const startExploration = () => {
        setExploring(true);

        setTimeout(() => {
            setPage("explore");
        }, 3000);
    };

    useEffect(() => {
        document.body.style.transition = "-webkit-text-stroke 0.5s ease";
    });

    return (
        <>
            <main className={styles.page}>
                <ReadyText />
                <ExploreButton start={startExploration} />
                <Background isExploring={exploring} />
            </main>
        </>
    );
}

export { MainPage };
