import React, { useEffect } from 'react';
import styles from './Conversemos.module.css';
import whatsapp from './wsp.jpg';

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
        <div className='p-4'>
            <div data-tf-live="01HCQ27ZYM9Z3ZSTN4NQEXY3EV" className={styles.container}></div>
            <img src={whatsapp} alt={'contact'} width='50%' />
        </div>
    )
}

export default Conversemos;