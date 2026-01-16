import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.logo}>GIM-VEA</div>
                    <p className={styles.tagline}>
                        Grace in Motion. Stabil grund och mjuk rörelse för hållbar expansion.
                    </p>
                    <div className={styles.links}>
                        <Link href="https://linkedin.com/in/monika-björklund-12841041/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            LinkedIn
                        </Link>
                        <Link href="https://instagram.com/gimvea/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            Instagram
                        </Link>
                        <Link href="/contact" className={styles.link}>
                            Kontakt
                        </Link>
                    </div>
                    <p className={styles.copy}>
                        &copy; {new Date().getFullYear()} GIM-VEA. Alla rättigheter förbehållna.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
