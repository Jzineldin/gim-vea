'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`${styles.navbar} ${styles.glass}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <Image
                        src="/images/logga-cirkel.png"
                        alt="GIM-VEA"
                        width={80}
                        height={80}
                        priority
                        className={styles.logoImage}
                    />
                </Link>

                {/* Hamburger button */}
                <button
                    type="button"
                    className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation links */}
                <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
                    <li><Link href="/" className={styles.navItem} onClick={closeMenu}>Startsida</Link></li>
                    <li><Link href="/services" className={styles.navItem} onClick={closeMenu}>Tjänster</Link></li>
                    <li><Link href="/about" className={styles.navItem} onClick={closeMenu}>Om Mig</Link></li>
                    <li><Link href="/contact" className={styles.navItem} onClick={closeMenu}>Kontakt</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
