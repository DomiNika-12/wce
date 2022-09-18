import React, { useEffect, useState } from "react";
import type { FC } from "react";
import styles from "../styles/navbar.module.css";
import { slide as Menu } from 'react-burger-menu'


export const NavBar: FC = () => {

  var stylesMenu = {
    bmBurgerButton: {
      display: 'block',
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '20px',
      top: '20px'
    },

    bmBurgerBars: {
      background: '#a90000'
    },
    bmBurgerBarsHover: {
      background: '#2A20AB'

    },
    bmCrossButton: {
      height: '30px',
      margin: '20px',
    },
    bmCross: {
      background: '#bdc3c7',
      height: '30px'

    },
    bmMenuWrap: {
      position: 'fixed',
      width: '100%',
      top: '0px',
      display: 'flex',
      flexDirection: 'column'
    },
    bmMenu: {
      background: 'black',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: 'whitesmoke',
      padding: '0.8em',
      fontSize: '20px'
    },
    bmItem: {
      margin: '20px'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 900) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 900) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div>
      {isDesktop ? (
        <nav className={styles.container}>
          <a href={'/'} className={styles.logo}>Wireless Communication Enterprise</a>
          <div className={styles.buttons}>
            <a href={'/'}>HOME</a>
            <a href={'/projects'}>PROJECTS</a>
            <a href={'/members'}>MEMBERS</a>
            <a href={'/contact'}>CONTACT US</a>
          </div>
        </nav>
      ) : (
        <div className={styles.container}>
          <a href={'/'} className={styles.logo}>Wireless Communication Enterprise</a>
          <Menu right styles={stylesMenu}>
            <a href={'/'}>HOME</a>
            <a href={'/projects'}>PROJECTS</a>
            <a href={'/members'}>MEMBERS</a>
            <a href={'/contact'}>CONTACT US</a>
          </Menu>
        </div >
      )}
    </div>




  );
}

export default NavBar;
