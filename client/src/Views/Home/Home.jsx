import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src='https://i.postimg.cc/Fz3G53WY/Imagen-Portada.jpg' alt='bgImage' height='500px' />
                <div className={styles.textOverlay}>
                    <h1 className={styles.text}>Orquestamos la innovación y la transformación digital a nuestros clientes.</h1>
                </div>
            </div>
            <p className={styles.subtitle}>Te acompañamos de inicio a fin, desde conocer tus ideas, problemas, oportunidades de mejora y soluciones. Hasta implementar soluciones innovadoras de la mano, en ese proceso te capacitamos y dotamos de experiencias para que puedas hacerlo independientemente; y por si fuera poco buscamos financiamiento en calidad de donación para apalancar tus innovaciones y tecnologías aplicadas a contextos reales.</p>
            <h4 className={styles.subtittle}>SOMOS UN EQUIPO QUE TE ACOMPAÑA DE FORMA INTEGRAL</h4>
            <br/>
            <h3 className={styles.tittle}>CADA SERVICIO ES UN CASO DE ÉXITO.</h3>
            <div className={styles.tableContainer}>
                <table>
                    <tbody>
                        <tr>
                            <td className={styles.tdFirst}>Servicio 1</td>
                            <td>FONDOS CONCURSABLES: Financia tu innovación y transformación digital.</td>
                        </tr>
                        <tr>
                            <td className={styles.tdFirst}>Servicio 2</td>
                            <td>INNOVACION ABIERTA: No reinventemos la polvora, tencología y soluciones ya existen; solo es necesario encontrar aquellas solucionadores que ya las tienen y las adecuamos a nuestra empresa. Te ayudamos a lograrlo.</td>
                        </tr>
                        <tr>
                            <td className={styles.tdFirst}>Servicio 3</td>
                            <td>TRANSFORMACION DIGITAL: No solo es implementar tecnología, hay que entender la estrategia, cultura, liderazgo, procesos y demás para que realmente funcione. ¿Queremos digitalizarnos?, hagamoslo de forma estratégica, efectiva y disfrutemos del proceso de transformación digital.</td>
                        </tr>
                        <tr>
                            <td className={styles.tdFirst}>Servicio 4</td>
                            <td>CONSULTORIA TECNICA ESPECIALIZADA: Buscas un aliado especializado, en vigilancia tecnológica, hojas de ruta, sistema de gestión de la innovación, diseño de programas de innovación abierta, estudios de propiedad intelectual, estudios de mercado y demás.</td>
                        </tr>
                        <tr>
                            <td className={styles.tdFirst}>Servicio 5</td>
                            <td>ACADEMIA TRAYECTOR: Quieres aprender a formular y concursar a ganador en los fondos concursables de PROINNOVATE, quieres emprender en el mundo de consultoría y ser formulador de proyectos, quieres aprender a ejecutar estos proyectos co financiados por PROINNOVATE, quieres fortalecer capacidades y ser mas rentable; preparate y entrena con los mejores.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;