import styles from "./ReadyText.module.css";

function ReadyText() {
    return (
        <div className={styles.container}>
            <h1>Odkryj kosmos</h1>
            <div className={styles.text}>
                <p>
                    Zwiedź kosmos z bliska, przeglądając planety znajdujące się w układzie słonecznym i nie tylko. Masz okazję zobaczyć je z bliska i poznać coś
                    nowego na ich temat.
                </p>
            </div>
        </div>
    );
}

export { ReadyText };
