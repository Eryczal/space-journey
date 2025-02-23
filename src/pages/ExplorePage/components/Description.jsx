import styles from "./Description.module.css";

function Description() {
    return (
        <div className={styles.container}>
            <nav className={styles.navigation}>
                <div className={styles.dot}></div>
            </nav>
            <div className={styles.content}>
                <h1>Ziemia</h1>
                <p>Pierwszą i najbliższą planetą jest Ziemia. Ziemia znajduje się w Układzie Słonecznym, jest trzecia od strony Słońca.</p>
                <p>Ziemia jest niebieska przez oceany wody znajdujące się na niej. Oprócz tego widoczne z kosmosu są białe chmury.</p>
                <p></p>
            </div>
        </div>
    );
}

export { Description };
