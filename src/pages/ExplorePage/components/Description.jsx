import { useEffect, useState } from "react";
import styles from "./Description.module.css";

function Description({ selectedPlanet }) {
    const [data, setData] = useState(null);
    const [page, setPage] = useState(0);

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

        loadPlanetData();
    }, [selectedPlanet]);

    if (!data) {
        return <></>;
    }

    return (
        <div className={styles.container}>
            <nav className={styles.navigation}>
                <div className={styles.dot}></div>
            </nav>
            <div className={styles.content}>
                <h1>{data.name}</h1>
                {data.pages[page].map((data) => {
                    return <p>{data}</p>;
                })}
            </div>
        </div>
    );
}

export { Description };
