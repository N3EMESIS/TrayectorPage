import React, { useEffect } from 'react';
import styles from './Conversemos.module.css';
import diego from './Diego.jpg';

const Conversemos = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//embed.typeform.com/next/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return(
        <div className={styles.container}>
            <div data-tf-live="01HCQ27ZYM9Z3ZSTN4NQEXY3EV" className={styles.container}></div>
            <h3 className={styles.wsp}>Si prefieres puedes escribirnos a <a className={styles.link} href=''>Whatsapp</a>{/* link wsp */} o contactar directamente con Diego:</h3>
            <div className={styles.contactContainer}>
                <img src={diego} alt={'contact'} width='20%' />
                <div className={styles.divider}>
                    <p>Diego Caceres</p>
                    <p>MIT DE INNOVACIÓN</p>
                    <p>dcaceres@trayector.com</p>
                    <p>+51 996 501 515</p>
                </div>
            </div>
        </div>
    )
}

export default Conversemos;