import React from 'react';
import styles from './Nosotros.module.css';
import equipo from './equipo.jpg';
import equipoTrayector from './EquipoTrayector.jpg';

const Nosotros = () => {
    return(
        <div className={styles.mainContainer}>
            <img src={equipoTrayector} className={styles.img} alt='background' width='1544px' height='661px'/>
            <p className={styles.titleImage}>EL EQUIPO TRAYÉCTOR</p>
            <div className={styles.containerMain}>
                <h1 className={styles.title}>CONOCE A NUESTRO EQUIPO DE TRABAJO</h1>
                <p className={styles.subtitle}>Somos un equipo de facilitadores y estrategas que te acompañan en el camino de innovación y desarrollo tecnológico, para nosotros cada servicio que brindamos esta diseñado para generar casos de éxito.</p>
                <div className={styles.container}>
                    <div className={styles.foto1}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Diego</h3>
                        <p className={styles.p}>Lider en innovación y adopción tecnológica</p>
                    </div>
                    <div className={styles.foto2}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Giuliana</h3>
                        <p className={styles.p}>Lider en transformation readiness y empowerment</p>
                    </div>
                    <div className={styles.foto3}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>David</h3>
                        <p className={styles.p}>Gestor de servicios de innovación</p>
                    </div>
                    <div className={styles.foto4}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Lady</h3>
                        <p className={styles.p}>Gestor de proyectos de innovación</p>
                    </div>
                    <div className={styles.foto5}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Axel</h3>
                        <p className={styles.p}>Ejecutivo de marketing digital</p>
                    </div>
                    <div className={styles.foto6}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Delia</h3>
                        <p className={styles.p}>Ejecutivo de administración y finanzas</p>
                    </div>
                </div>
                <h1 className={styles.title}>CONSULTORES SENIOR ASOSIADOS</h1>
                <p className={styles.subtitle}>Nos acompañan un grupo experto de seniors a nivel internacional con más de 20 años de experiencia.</p>
                <br />
                <div className={styles.container}>
                    <div className={styles.foto1}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Ana Guzman</h3>
                        <p className={styles.p}></p>
                    </div>
                    <div className={styles.foto2}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Ana Villegas</h3>
                        <p className={styles.p}></p>
                    </div>
                    <div className={styles.foto3}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Nancy Perez</h3>
                        <p className={styles.p}></p>
                    </div>
                    <div className={styles.foto4}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Jorge Egusquiza</h3>
                        <p className={styles.p}></p>
                    </div>
                    <div className={styles.foto5}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Yannick Le Guevellou</h3>
                        <p className={styles.p}></p>
                    </div>
                    <div className={styles.foto6}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Catalina Gonzalez Barbosa</h3>
                        <p className={styles.p}></p>
                    </div>
                    <div className={styles.foto7}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Betty Salazar Pinto</h3>
                        <p className={styles.p}></p>
                    </div>
                    <div className={styles.foto8}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Susan Flores Calla</h3>
                        <p className={styles.p}></p>
                    </div>
                    <div className={styles.foto9}>
                        <img src={equipo} alt='equipo' width='50%' />
                        <h3 className={styles.name}>Marian Hermoza Gutierrez</h3>
                        <p className={styles.p}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosotros;