import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={`${styles.navbar} ${styles.glass}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Gim<span>-</span>Vea
                </Link>
                <ul className={styles.navLinks}>
                    <li><Link href="/" className={styles.navItem}>Startsida</Link></li>
                    <li><Link href="/services" className={styles.navItem}>Tjänster</Link></li>
                    <li><Link href="/about" className={styles.navItem}>Om Mig</Link></li>
                    <li><Link href="/contact" className={styles.navItem}>Kontakt</Link></li>
                </ul>
                {/* Optional: Add a small CTA here if requested later */}
            </div>
        </nav>
    );
};

export default Navbar;
