import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBell, faBars, faMagnifyingGlass, faGear, faChevronRight, faHouse, faChartColumn, faEnvelope, faXmark , faChevronDown} from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/navbar.module.css";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [crearCampana, setCrearCampana] = useState(false);

    const toggleLateralMenu = () => {
        setIsDropDownOpen(!isDropDownOpen);
        console.log("toggle cambiado! ");
    }

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    }

    const toggleCrearCampana = () => {
        setCrearCampana(!crearCampana);
        console.log("toggle cambiado! ")
    }

    return(
        <header>
        <nav className={styles.navbar}>
            <div className={styles.hamburguer} onClick={toggleLateralMenu}>
                    <FontAwesomeIcon icon={isDropDownOpen ? faXmark : faBars } />
            </div>
            <ul className={styles.tools}>
                <li><a className={styles.anchor} href="#search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a></li>
                <li ><a className={styles.anchor} href="#settings">
                    <FontAwesomeIcon icon={faGear} />
                </a>
                </li>
                <li><a className={styles.anchor} href="#notifications">
                    <FontAwesomeIcon icon={faBell} />
                </a></li>
            </ul>
        </nav>

        {/* contenido desplegable lateral */}
            <div className={`${styles.contenidoLateral} ${isDropDownOpen ? styles.open : ''}`}>
            <ul className={styles.list}>
                <li className={styles.list__item}>
                    <div className={styles.list__button}>
                        <FontAwesomeIcon icon={faHouse} className={styles.list__img} />
                        <a href="/" className={styles.nav__link}>Inicio</a>
                    </div>
                </li>

                <li className={`${styles.list__item} ${styles.list__item__click}`}>
                    <div className={`${styles.list__button} ${styles.list__button__click}`} onClick={toggleSubMenu} >
                        <FontAwesomeIcon icon={faServicestack} className={styles.list__img} />
                        <a href="#services" className={styles.nav__link}>Módulos</a>
                        <FontAwesomeIcon icon={subMenuOpen ? faChevronDown : faChevronRight} className={styles.list__arrow} />
                    </div>

                        <ul className={`${styles.list__show} ${subMenuOpen ? styles.openTwo : ''}`}>
                        <li className={styles.list__inside}>
                            <a href="#a" className={`${styles.nav__link} ${styles.nav__link__inside}`}>Autoconsulta</a>
                        </li>
                        <li className={styles.list__inside}>
                            <a href="#b" className={`${styles.nav__link} ${styles.nav__link__inside}`}>Clientes</a>
                        </li>
                        <li className={styles.list__inside}>
                            <a href="#c" className={`${styles.nav__link} ${styles.nav__link__inside}`}>Marketing</a>
                        </li>
                        <li className={styles.list__inside}>
                            <a href="#c" className={`${styles.nav__link} ${styles.nav__link__inside}`}>Reclamos</a>
                        </li>
                        <li className={styles.list__inside}>
                            <a href="#c" className={`${styles.nav__link} ${styles.nav__link__inside}`}>Reparaciones</a>
                        </li>
                        <li className={styles.list__inside}>
                            <a href="#c" className={`${styles.nav__link} ${styles.nav__link__inside}`}>Ventas</a>
                        </li>
                    </ul>
                    

                </li>

                <li className={styles.list__item}>
                    <div className={styles.list__button}>
                        <FontAwesomeIcon icon={faChartColumn} className={styles.list__img} />
                        <a href="#stats" className={styles.nav__link}>Estadísticas</a>
                    </div>
                </li>

                <li className={styles.list__item}>
                    <div className={styles.list__button}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.list__img} />
                        <a href="#contact" className={styles.nav__link}>Contacto</a>
                    </div>
                </li>

            </ul>
        </div>
        

            <section className={styles.campanasAnalisis}>
                <div className={styles.despuesDelNavbar}>
                    <div className={styles.campana}>
                        <h1>Campañas</h1>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.botonCrearCampana} onClick={toggleCrearCampana}>Crear campaña</button>
                    </div>
                </div>
            </section>
            <div className={styles.containerRoutes}>
                <ul className={styles.redirection}>
                    <li>
                        <a className={styles.gestionAjustar} href="/gestion">Gestión</a>
                    </li>
                    <li>
                        <a className={styles.calendarioAjustar} href="/calendario" >Calendario</a>
                    </li>
                </ul>
            </div>

            <hr/>

            <aside className={`${styles.menuFlotanteCrearCampana} ${crearCampana ? styles.openThree : ''}`}>
                <div className={styles.cerrarMenu} onClick={toggleCrearCampana}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>

                <div className={styles.tituloForm}>Título</div>
                
                <div className={styles.containerForm}>
                    <form className={styles.formCrearCampana}>
                        
                        <div className={styles.containerNombreCampana}>
                            <label for='nombreCampana'>Nombre de la campaña</label>
                            <input type="text" id="nombreCampana" required minLength={1} />
                        </div>

                        
                        <div className={styles.containerFechaInicioCampanas}>
                            <label for='fechaInicio'>Fecha de inicio</label>
                            <input type="date" id="fechaInicio" required />
                        </div>
                        <div className={styles.containerFechaFinCampanas}>
                            <label for='fechaFin'>Fecha de finalización</label>  
                            <input type="date" required id="fechaFin" />                          
                        </div>

                        <div className={styles.containerObjetivosCampanas}>
                            <label for='objetivosCampana'>Objetivos de la campaña</label>
                            <input type="text" id="objetivosCampana" required minLength={1} />
                        </div>

                        <div className={styles.containerPublicoObjetivoCampana}>
                            <label for='publicoObjetivo'>Público objetivo de la campaña</label>
                            <input type="text" id="publicoObjetivo" name="publicoObjetivo" list="publicoObjetivo" required minLength={1}/>
                            <datalist id="publicoObjetivo">
                                <option value="aaaa"></option>
                                <option value="bbbb"></option>
                            </datalist>

                        </div>
                        
                        <div className={styles.containerNotas}>
                            <label for='notas'>Notas</label>
                            <textarea className={styles.textAreaa} id="notas"></textarea>
                        </div>

                        <div className={styles.botonesMenu}>
                            {/* falta poner la conectividad a la base de datos */}
                            <button type="submit" className={`${styles.boton} ${styles.boton__crear}`} >Crear</button>
                            <button className={`${styles.boton} ${styles.boton__cancelar}`} onClick={toggleCrearCampana}>Cancelar</button>
                        </div>                        
                    </form>
                </div>
                
            
            </aside>

    </header>
    );
}

export default Navbar;