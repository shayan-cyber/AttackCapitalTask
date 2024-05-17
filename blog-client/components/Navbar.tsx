import React from 'react';
import styles from '../styles/components/Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <Link href={'/'}>
                    <li className={styles.navbarItem}><p  className={styles.navbarLink}>Home</p></li>
                </Link>
                <Link href={'/dashboard'}>
                    <li className={styles.navbarItem}><p className={styles.navbarLink}>Post</p></li>
                </Link>
                
            </ul>
        </nav>
    );
};

export default Navbar;
