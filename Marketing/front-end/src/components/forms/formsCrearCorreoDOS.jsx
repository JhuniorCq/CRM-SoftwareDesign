import styles from "./formsCrearCorreoDOS.module.css";
import { useEffect, useId, useRef, useState } from "react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { createCorreosCampanas, getCorreosCampanas } from "../campanasAPI";
import { useCampanas } from "../store/useCampanas";

const FormCrearCorreoDos = (props) => {
  const correoEnviarID = useId();
  const radioIDUno = useId();
  const radioIDDos = useId();

  const [correoCliente, setCorreoCliente] = useState("");
  const [secondFormIsCompleted, setSecondFormIsCompleted] = useState(false);

  const [opcionEnviar, setOpcionEnviar] = useState("");
  const [isEnviarMasTardeSelectedState, setIsEnviarMasTardeSelectedState] =
    useState(false);
  const [isEnviarAhoraSelectedState, setIsEnviarAhoraSelectedState] =
    useState(false);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // estado global zustand para contar los correos creados
  const addCorreoCount = useCampanas((state) => state.addCorreosEnviados);

  // esto lo puedo hacer con ZUSTAND PARA MANEJAR MEJOR EL ESTADO GLOBAL
  const { submitSiguiente, setSubmitSiguiente } = props;

  const { data } = useQuery({
    queryKey: ["correoscampanascreadas"],
    queryFn: getCorreosCampanas,
  });

  const queryClient = useQueryClient();
  const agregarCorreoCampana = useMutation({
    mutationFn: createCorreosCampanas,
    onSuccess: () => {
      queryClient.invalidateQueries("correoscampanascreadas");
      console.log("campaña añadida correctamente!");
      console.log(data);
    },
  });

  const handleCorreoChange = (e) => {
    const nuevoCorreo = e.target.value;

    const correoRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (correoRegex.test(nuevoCorreo)) {
      setCorreoCliente(nuevoCorreo);
    } else {
      // poner mensaje de error
    }
  };

  useEffect(() => {
    handleCorreoChange({
      target: { value: correoCliente },
    });
  }, [correoCliente]);

  const handleRadioChange = (e) => {
    const selectedOption = e.target.value;
    setOpcionEnviar(selectedOption);
  };

  //   validando los DATES & TIMES
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  useEffect(() => {
    const isEnviarAhoraSelectedEffect = opcionEnviar === "ahora";
    const isEnviarMasTardeSelectedEffect = opcionEnviar === "masTarde";
    const isFechasCompletas = selectedDate && selectedTime;

    if (isEnviarMasTardeSelectedEffect) {
      setIsEnviarMasTardeSelectedState(true);
      setIsEnviarAhoraSelectedState(false);
    }

    if (isEnviarAhoraSelectedEffect) {
      setIsEnviarMasTardeSelectedState(false);
      setIsEnviarAhoraSelectedState(true);
    }

    if (correoCliente.length >= 5 && isEnviarAhoraSelectedState) {
      setSecondFormIsCompleted(true);
      console.log("PRIMERO");
    } else if (correoCliente.length >= 5 && isFechasCompletas) {
      setSecondFormIsCompleted(true);
      console.log("SEGUNDO");
    } else {
      setSecondFormIsCompleted(false);
      console.log("ninguno");
    }
  }, [correoCliente, opcionEnviar, selectedDate, selectedTime]);

  // useEffect(() => {
  //   const isDateValid = new Date(selectedDate) > new Date();
  //   const isToday = new Date(selectedDate) === new Date();

  //   if (isToday) {

  // ..................................................................

  //   }
  // }, [selectedDate]);

  const isTimeEnabled = new Date(selectedDate) >= new Date();

  const handleSubmitCorreo = (e) => {
    e.preventDefault();
    const formDataDos = new FormData(e.target);
    const newCorreoDos = Object.fromEntries(formDataDos);

    setSubmitSiguiente((prevState) => ({
      ...prevState,
      newCorreoDos,
    }));

    console.log(submitSiguiente);
    // agregarCorreoCampana.mutate({
    //     ...submitSiguiente
    // })
    // addCorreoCount()
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Añade ceros iniciales si es necesario
    const day = today.getDate().toString().padStart(2, "0"); // Añade ceros iniciales si es necesario
    return `${year}-${month}-${day}`;
  };

  return (
    <form
      className={`${styles.formCrearCorreoCampana}`}
      onSubmit={handleSubmitCorreo}
    >
      <div className={styles.containerCorreoCliente}>
        <label htmlFor={correoEnviarID}>Enviar a...</label>
        <input
          type="email"
          required
          placeholder="name@email.com"
          name="clientEmail"
          id={correoEnviarID}
          onChange={handleCorreoChange}
        />
      </div>

      <div className={styles.containerOpcionEnvio}>
        <span>Opciones de envío:</span>
        <div className={styles.checkBoxesFormCrearCorreo}>
          <label className={styles.labelRadioButtonUno} htmlFor={radioIDUno}>
            <span>Enviar Ahora</span>
            <input
              type="radio"
              required
              id={radioIDUno}
              value="ahora"
              name="sendOption"
              onChange={handleRadioChange}
            />
          </label>

          <label className={styles.labelRadioButtonDos} htmlFor={radioIDDos}>
            <span>Enviar más tarde</span>
            <input
              type="radio"
              id={radioIDDos}
              value="masTarde"
              name="sendOption"
              onChange={handleRadioChange}
            />
          </label>
        </div>
        <div
          className={`${styles.optEnviarMasTarde} ${
            isEnviarMasTardeSelectedState
              ? styles.abrirOptMasTarde
              : styles.hideOptMasTarde
          }`}
        >
          <span>Programar Envío:</span>
          <div className={styles.containerInputsDate}>
            <input
              type="date"
              // required={isEnviarMasTardeSelected}
              min={getCurrentDate(new Date())}
              onChange={handleDateChange}
              name="sendingDate"
            />

            <input
              type="time"
              // required={isEnviarMasTardeSelected}
              disabled={!isTimeEnabled}
              onChange={handleTimeChange}
              name="sendingTime"
            />
          </div>
        </div>
      </div>

      <button
        className={`${styles.btnCrearCorreo1} ${
          !secondFormIsCompleted ? styles.botonDisabled : ""
        }`}
        disabled={!secondFormIsCompleted}
      >
        Revisar y enviar
      </button>
    </form>
  );
};

export default FormCrearCorreoDos;
