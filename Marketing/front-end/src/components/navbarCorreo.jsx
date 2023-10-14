import React, { useEffect, useId, useState } from "react";
import styles from "../styles/navbarCorreo.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBell, faBars, faMagnifyingGlass, faGear, faChevronRight, faHouse, faChartColumn, faEnvelope, faXmark , faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import {FaXmark} from "react-icons/fa6";
import FormsCrearCorreoCampana from "./forms/formsCrearCorreoCampana";
import FormCrearCorreoDos from "./forms/formsCrearCorreoDOS";


import { Link } from "react-router-dom";


const NavbarCorreo = () => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenuOpen2, setSubMenuOpen2] = useState(false);
    const [crearCorreo, setCrearCorreo] = useState(false);

    const [submitSiguiente, setSubmitSiguiente] = useState([]);

    // esto es para saber si en el forms se ha clickeado el boton 'siguiente', para pasar al forms n° 02
    const [siguienteIsClicked, setSiguienteIsClicked] = useState(false);

    const toggleLateralMenu = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }

    const toggleSubMenu = () => {
        if(subMenuOpen2 === true){
            setSubMenuOpen2(!subMenuOpen2);
        }
        setSubMenuOpen(!subMenuOpen);
    }

    const toggleSubMenu2 = () => {
        if(subMenuOpen === true){
            setSubMenuOpen(!subMenuOpen);
        }
        setSubMenuOpen2(!subMenuOpen2);
    }

    const toggleCrearCorreo = () => {
        setCrearCorreo(!crearCorreo);
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

                <li className={`${styles.list__item} ${styles.list__item__click}`}>
                    <div className={`${styles.list__button} ${styles.list__button__click}`} onClick={toggleSubMenu2} >
                        <FontAwesomeIcon icon={faServicestack} className={styles.list__img} />
                        <a href="#funcionalidades" className={styles.nav__link}>Funcionalidades</a>
                        <FontAwesomeIcon icon={subMenuOpen2 ? faChevronDown : faChevronRight} className={styles.list__arrow} />
                    </div>


                        <ul className={`${styles.list__show} ${subMenuOpen2 ? styles.openFour : ''}`}>
                        <li className={styles.list__inside}>
                            <Link to={'/'} className={`${styles.nav__link} ${styles.nav__link__inside}`}>Campañas</Link>
                        </li>
                        <li className={styles.list__inside}>
                            <Link to={'/calendario'} className={`${styles.nav__link} ${styles.nav__link__inside}`}>Segmentación de mercado</Link>
                        </li>
                        <li className={styles.list__inside}>
                            <a href="#c" className={`${styles.nav__link} ${styles.nav__link__inside}`}>LLamadas</a>
                        </li>
                        <li className={styles.list__inside}>
                            <Link to={'/correo'} className={`${styles.nav__link} ${styles.nav__link__inside}`}>Correos</Link>
                        </li>
                        <li className={styles.list__inside}>
                            <a href="#c" className={`${styles.nav__link} ${styles.nav__link__inside}`}>Sorteos</a>
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
                        <h1>Correos</h1>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.botonCrearCorreo} onClick={toggleCrearCorreo}>Crear correo</button>
                    </div>
                </div>
        </section>

            <div className={`${styles.containerMenuLateralCrearCorreo} ${crearCorreo ? styles.toggleCrearCorreoMenu : ""} `}>
                
            <button className={styles.cerrarMenuLateral} onClick={toggleCrearCorreo}><FaXmark /></button>

            {!siguienteIsClicked &&
                    <FormsCrearCorreoCampana 
                    siguienteIsClicked = {siguienteIsClicked}
                    setSiguienteIsClicked = {setSiguienteIsClicked}
                    submitSiguiente = {submitSiguiente}
                    setSubmitSiguiente = {setSubmitSiguiente}
                     />
            }

            {siguienteIsClicked &&
                    <FormCrearCorreoDos 
                    submitSiguiente = {submitSiguiente}
                    setSubmitSiguiente = {setSubmitSiguiente}
                    />
            }
                    
            </div>
        
        </header>

    ); 

}

export default NavbarCorreo;