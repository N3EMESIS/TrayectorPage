import React, { useRef, useEffect } from 'react';
import styles from './Servicios.module.css';

const Servicios = () => {
    const servicio1Ref = useRef(null);
    const servicio2Ref = useRef(null);
    const servicio3Ref = useRef(null);
    const servicio4Ref = useRef(null);
    const servicio5Ref = useRef(null);

    //* Para scrolear automaticamente con el boton 'Ver mas' *//

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if(hash === 'servicio1'){
            servicio1Ref.current.scrollIntoView({ behavior: 'smooth'})
        } else if (hash === 'servicio2'){
            servicio2Ref.current.scrollIntoView({ behavior: 'smooth'})
        } else if (hash === 'servicio3'){
            servicio3Ref.current.scrollIntoView({ behavior: 'smooth'})
        } else if (hash === 'servicio4'){
            servicio4Ref.current.scrollIntoView({ behavior: 'smooth'})
        } else if (hash === 'servicio5'){
            servicio5Ref.current.scrollIntoView({ behavior: 'smooth'})
        }
    }, [])

    return(
        <div className={styles.mainContainer}>
            <h1 className={styles.tittle}>Servicios</h1>
            <ul className={styles.listServices}>
                <li ref={servicio1Ref} id='servicio1'>Servicio1</li>
                <li ref={servicio2Ref} id='servicio2'>Servicio2</li>
                <li ref={servicio3Ref} id='servicio3'>Servicio3</li>
                <li ref={servicio4Ref} id='servicio4'>Servicio4</li>
                <li ref={servicio5Ref} id='servicio5'>Servicio5</li>
            </ul>
        </div>
    )
}

export default Servicios;