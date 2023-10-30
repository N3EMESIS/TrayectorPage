import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import casoexito from './casoExito.png';

const Home = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src='https://i.postimg.cc/Gt498czZ/Imagen-Portada.jpg' alt='bgImage' height='500px' />
                <div className={styles.textOverlay}>
                    <h1 className={styles.text}>ORQUESTAMOS LA INNOVACIÓN <br /> <span className={styles.text1}> Y LA TRANSFORMACIÓN DIGITAL A NUESTROS CLIENTES.</span></h1>
                </div>
            </div>
            <br />
            <div className={styles.divSeparator}>
                <p className={styles.subtitle}>Te acompañamos de inicio a fin, desde conocer tus ideas, problemas, oportunidades de mejora y soluciones. Hasta implementar soluciones innovadoras de la mano, en ese proceso te capacitamos y dotamos de experiencias para que puedas hacerlo independientemente; y por si fuera poco buscamos financiamiento en calidad de donación para apalancar tus innovaciones y tecnologías aplicadas a contextos reales.</p>
            </div>
            <img src={casoexito} alt='casoDeExito' widt='300px' heigh='300px' />
            <h4 className={styles.subtittle}>SOMOS UN EQUIPO QUE TE ACOMPAÑA DE FORMA INTEGRAL</h4>
            <br />
            <div className={styles.gridContainer}>
                <div className={styles.separator}>
                    <div className={styles.div1}>
                        <p className={styles.p}><span className={styles.titleService}>FONDOS CONCURSABLES </span><br /> <br />Financia tu innovación y transformación digital. <br /> <br /></p>
                        <div className={styles.divSeparator3}>
                            <Link to='/servicios#servicio1' className={styles.linkTo}>Ver mas</Link>
                        </div>
                    </div>
                    <div className={styles.div2}>
                        <p className={styles.p}><span className={styles.titleService}>INNOVACION ABIERTA </span><br /> <br />No reinventemos la polvora, tencología y soluciones ya existen; solo es necesario encontrar aquellas solucionadores que ya las tienen y las adecuamos a nuestra empresa. Te ayudamos a lograrlo. <br /><br /> </p>
                        <div className={styles.divSeparator4}>
                            <Link to='/servicios#servicio2' className={styles.linkTo}>Ver mas</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.div3}>
                    <p className={styles.p}><span className={styles.titleService}>TRANSFORMACION DIGITAL</span> <br /> <br />No solo es implementar tecnología, hay que entender la estrategia, cultura, liderazgo, procesos y demás para que realmente funcione. ¿Queremos digitalizarnos?, hagamoslo de forma estratégica, efectiva y disfrutemos del proceso de transformación digital. <br /><br /> </p>
                    <div className={styles.divSeparator5}>
                        <Link to='/servicios#servicio3' className={styles.linkTo}>Ver mas</Link>
                    </div>
                </div>
                <div className={styles.div4}>
                    <p className={styles.p}><span className={styles.titleService}>CONSULTORIA TECNICA ESPECIALIZADA </span><br /> <br />Buscas un aliado especializado, en vigilancia tecnológica, hojas de ruta, sistema de gestión de la innovación, diseño de programas de innovación abierta, estudios de propiedad intelectual, estudios de mercado y demás. <br />  <br /></p>
                    <div className={styles.divSeparator1}>
                        <Link to='/servicios#servicio4' className={styles.linkTo}>Ver mas</Link>
                    </div> 
                </div>
                <div className={styles.div5}>
                    <p className={styles.p}><span className={styles.titleService}>ACADEMIA TRAYECTOR </span> <br /> <br />Quieres aprender a formular y concursar a ganador en los fondos concursables de PROINNOVATE, quieres emprender en el mundo de consultoría y ser formulador de proyectos, quieres aprender a ejecutar estos proyectos co financiados por PROINNOVATE, quieres fortalecer capacidades y ser mas rentable; preparate y entrena con los mejores. <br /> <br /></p>
                    <div className={styles.divSeparator2}>
                        <Link to='/servicios#servicio5' className={styles.linkTo}>Ver mas</Link>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}></footer>
        </div>
    )
}

export default Home;