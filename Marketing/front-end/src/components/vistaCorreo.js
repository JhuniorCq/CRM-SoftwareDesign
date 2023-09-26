import React, {useState, useEffect} from "react";
import styles from "../styles/vistaCorreo.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// importar iconos INDIVIDUALMENTE en caso sea necesario
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";  

const VistaCorreo = () => {

    const [opcionVistaCorreo, setOpcionVistaCorreo] = useState("Clientes");
    const [botonCorreo, setBotonCorreo] = useState("Todos los correos");

    const [busqueda, setBusqueda] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);

    // poniendo en negrita los anchors de ROUTES

    const toggleaClientes = () => {
        setOpcionVistaCorreo('Clientes');
    }

    const toggleaAdministrar = () => {
       setOpcionVistaCorreo('Administrar');
    }

    const toggleaAnalizar = () => {
        setOpcionVistaCorreo('Analizar');
    }

    const toggleaEstado = () => {
        setOpcionVistaCorreo('Estado');
    }

    // resaltamos el modo de correo elegido.

    const toggleTodosLosCorreos = () => {
        setBotonCorreo("Todos los correos");
    }

    const toggleCorreosProgramados = () => {
        setBotonCorreo("Programados");
    }

    const toggleCorreosEnviados = ( )=> {
        setBotonCorreo("Enviados");
    }
    const peticionGet = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {    
                setUsuarios(response.data);
                setTablaUsuarios(response.data);
            
            }).catch(error => {
                console.log(error);
            })
    }

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    // filtrado por correo
    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.email.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento;
            }
        });
        setUsuarios(resultadosBusqueda);
    }

    useEffect(() => {
        peticionGet();
    }, [])

    return(
        <body>
            <div className={styles.containerRoutes}>
            <ul className={styles.redirection}>
                <li>
                    <a className={`${styles.routes__correo} ${opcionVistaCorreo === 'Clientes' ? styles.highlightAnchor : ""}`} onClick={toggleaClientes} href="#clientes">Clientes</a>
                </li>
                <li>
                    <a className={`${styles.routes__correo} ${opcionVistaCorreo === 'Administrar' ? styles.highlightAnchor : ""}`} onClick={toggleaAdministrar} href="#administrar" >Administrar</a>
                </li>
                <li>
                    <a className={`${styles.routes__correo} ${opcionVistaCorreo === 'Analizar' ? styles.highlightAnchor : ""}`} onClick={toggleaAnalizar} href="#analizar" >Analizar</a>
                </li>
                <li>
                    <a className={`${styles.routes__correo} ${opcionVistaCorreo === 'Estado' ? styles.highlightAnchor : ""}`} onClick={toggleaEstado}  href="#estado" >Estado</a>
                </li>
            </ul>
        </div>

        <hr/>

        {/* parte de ADMINISTRAR */}

            <main className={styles.parteAdministrar}>
                <aside className={styles.parteListaIzquierda}>
                    <h1 className={styles.tituloLista}>Lista</h1>
                    <div className={styles.containerBotonesLista}>
                        <button className={`${styles.botonLista} ${botonCorreo === 'Todos los correos' ? styles.highlightButton : ""}`} onClick={toggleTodosLosCorreos} >Todos los correos</button>
                        <button className={`${styles.botonLista} ${botonCorreo === 'Programados' ? styles.highlightButton : ""}`} onClick={toggleCorreosProgramados}>Programados</button>
                        <button className={`${styles.botonLista} ${botonCorreo === 'Enviados' ? styles.highlightButton : ""}`} onClick={toggleCorreosEnviados}>Enviados</button>
                    </div>
                    
                </aside>
                <section className={styles.parteVisionCorreoDerecha}>
                    <div className={styles.barraBusqueda}>
                        <form className={styles.navSearch}>
                            <input className={styles.inputBar} onChange={handleChange} type="text" placeholder="Buscar campañas..." minlength="1" maxlength="30" />                           
                            {/* quité lo de value = {busqueda} y onChangue = {handleChange} porque aun no sé como se manejará la tabla */}
                            <button className={styles.navIconSearch} type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-info table-striped-columns">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Correos electrónicos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios && 
                                usuarios.map((usuario) => (
                                    <tr key={usuario.id}>

                                        <td>{usuario.id}</td>
                                        <td>{usuario.email}</td>
                                    </tr>
                                    
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </body>
    );
}

export default VistaCorreo;