import { useEffect, useState } from "react";
import styles from "./Description.module.css";

function Description({ selectedPlanet, isLast, changePlanet }) {
    const [data, setData] = useState(null);
    const [selectedPage, setSelectedPage] = useState(0);

    useEffect(() => {
        if (!selectedPlanet) {
            return;
        }

        const loadPlanetData = async () => {
            try {
                const res = await fetch(`/${selectedPlanet.toLowerCase()}/${selectedPlanet}.json`);
                const json = await res.json();
                setData(json);
            } catch (e) {
                console.log(e);
            }
        };

        setSelectedPage(0);

        loadPlanetData();
    }, [selectedPlanet]);

    if (!data) {
        return <></>;
    }

    return (
        <div className={styles.container}>
            <nav className={styles.navigation}>
                {data.pages.map((page, i) => {
                    return <div className={`${styles.dot} ${i === selectedPage ? styles.active : ""}`} key={i} onClick={() => setSelectedPage(i)}></div>;
                })}
            </nav>
            <div className={styles.content}>
                <h1>{data.name}</h1>
                {data.pages[selectedPage].map((data, i) => {
                    return <p key={i}>{data}</p>;
                })}
            </div>
            <div className={styles.nextPlanet} onClick={changePlanet}>
                {!isLast ? "Dalej ⟶" : "Zacznij od nowa"}
            </div>
        </div>
    );
}

export { Description };
