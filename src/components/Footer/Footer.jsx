import styles from './Footer.module.css';

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.containerFooter}>
                <div className={styles.copy}>
                    <p>&copy; {new Date().getFullYear()} Norman Kalyuzhny. All rights reserved.</p>
                </div>
                <nav className={styles.footerMenu}>
                    <ul className={styles.footerMenuList}>
                        <li className={styles.footerListItem}>
                            <a href="#" className={styles.footerListLink}>about</a>
                        </li>
                        <li className={styles.footerListItem} id="open-modal-link">
                            <p  className={styles.footerListLink}>contact</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}