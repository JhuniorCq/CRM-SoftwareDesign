import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBell, faBars, faMagnifyingGlass, faGear, faChevronRight, faHouse, faChartColumn, faEnvelope, faXmark , faChevronDown} from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/navbar.module.css";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { distritosPorDepartamento, departamentos } from "./dataDistritosDepartamentos";

const Navbar = (props) => {

    // let {
    //     isDropDownOpen,
    //     setIsDropDownOpen,
    //     subMenuOpen,
    //     setSubMenuOpen,
    //     crearCampana,
    //     setCrearCampana,
    //     publicoObjetivoIsClicked,
    //     setPublicoObjetivoIsClicked,
    //   } = props;

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [crearCampana, setCrearCampana] = useState(false);
    const [publicoObjetivoIsClicked, setPublicoObjetivoIsClicked] = useState(false);
    const [selectedDepartamento, setSelectedDepartamento] = useState('');
    const [subMenuOpen2, setSubMenuOpen2] = useState(false);

    const handleDepartamentoChange = (e) => {
        setSelectedDepartamento(e.target.value);
    };


    const toggleLateralMenu = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    }

    const toggleCrearCampana = () => {
        setCrearCampana(!crearCampana);
    }

    const toggleSubMenu2 = () => {
        setSubMenuOpen2(!subMenuOpen2);
    }

    const togglePublicoObjetivoClicked = (e) => {
        e.preventDefault();
        setPublicoObjetivoIsClicked(!publicoObjetivoIsClicked);
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
                            <a href="#c" className={`${styles.nav__link} ${styles.nav__link__inside}`}>Reclamos</a>
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

                <div className={`${styles.menuPopupPublicoObjetivo} ${publicoObjetivoIsClicked ? styles.showMenuPopup : ''}`}>
                    <form className={styles.formCrearCampana}>
                        <div className={styles.hamburguerPopup} onClick={togglePublicoObjetivoClicked}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>

                        <div className={styles.labelsPublicoCampana}>
                            <label for='edadDirigida'>Edad dirigida<span className={styles.asterisco}>*</span></label>
                            <label for='sexo'>Sexo<span className={styles.asterisco}>*</span></label>
                        </div>
                        <div className={styles.inputsPublicoCampana}>
                            <select className={styles.customSelect} id="edadDirigida" name="edadDirigida" required>
                                <option value="rangoEdad1">11-19</option>
                                <option value="rangoEdad2">20-29</option>
                                <option value="rangoEdad3">30-39</option>
                                <option value="rangoEdad4">40-49</option>
                                <option value="rangoEdad5">50-59</option>
                                <option value="rangoEdad6">60 a más</option>
                            </select>

                            <select id="sexo" className={styles.customSelect}  name="sexo" required>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                                <option value="prefieroNoDecirlo">Prefiero no decirlo</option>
                            </select>
                        </div>
                        <div className={styles.departamentoPublicoCampana}>
                            <label htmlFor="departamento">Dpto<span className={styles.asterisco}>*</span></label>
                            <select className={styles.customSelect} id="departamento" name="departamento" onChange={handleDepartamentoChange} required>
                                <option value="">Selecciona un departamento</option>
                                {departamentos.map((departamento) => (
                                    <option key={departamento.id} value={departamento.id}>
                                        {departamento.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.departamentoPublicoCampana}>
                            <label  htmlFor="distrito">Distrito<span className={styles.asterisco}>*</span></label>
                            <select className={styles.customSelect} id="distrito" name="distrito" disabled={!selectedDepartamento} required>
                                <option value="">Selecciona un distrito</option>
                                {selectedDepartamento &&
                                    distritosPorDepartamento[selectedDepartamento].map((distrito) => (
                                        <option key={distrito.id} value={distrito.id}>
                                            {distrito.nombre}
                                        </option>
                                    ))}
                            </select>
                        </div>

                    </form>
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
                            <label for='nombreCampana'>Nombre de la campaña<span className={styles.asterisco}>*</span></label>
                            <input type="text" id="nombreCampana" required minLength={1} />
                        </div>

                        
                        <div className={styles.containerFechaInicioCampanas}>
                            <label for='fechaInicio'>Fecha de inicio<span className={styles.asterisco}>*</span></label>
                            <input type="date" id="fechaInicio" required />
                        </div>
                        <div className={styles.containerFechaFinCampanas}>
                            <label for='fechaFin'>Fecha de finalización<span className={styles.asterisco}>*</span></label>  
                            <input type="date" required id="fechaFin" />                          
                        </div>

                        <div className={styles.containerObjetivosCampanas}>
                            <label for='objetivosCampana'>Objetivos de la campaña<span className={styles.asterisco}>*</span></label>
                            <input type="text" id="objetivosCampana" required minLength={1} />
                        </div>

                        <div className={styles.containerPublicoObjetivoCampana}>
                            <a onClick={togglePublicoObjetivoClicked} className={styles.publicoObjetivo}> Público objetivo de la campaña<span className={styles.asterisco}>*</span> </a>

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