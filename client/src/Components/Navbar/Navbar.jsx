import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <div className={styles.container}>
            <div className={styles.divLeft}>
                <div className={styles.leftContainer}>
                    <img className={styles.image} src="https://i.postimg.cc/025c4hjh/LOGO.png" alt='logo' />
                </div>
            </div>
            <div className={styles.divRight}>
                <div className={styles.rightContainer}>
                    <Link className={`${styles.link} ${activeLink === '/' && styles['link--active']}`} exact to='/'>Inicio</Link>
                    <Link className={`${styles.link} ${activeLink === '/nosotros' && styles['link--active']}`} to='/nosotros'>Nosotros</Link>
                    <Link className={`${styles.link} ${activeLink === '/servicios' && styles['link--active']}`} to='/servicios'>Servicios</Link>
                    <Link className={`${styles.link} ${activeLink === '/cursos' && styles['link--active']}`} to='/cursos'>Cursos</Link>
                    <Link className={`${styles.link} ${activeLink === '/contacto' && styles['link--active']}`} to='/contacto'>Contacto</Link>
                </div>
            </div>
            <div className={styles.divStyle}>
                <div className="box">
                    <img className="vector" alt="Vector" src="https://c.animaapp.com/lVZ8YDxz/img/vector-4.svg" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;