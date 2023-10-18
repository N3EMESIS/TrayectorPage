import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import trayectorFramework from './framework trayector.jpg'
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
                <li ref={servicio1Ref} id='servicio1'>FONDOS CONCURSABLES: Financia tu innovación y transformación digital.
                <br />
                Formulación de proyectos: Mipymes digitales, Mipymes de Calidad, Misiones tecnológicas, innovación empresarial, innovación abierta, entre otros.
                <br />
                Acompañamiento en la ejecución de inicio a fin: Desde como aperturar una cuenta corriente para el proyecto, hasta el cierre de proyecto gestión para la devolución de la carta fianza.
                <br />
                Diagnosticos empresariales: Para concursos que lo requieran como Mipymes digitales y Mipymes de Calidad. Contamos con consultores que cumplen con todas las exigencias del concurso y la experiencia necesaria especializada para desarrollar el diagnostico y plan de mejora; y asi mismo, contamos con una red de proveedores muy profesionales que te ayudan a cerrar brechas digitales.
                <br />
                Recuperación de proyecto: Si tienes un proyecto en ejecución y lastimosamente tiene problemas o retos por resolver, te ayudamos a dar solución de forma muy cercana y asertiva; no te preocupes lo resolvemos como si fuera nuestro proyecto.
                <br />
                Quieres que tu equipo sepa como hacerlo: Capacitate con los mejores, contamos con cursos especializados y asesorías puntuales para fortalecer capacidades {/*Enlace a los cursos */ }
                
                {/* Brochure de tiktok, mencionando los casos de éxito. */}</li>
                <li ref={servicio2Ref} id='servicio2'>INNOVACION ABIERTA: No reinventemos la polvora, tecnología y soluciones ya existen; solo es necesario encontrar aquellas solucionadores que ya las tienen y las adecuamos a nuestra empresa. Te ayudamos a lograrlo.
                <br />
                Diagnosticamos la empresa para saber su nivel de preparación para desarrollar innovación abierta en la empresa.
                <br />
                Diseñamos programas de innovación abierta de acuerdo a la naturaleza y capacidades de tu empresa.
                <br />
                Desarrollamos el scouting de solucionadores tecnológicos a nivel global.
                <br />
                Contamos con una amplia red de solucionadores tecnológicos para diversos sectores empresariales.
                <br />
                Promovemos activamente y publicitamos los esfuerzos que tu empresa hace para posicionarse en el ecosistema de innovación.
                <br />
                Te acompañamos en el proceso de evaluación de solucionadores.
                <br />
                Implementamos en conjunto las soluciones tecnológicas propuestas y demás.
                {/* brochure de tiktok, mencionando los casos abiertos */}</li>
                <li ref={servicio3Ref} id='servicio3'>TRANSFORMACION DIGITAL: No solo es implementar tecnología, hay que entender la estrategia, cultura, liderazgo, procesos y demás para que realmente funcione. ¿Queres digitalizarnos?, hagamoslo de forma estratégica, efectiva y disfrutemos del proceso de transformación digital.
                <br />
                Diagnosticamos la organización de forma metódica y disciplinada.
                <br />
                Definimos el backlog de iniciativas de transformación.
                <br />
                Fortalecemos capacidades.
                <br />
                Implementamos mejora en conjunto.
                <br />
                Dotamos de aliados estratégicos para implementar soluciones digitales.
                <br />
                Auditamos tus procesos y los agilizamos.
                Dotamos de networking empresarial para fortalecer tu posición en el ecosistema de innovación.
                <br />
                <p>¿Queres iniciar un autodiagnostico preliminar y conocer el nivel de madurez de tu empresa en transformación? <Link to='/contacto'>Haz click aquí</Link></p>
                <img src={trayectorFramework} alt='framework trayector' /></li>
                <li ref={servicio4Ref} id='servicio4'>CONSULTORIA TECNICA ESPECIALIZADA: Buscas un aliado especializado, en vigilancia tecnológica, hojas de ruta, sistema de gestión de la innovación, diseño de programas de innovación abierta, estudios de propiedad intelectual, estudios de mercado y demás.
                <br />
                Desarrollamos consultoría tecnica especializada en:
                <br />
                Vigilancia...
                <br />
                Hojas de...
                <br />
                Sistema de ges...
                <br />
                ...
                ...
                ..
                ...
                </li>
                <li ref={servicio5Ref} id='servicio5'>ACADEMIA TRAYECTOR: Quieres aprender a formular y concursar a ganador en los fondos concursables de PROINNOVATE, Quieres emprender en el mundo de consultoría y ser formulador de proyectos, quieres aprender a ejecutar estos proyectos co financiados por PROINNOVATE, quieres fortalecer capacidades y ser mas rentable; preparate y entrena con los mejores.
                {/* poco a poco se debe ir cargando fotos con los participantes a los cursos.
                Por ahora poner el mismo menu de la academia trayector y linkear hacia la compra. */}</li>
            </ul>
        </div>
    )
}

export default Servicios;