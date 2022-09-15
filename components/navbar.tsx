

import React from "react";
import type { FC } from "react";
import styles from "./navbar.module.css";

export const NavBar: FC = () => {
  return (
    <nav className={styles.container}>
      <a href={'/'} className={styles.logo}>Wireless Communication Enterprise</a>
      <div className={styles.buttons}>
        <a href={'/'}>HOME</a>
        <a href={'/projects'}>PROJECTS</a>
        <a href={'/members'}>MEMBERS</a>
        <a href={'/contact'}>CONTACT US</a>
      </div>
    </nav>
  );
}