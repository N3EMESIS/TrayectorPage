import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Servicios.module.css';
import casoexito from './images/casoexito.png';
import trayectorFramework from './images/framework trayector.jpg'
import dinero from './images/DINERO.png';
import consultor from './images/consultor.png';
import gorro from './images/gorro.png';
import innovacion from './images/innovacion.png';
import configuraciones from './images/configuraciones.png';

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
            <img src='https://i.postimg.cc/vTM6X6dY/caso-Exito.png' alt='caso de exito' width='80%' height='500px' />
            <div className={styles.container}>
                <div className={styles.separator}>
                    <div className={styles.separator1}>
                        <div className={styles.bg1}>
                            <img className={styles.image1} src={dinero} alt='dinero' width='250px' height='250px' />
                        </div>
                        <div className={styles.service1}>
                            <h1 className={styles.tittle} ref={servicio1Ref} id='servicio1'>FONDOS CONCURSABLES</h1>
                            <h2 className={styles.subtittle}>Financia tu innovación y transformación digital.</h2>

                            <p className={styles.text}>Formulación de proyectos: Mipymes digitales, Mipymes de Calidad, Misiones tecnológicas, innovación empresarial, innovación abierta, entre otros.</p>

                            <p className={styles.text}>Acompañamiento en la ejecución de inicio a fin: Desde como aperturar una cuenta corriente para el proyecto, hasta el cierre de proyecto gestión para la devolución de la carta fianza.</p>

                            <p className={styles.text}>Diagnosticos empresariales: Para concursos que lo requieran como Mipymes digitales y Mipymes de Calidad. Contamos con consultores que cumplen con todas las exigencias del concurso y la experiencia necesaria especializada para desarrollar el diagnostico y plan de mejora; y asi mismo, contamos con una red de proveedores muy profesionales que te ayudan a cerrar brechas digitales.</p>

                            <p className={styles.text}>Recuperación de proyecto: Si tienes un proyecto en ejecución y lastimosamente tiene problemas o retos por resolver, te ayudamos a dar solución de forma muy cercana y asertiva; no te preocupes lo resolvemos como si fuera nuestro proyecto.</p>

                            <p className={styles.text}>Quieres que tu equipo sepa como hacerlo: Capacitate con los mejores, contamos con cursos especializados y asesorías puntuales para fortalecer capacidades {/* enlace a los cursos */}</p>
                            {/* Brochure de tiktok, mencionando los casos de éxito. */}
                        </div>
                    </div>
                    <div className={styles.separator2}>
                        <div className={styles.bg2}>
                            <img className={styles.image2} src={innovacion} alt='innovacion' width='200px' height='200px' />
                        </div>
                        <div className={styles.service2}>
                            <h1 className={styles.tittle} ref={servicio2Ref} id='servicio2'>INNOVACION ABIERTA</h1>
                            <h2 className={styles.subtittle}>No reinventemos la polvora, tecnología y soluciones ya existen; solo es necesario encontrar aquellas solucionadores que ya las tienen y las adecuamos a nuestra empresa. Te ayudamos a lograrlo.</h2>
                            
                            <p className={styles.text}>Diagnosticamos la empresa para saber su nivel de preparación para desarrollar innovación abierta en la empresa.</p>

                            <p className={styles.text}>Diseñamos programas de innovación abierta de acuerdo a la naturaleza y capacidades de tu empresa.</p>

                            <p className={styles.text}>Desarrollamos el scouting de solucionadores tecnológicos a nivel global.</p>

                            <p className={styles.text}>Contamos con una amplia red de solucionadores tecnológicos para diversos sectores empresariales.</p>

                            <p className={styles.text}>Promovemos activamente y publicitamos los esfuerzos que tu empresa hace para posicionarse en el ecosistema de innovación.</p>

                            <p className={styles.text}>Te acompañamos en el proceso de evaluación de solucionadores.</p>

                            <p className={styles.text}>Implementamos en conjunto las soluciones tecnológicas propuestas y demás.</p>
                            {/* brochure de tiktok, mencionando los casos abiertos */}
                        </div>
                    </div>
                </div>
                <div className={styles.separato}>

                <div className={styles.separator3}>
                    <div className={styles.bg3}>
                        <img className={styles.image3} src={configuraciones} alt='transformacion' width='200px' height='200px' />
                    </div>
                    <div className={styles.service3}>
                        <h1 className={styles.tittle} ref={servicio3Ref} id='servicio3'>TRANSFORMACION DIGITAL</h1>
                        <h2 className={styles.subtittle}>No solo es implementar tecnología, hay que entender la estrategia, cultura, liderazgo, procesos y demás para que realmente funcione. ¿Queres digitalizarnos?, hagamoslo de forma estratégica, efectiva y disfrutemos del proceso de transformación digital.</h2>

                        <p className={styles.text}>Diagnosticamos la organización de forma metódica y disciplinada.</p>

                        <p className={styles.text}>Definimos el backlog de iniciativas de transformación.</p>

                        <p className={styles.text}>Fortalecemos capacidades.</p>

                        <p className={styles.text}>Implementamos mejora en conjunto.</p>

                        <p className={styles.text}>Dotamos de aliados estratégicos para implementar soluciones digitales.</p>

                        <p className={styles.text}>Auditamos tus procesos y los agilizamos.</p>

                        <p className={styles.text}>Dotamos de networking empresarial para fortalecer tu posición en el ecosistema de innovación.</p>

                        <p className={styles.text}>¿Queres iniciar un autodiagnostico preliminar y conocer el nivel de madurez de tu empresa en transformación? Haz click <Link className={styles.link} to='/contacto'>aquí</Link></p>
                    </div>
                </div>
                
                <div className={styles.separator4}>
                    <div className={styles.bg4}>
                        <img className={styles.image4} src={consultor} alt='consultoria' width='200px' height='200px' />
                    </div>
                    <div className={styles.service4}>
                        <h1 className={styles.tittle} ref={servicio4Ref} id='servicio4'>CONSULTORIA TECNICA ESPECIALIZADA</h1>
                        <h2 className={styles.subtittle}>Buscas un aliado especializado, en vigilancia tecnológica, hojas de ruta, sistema de gestión de la innovación, diseño de programas de innovación abierta, estudios de propiedad intelectual, estudios de mercado y demás.</h2>

                        <p className={styles.text}>Desarrollamos consultoría tecnica especializada en:</p>
                    </div>
                </div>
                <div className={styles.separator5}>
                    <div className={styles.bg5}>
                        <img className={styles.image5} src={gorro} alt='academia trayector' width='200px' height='200px' />
                    </div>
                    <div className={styles.service5}>
                        <h1 className={styles.tittle} ref={servicio5Ref} id='servicio5'>ACADEMIA TRAYECTOR</h1>
                        <h2 className={styles.subtittle}>Quieres aprender a formular y concursar a ganador en los fondos concursables de PROINNOVATE, Quieres emprender en el mundo de consultoría y ser formulador de proyectos, quieres aprender a ejecutar estos proyectos co financiados por PROINNOVATE, quieres fortalecer capacidades y ser mas rentable; preparate y entrena con los mejores.</h2>

                        {/* poco a poco se debe ir cargando fotos con los participantes a los cursos.
                        Por ahora poner el mismo menu de la academia trayector y linkear hacia la compra. */}
                    </div>
                </div>
                </div>
                <div className={styles.frameworkContainer}>
                    <img className={styles.frameworkImage} src={trayectorFramework} alt='framework trayector' width='1000px' height='500px' />
                </div>
            </div>
        </div>
    )
}

export default Servicios;