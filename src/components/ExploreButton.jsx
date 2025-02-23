import styles from "./ExploreButton.module.css";

function ExploreButton({ start }) {
    return (
        <div className={styles.button} onClick={start}>
            tekst
        </div>
    );
}

export { ExploreButton };
