import { useState } from "react";
import NavbarParteGris from "../navBarParteGris";
import styles from "./stylesLlamadas/llamadasClientes.module.css";
import { Link } from "react-router-dom";
const LlamadasClientes = () => {
  const [inputCall, setInputCall] = useState("");

  const handleChangeCallInput = (e) => {
    setInputCall(e.target.value);
  };

  const vistaLlamadas = ["Clientes", "Administrar", "Estado"];

  return (
    <amin>
      <NavbarParteGris />
      <section className={styles.containerBeforeVistaLlamadas}>
        <h3>Llamadas</h3>
        <button className={styles.btnCrearLlamadas}>Crear Llamada</button>
      </section>
      <section className={styles.vistaLlamadas}>
        <ul>
          {vistaLlamadas.map((vista) => {
            <li key={vista}>
              <Link to={`/llamada/${vista}`}>{vista}</Link>
            </li>;
          })}
        </ul>
      </section>
      <div className={styles.containerTotal}>
        <section className={styles.listaLlamadasSide}>
          <h3>Lista</h3>
          <div className={styles.containerListaButtons}>
            <button>Todas las llamadas</button>
            <button>Programadas</button>
            <button>Realizadas</button>
          </div>
        </section>
        <aside>
          <input
            type="text"
            onChange={handleChangeCallInput}
            placeholder="Llamadas 📱"
          />
        </aside>
      </div>
    </amin>
  );
};

export default LlamadasClientes;
