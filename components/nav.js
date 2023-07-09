// NavigationBar.js

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/">
          <a>
            {/* <img src="/logo.png" alt="Logo" /> */} Yupp
          </a>
        </Link>
      </div>
      <div className={styles.navbarLinks}>
        <Link href="/recipes">
          <a>Recipes</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
