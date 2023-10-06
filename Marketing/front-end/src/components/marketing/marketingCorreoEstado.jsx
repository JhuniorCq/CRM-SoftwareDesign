import styles from "../../styles/vistaCorreo.module.css";
import { useState , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";  


export const CorreoEstado = () => {
    
    return(
        <main>
            <div className={styles.cardAnalisisParteEstado}>
                <div className={styles.enviadosCardParteEstado}>
                    <h3>Enviados</h3>
                    <h1>0</h1> {/* se cambian los ceros por el valor del estado que se usará */}
                    <small>0 correos electrónicos</small>
                 </div>
                <div className={styles.tasaDeAperturaCardParteEstado}>
                    <h3>Tasa de apertura</h3>
                    <h1>0%</h1>
                    <small>0 abiertos</small>
                </div>
                <div className={styles.tasaDeClicksCardParteEstado}>
                    <h3>Tasa de clicks</h3>
                    <h1>0%</h1>
                    <small>0 recibieron click</small>
                </div>
            </div>
            <strong className={styles.evolucionParteEstado}>Evolución</strong>
            <div className={styles.containerParteGraficoEstadisticoParteEstado}>
                <div className={styles.graficoEstado}>
                    Colocar gráfico aquí
                </div>
            </div>
        </main>
    )
}