import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src='https://i.postimg.cc/Gt498czZ/Imagen-Portada.jpg' alt='bgImage' height='500px' />
                <div className={styles.textOverlay}>
                    <h1 className={styles.text}>Orquestamos la innovación <br /> <span className={styles.text1}> y la transformación digital a nuestros clientes.</span></h1>
                </div>
            </div>
            <div className={styles.divSeparator}>
                <p className={styles.subtitle}>Te acompañamos de inicio a fin, desde conocer tus ideas, problemas, oportunidades de mejora y soluciones. Hasta implementar soluciones innovadoras de la mano, en ese proceso te capacitamos y dotamos de experiencias para que puedas hacerlo independientemente; y por si fuera poco buscamos financiamiento en calidad de donación para apalancar tus innovaciones y tecnologías aplicadas a contextos reales.</p>
            </div>
            <h4 className={styles.subtittle}>SOMOS UN EQUIPO QUE TE ACOMPAÑA DE FORMA INTEGRAL</h4>
            <img src='https://i.postimg.cc/fLhVPnzd/CASO-DE-XITO-WEB.png' alt='casoDeExito' widt='300px' height='300px' />
            {/* <h3 className={styles.tittle}>CADA SERVICIO ES UN CASO DE ÉXITO.</h3> */}
            <div className={styles.gridContainer}>
                <div className={styles.Div45}>
                    <div className={styles.div4}><b >CONSULTORIA TECNICA ESPECIALIZADA </b><br /> <br />Buscas un aliado especializado, en vigilancia tecnológica, hojas de ruta, sistema de gestión de la innovación, diseño de programas de innovación abierta, estudios de propiedad intelectual, estudios de mercado y demás. <br />  <br /><Link to='/servicios#servicio4' className={styles.linkTo}>Ver mas</Link> </div>
                    <div className={styles.div5}><b >ACADEMIA TRAYECTOR</b> <br /> <br />Quieres aprender a formular y concursar a ganador en los fondos concursables de PROINNOVATE, quieres emprender en el mundo de consultoría y ser formulador de proyectos, quieres aprender a ejecutar estos proyectos co financiados por PROINNOVATE, quieres fortalecer capacidades y ser mas rentable; preparate y entrena con los mejores. <br /> <br /><Link to='/servicios#servicio5' className={styles.linkTo}>Ver mas</Link></div>
                </div>
                <div className={styles.div1}><b >FONDOS CONCURSABLES </b><br /> <br />Financia tu innovación y transformación digital. <br /> <br /><Link to='/servicios#servicio1' className={styles.linkTo}>Ver mas</Link></div>
                <div className={styles.div2}><b >INNOVACION ABIERTA </b><br /> <br />No reinventemos la polvora, tencología y soluciones ya existen; solo es necesario encontrar aquellas solucionadores que ya las tienen y las adecuamos a nuestra empresa. Te ayudamos a lograrlo. <br /><br /> <Link to='/servicios#servicio2' className={styles.linkTo}>Ver mas</Link></div>
                <div className={styles.div3}><b >TRANSFORMACION DIGITAL</b> <br /> <br />No solo es implementar tecnología, hay que entender la estrategia, cultura, liderazgo, procesos y demás para que realmente funcione. ¿Queremos digitalizarnos?, hagamoslo de forma estratégica, efectiva y disfrutemos del proceso de transformación digital. <br /><br /> <Link to='/servicios#servicio3' className={styles.linkTo}>Ver mas</Link></div>
            </div>
            <footer className={styles.footer}></footer>
        </div>
    )
}

export default Home;