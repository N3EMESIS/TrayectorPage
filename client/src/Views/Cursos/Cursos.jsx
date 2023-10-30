import React, { useEffect, useState } from 'react';
import { getAllCourses, orderAndFilter } from '../../Redux/Actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Courses from '../../Components/Courses/Courses';
import academiaTrayector from './AcademiaTrayector.jpeg';
import styles from './Cursos.module.css';

const Cursos = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses);
    console.log(courses);
    // const [filterByType, setFilterByType] = useState('');
    // const [sort, setSort] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getAllCourses());
    }, []);

    // useEffect(() => {
    //     dispatch(orderAndFilter(filterByType, sort));
    // }, [filterByType, sort]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    // const handleFilter = (e) => {
    //     setFilterByType(e.target.value);
    // };

    // const handleSort = (e) => {
    //     setSort(e.target.value);
    // };

    return(
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <img src={academiaTrayector} alt={'academia trayector'} width='100%' height='741px' />
                <div className={styles.textOverlay}>
                    <h1 className={styles.title}>Cursos Trayector</h1>
                </div>
            </div>
            <div className={styles.pasosContainer}>
                <div className={styles.paso1}>
                    <img src='' alt='paso1' />
                    <p className={styles.p}>Eleji tu curso</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.paso2}>
                    <img src='' alt='paso2' />
                    <p className={styles.p}>Realiza el pago de tu matricula</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.paso3}>
                    <img src='' alt='paso3' />
                    <p className={styles.p}>Listo para iniciar tu curso!</p>
                </div>
            </div>
            {/* <div className='{styles.filterContainer}'>
                <select className='{styles.selectType}' onChange={handleFilter}>
                    <option value=''>Todos</option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                </select>
                <select className='selectOrder' onChange={handleSort}>
                    <option value=''>Orden</option>
                    <option value='a-z'>A-Z</option>
                    <option value='z-a'>Z-A</option>
                    <option value='Menor precio'>Mayor precio</option>
                    <option value='Mayor precio'>Menor precio</option>
                </select>
            </div> */}
            <div className={styles.coursesContainer}>
                <Courses courses={courses} />
            </div>
        </div>
    )
}

export default Cursos;