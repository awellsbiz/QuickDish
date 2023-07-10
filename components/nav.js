// NavigationBar.js

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import { useSession, signOut, signIn, signUp } from 'next-auth/react';

const Nav = () => {
    const { data: session } = useSession()
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/">
          <a>
            {/* <img src="/logo.png" alt="Logo" /> */} Yupp
          </a>
        </Link>
      </div>
      {session?.user?.email ? (
        <div className={styles.navbarLinks}>
        <Link href="/recipes">
          <a>Recipes</a>
        </Link>
        <Link href="/login">
        <a onClick={() => signOut()}>Sign Out</a>
        </Link>
      </div>
        ) : (
      <div className={styles.navbarLinks}>
        <Link href="/recipes">
          <a>Recipes</a>
        </Link>
        <Link href="/login">
         <a onClick={() => signIn()}>Sign In | Register</a>
        </Link>
      </div>
        )}
    </nav>
  );
};

export default Nav;
