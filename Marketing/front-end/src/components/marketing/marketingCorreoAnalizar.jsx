import styles from "../../styles/vistaCorreo.module.css";
import { useState , useEffect} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";  


export const CorreoAnalizar = () => {

    const [busqueda, setBusqueda] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    
    // también lo pongo con el celular para que lo tenga al igual que lo tiene en CLIENTES.
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
            <div className={styles.containerArribaAnalizar}>
                <div className={`${styles.barraBusqueda} ${styles.barraBusquedaParteAnalizar}`}>
                        <form className={styles.navSearch}>
                            <input className={`${styles.inputBar} ${styles.inputBarParteAnalizar}`} onChange={handleChange} type="text" placeholder="Buscar campañas..." minlength="1" maxlength="30" />                           
                            {/* quité lo de value = {busqueda} y onChangue = {handleChange} porque aun no sé como se manejará la tabla */}
                            <button className={`${styles.navIconSearch} ${styles.navIconSearchParteAnalizar}`} type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>
                    </div>
                <strong className={styles.interaccionUsuariosAnalizar}>Interacción de destinatarios</strong>
            </div>
            <div className={styles.cardAnalisisEstadistico}>
                <div className={styles.enviadosCard}>
                    <h3>Enviados</h3>
                    <h1>0</h1> {/* se cambian los ceros por el valor del estado que se usará */}
                    <small>0 correos electrónicos</small>
                 </div>
                <div className={styles.tasaDeAperturaCard}>
                    <h3>Tasa de apertura</h3>
                    <h1>0%</h1>
                    <small>0 abiertos</small>
                </div>
                <div className={styles.tasaDeClicksCard}>
                    <h3>Tasa de clicks</h3>
                    <h1>0%</h1>
                    <small>0 recibieron click</small>
                </div>
            </div>
        </main>

    );

}