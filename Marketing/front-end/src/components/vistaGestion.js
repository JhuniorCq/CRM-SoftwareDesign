import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from "../styles/vistaGestion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";  

const VistaGestion = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    // manejaré las opciones de 'todas las campañas', 'este mes' y 'creados recientemente (toma los últimos 3 días)
    // con este useState
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('Todas las campañas');

    const cambiaaMes = () => {
        setOpcionSeleccionada('Este mes');
        console.log("cambiado a mes!");
    }

    const cambiaaCreadoRecientemente = () => {
        setOpcionSeleccionada('Creado recientemente');
        console.log("cambiado a recientemente!");
    }

    // igual necesitaremos esta opcion para volver al default.
    const cambiaaTodasLasCampanas = () => {
        setOpcionSeleccionada('Todas las campañas');
        console.log("cambiado a todas las campañas!");
    }

    const peticionGet = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const usuariosConFecha = response.data.map(usuario => ({
                    ...usuario,
                    date : generarFechaAleatoria()
                }))
                setUsuarios(usuariosConFecha);
                setTablaUsuarios(usuariosConFecha);
                console.log(usuariosConFecha);
            }).catch(error => {
                console.log(error);
            })
    }

    function generarFechaAleatoria() {
        const fechaActual = new Date();
        const inicioAnio = new Date(fechaActual.getFullYear(), 0, 1); // 1 de enero del año actual
        const tiempoAleatorio = Math.random() * (fechaActual - inicioAnio);
        const fechaAleatoria = new Date(inicioAnio.getTime() + tiempoAleatorio); //le añado al inicio de año, el tiempo aleatorio.
        return fechaAleatoria;
    }
    

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
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
            
            <section className={styles.vistaCampanas}>
                <div className={styles.botonesCambiarVistaTabla}>
                <button className={styles.cambiarVistaTablaCampana} onClick={cambiaaTodasLasCampanas} >Todas las campañas</button>
                                <button className={styles.cambiarVistaTablaCampana} onClick={cambiaaMes}>Este mes</button>
                        <button className={styles.cambiarVistaTablaCampana} onClick={cambiaaCreadoRecientemente}>Creado recientemente</button>
                </div>


                <div className={styles.containerContenido}>

                    <div className={styles.barraBusqueda}>
                        <form className={styles.navSearch}>
                            <input className={styles.inputBar} type="text" value={busqueda} onChange={handleChange} placeholder="Buscar campañas..." minlength="1" maxlength="30" />
                           
                            <button className={styles.navIconSearch} type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>
                    </div>
                    <div className={`${styles.containerTabla} table-responsive`}>
                        <table className="table table-info table-hover align-middle">
                            <thead className="table-light align-middle">
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Teléfono</th>
                                    <th>Nombre de usuario</th>
                                    <th>Correo</th>
                                    <th>Sitio web</th>
                                    <th>Ciudad</th>
                                    <th>Empresa</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios &&
                                    usuarios.filter(usuario => {
                                        if(opcionSeleccionada === 'Este mes'){
                                            const fechaActual = new Date();
                                            const fechaCreacion = new Date(usuario.date);
                                            return fechaActual.getFullYear() === fechaCreacion.getFullYear() && 
                                            fechaActual.getMonth() === fechaCreacion.getMonth();
                                            //comparamos que sea del mismo año la fecha ingresada (por si el usuario se equivoca en poner el año)
                                        }
                                        else if(opcionSeleccionada === 'Creado recientemente'){
                                            const fechaActual = new Date();
                                            const fechaCreacion = new Date(usuario.date);
                                            const tiempoTranscurrido = (fechaActual - fechaCreacion) / (1000 * 3600 * 24); // Calcula la diferencia en días
                                            return tiempoTranscurrido <= 3 && fechaActual.getFullYear() === fechaCreacion.getFullYear();
                                        }
                                        return true; //muestra todas las campañas por defecto.
                                    })
                                    .map((usuario) => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td>{usuario.name}</td>
                                            <td>{usuario.phone}</td>
                                            <td>{usuario.username}</td>
                                            <td>{usuario.email}</td>
                                            <td>{usuario.website}</td>
                                            <td>{usuario.address.city}</td>
                                            <td>{usuario.company.name}</td>
                                            <td>{usuario.date.toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </body>
    );
}
export default VistaGestion;