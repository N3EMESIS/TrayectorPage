import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCourseById } from '../../../Redux/Actions/actions';
import styles from './Course.module.css';

const Course = ({ nombre, imagen, precio, descripcion, id }) => {

    return (
        <div className={styles.container} id={id}>
            <div className={styles.courseImageContainer}>
                <img className={styles.courseImage} src={imagen} alt={nombre} />
            </div>
            <div className={styles.courseInfoContainer}>
                <div className={styles.courseName}>
                    <p className={styles.nombre}>{nombre}</p>
                </div>
                <div className={styles.courseDescription}>
                    <p className={styles.description}>{descripcion}</p>
                </div>
                <div className={styles.coursePrice}>
                    <p className={styles.price}>$ {parseInt(precio)}</p>
                </div>
            </div>
            <div className={styles.courseLink}>
                <button className={styles.registerButton}>Registrarme</button>
                <button className={styles.classButton}>Clases en vivo</button>
            </div>
        </div>
    )
}

export default Course;