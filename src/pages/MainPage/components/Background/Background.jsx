import styles from "./Background.module.css";

function Background({ isExploring }) {
    return <div className={`${styles.background} ${isExploring ? styles.exploring : ""}`}></div>;
}

export { Background };
