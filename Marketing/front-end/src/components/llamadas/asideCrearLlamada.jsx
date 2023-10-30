import styles from "./stylesLlamadas/asideCrearLlamada.module.css";
import { useCrearLlamada } from "./storeLlamadas/storeCrearLlamada";
import { FaXmark } from "react-icons/fa6";

export const CrearLlamadaLateral = () => {
  const toggleCrearLlamada = useCrearLlamada(
    (state) => state.toggleCrearLlamada
  );

  const crearLlamada = useCrearLlamada((state) => state.crearLlamada);
  const handleCrearLlamada = () => {
    toggleCrearLlamada();
  };

  return (
    <div
      className={`${styles.crearLlamadaLateral} ${
        crearLlamada ? styles.showCrearLlamadaLateral : ""
      }`}
    >
      <FaXmark
        className={styles.cerrarCrearLlamada}
        onClick={handleCrearLlamada}
      />
      Formulario para crear llamada
    </div>
  );
};
