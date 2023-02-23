import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../assets/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <Link href='/' className={styles.wrapper}>
            <div className={styles.imagewrapper}>
                <Image src={logo} fill></Image>
            </div>
            <div className={styles.navItems}>
                <Link href='/' className={styles.navItem}>
                    <span className={styles.navItemText}>Home</span>
                </Link>
                <Link href='characters' className={styles.navItem}>
                    <span className={styles.navItemText}>Characters</span>
                </Link>
                <Link href='/' className={styles.navItem}>
                    <span className={styles.navItemText}>Spells</span>
                </Link>
                <Link href='/' className={styles.navItem}>
                    <span className={styles.navItemText}>About</span>
                </Link>
            </div>
        </Link>
    );
};

export default Navbar;
