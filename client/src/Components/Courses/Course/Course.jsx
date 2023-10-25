import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCourseById } from '../../../Redux/Actions/actions';
import styles from './Course.module.css';

const Course = ({ nombre, imagen, precio, descripcion, id }) => {

    return (
        <div className={styles.container}>
            <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
                <div className={styles.courseImageContainer}>
                    <img className={styles.courseImage} src={imagen} alt={nombre} />
                </div>
                <div className={styles.courseInfoContainer}>
                    <div className={styles.courseName}>
                        {nombre}
                    </div>
                    <div className={styles.coursePrice}>
                        $ {parseInt(precio)}
                    </div>
                    <div className={styles.courseDescription}>
                        {descripcion}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Course;