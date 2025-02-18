import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <a href="#" className={styles.navLink}>
                            Strona główna
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.navLink}>
                            Eksploracja
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.navLink}>
                            Więcej
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };
