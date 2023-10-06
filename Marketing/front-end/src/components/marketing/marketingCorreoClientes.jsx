import styles from "../../styles/vistaCorreo.module.css";
import { useState , useEffect} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";  


export const CorreoClientes = () => {
    
    const [busqueda, setBusqueda] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    
    function generarCelularAleatorio() {
        const nroEmpieza = 9;
        const restoCel = [];

        for (let i = 0; i < 9; i++) {
            const numeroAleatorio = Math.floor(Math.random() * 9) + 1;
            restoCel.push(numeroAleatorio);
        }
        const numeroCelular = nroEmpieza.toString() + restoCel.join('');
        return numeroCelular;
    }


    const peticionGet = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {    
                const usuariosSelectos = response.data.map((usuario) => ({
                    ...usuario,
                    celphone : generarCelularAleatorio(),
                    gender : 'masculino'
                }))
                setUsuarios(usuariosSelectos);
                setTablaUsuarios(usuariosSelectos);
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
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento;
            }
        });
        setUsuarios(resultadosBusqueda);
    }

    useEffect(() => {
        peticionGet();
    }, [])

    return(
        <main>
            <div className={styles.containerArribaClientes}>
                <strong>Publico Objetivo</strong>
                <div className={styles.barraBusqueda}>
                        <form className={styles.navSearch}>
                            <input className={styles.inputBar} onChange={handleChange} type="text" placeholder="Buscar campañas..." minlength="1" maxlength="30" />                           
                            {/* quité lo de value = {busqueda} y onChangue = {handleChange} porque aun no sé como se manejará la tabla */}
                            <button className={styles.navIconSearch} type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>
                    </div>
            </div>
            <div className={`table-responsive ${styles.containerTablaClientes}`}>
                <table className="table table-info table-hover align-middle">
                    <thead className="table-light align-middle">
                        <tr>
                            <td>Id</td>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>Correo</td>
                            <td>Género</td>
                            <td>Celular</td>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios &&
                        usuarios.map((usuario) => {
                            return (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.name}</td>
                                    <td>{usuario.company.name}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.gender}</td>
                                    <td>{usuario.celphone}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </main>
    );
}