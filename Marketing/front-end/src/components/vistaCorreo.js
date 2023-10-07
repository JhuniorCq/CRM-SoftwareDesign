import React, {useState, useEffect} from "react";
import styles from "../styles/vistaCorreo.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// importar iconos INDIVIDUALMENTE en caso sea necesario

import "bootstrap/dist/css/bootstrap.min.css";  
import { Link } from "react-router-dom";
import { CorreoAdministrar } from "./marketing/marketingCorreoAdministrar";
import { CorreoClientes } from "./marketing/marketingCorreoClientes";
import { CorreoAnalizar } from "./marketing/marketingCorreoAnalizar";
import { CorreoEstado } from "./marketing/marketingCorreoEstado";

const VistaCorreo = () => {

    const [opcionVistaCorreo, setOpcionVistaCorreo] = useState("Clientes");

    // poniendo en negrita los anchors de ROUTES

    const toggleaClientes = (e) => {
        e.preventDefault();
        setOpcionVistaCorreo('Clientes');
    }

    const toggleaAdministrar = (e) => {
        e.preventDefault();
        setOpcionVistaCorreo('Administrar');
    }

    const toggleaAnalizar = (e) => {
        e.preventDefault();
        setOpcionVistaCorreo('Analizar');
    }

    const toggleaEstado = (e) => {
        e.preventDefault();
        setOpcionVistaCorreo('Estado');
    }

    return(
        <body>
            <div className={styles.containerRoutes}>
            <ul className={styles.redirection}>
                <li>
                    <Link className={`${styles.routes__correo} ${opcionVistaCorreo === 'Clientes' ? styles.highlightAnchor : ""}`} onClick={toggleaClientes} to={'/clientes'}>Clientes</Link>
                </li>
                <li>
                    <Link className={`${styles.routes__correo} ${opcionVistaCorreo === 'Administrar' ? styles.highlightAnchor : ""}`} onClick={toggleaAdministrar} to={'correo/administrar'} >Administrar</Link>
                </li>
                <li>
                    <Link className={`${styles.routes__correo} ${opcionVistaCorreo === 'Analizar' ? styles.highlightAnchor : ""}`} onClick={toggleaAnalizar} to={'correo/analizar'} >Analizar</Link>
                </li>
                <li>
                    <Link className={`${styles.routes__correo} ${opcionVistaCorreo === 'Estado' ? styles.highlightAnchor : ""}`} onClick={toggleaEstado} to={'/correo/estado'} >Estado</Link>
                </li>
            </ul>
        </div>

        <hr/>

        {/* parte de ADMINISTRAR */}
        { opcionVistaCorreo === 'Clientes' ?(<CorreoClientes/> ): null}
        {opcionVistaCorreo === 'Administrar' ? (
            <CorreoAdministrar/>
        ) : null}
        {opcionVistaCorreo === 'Analizar' ? <CorreoAnalizar/> : null}
        {opcionVistaCorreo === 'Estado' ? <CorreoEstado/> : null}
            
            
        </body>
    );
}

export default VistaCorreo;