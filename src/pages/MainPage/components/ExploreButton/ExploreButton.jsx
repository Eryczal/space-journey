import styles from "./ExploreButton.module.css";

function ExploreButton({ start }) {
    return (
        <div className={styles.button} onClick={start}>
            Eksploruj
        </div>
    );
}

export { ExploreButton };
