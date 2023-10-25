import React from 'react';
import Course from './Course/Course';
import styles from './Courses.module.css';

const Courses = ({ courses }) => {
    return (
        <div className={styles.container}>
            <div className={styles.divider}>
                {courses?.length > 0 && courses.map(({ nombre, id, descripcion, precio, imagen }) => (
                    <div key={id} className={styles.courseCard}>
                        <Course
                            id={id}
                            nombre={nombre}
                            descripcion={descripcion}
                            precio={precio}
                            imagen={imagen}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Courses;