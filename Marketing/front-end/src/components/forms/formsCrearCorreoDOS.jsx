import React, { useState, useEffect, useId } from "react";
import styles from "./formsCrearCorreoDOS.module.css";

function FormCrearCorreoDos({ submitSiguiente, setSubmitSiguiente }) {
  const [emailUser, setEmail] = useState("");
  const [sendNow, setSendNow] = useState(true);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [formFinal, setFormFinal] = useState([]);

  const emailUserID = useId();
  const fechaID = useId();
  const horaID = useId();

  useEffect(() => {
    if (sendNow) {
      setIsSubmitDisabled(!emailUser);
    } else {
      setIsSubmitDisabled(!emailUser || !date || !time || isDateTimeValid());
    }
  }, [emailUser, sendNow, date, time]);

  const isDateTimeValid = () => {
    const selectedDateTime = new Date(`${date}T${time}`);
    const currentDateTime = new Date();
    return selectedDateTime < currentDateTime;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendOptionChange = (e) => {
    setSendNow(e.target.value === "now");
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFinalForm = new FormData(e.target);
    const newCorreoDos = Object.fromEntries(newFinalForm);

    setFormFinal((prevState) => ({
      ...prevState,
      ...submitSiguiente,
      ...newCorreoDos,
    }));

    console.log(formFinal);

    // Aquí puedes enviar el correo o realizar la acción deseada.
  };

  const handleConsoleLog = () => {
    console.log(formFinal);
  };

  return (
    <form className={styles.formCrearCorreoCampana} onSubmit={handleSubmit}>
      <div className={styles.containerCorreoCliente}>
        <label htmlFor={emailUserID}>Enviar a:</label>
        <input
          id={emailUserID}
          type="email"
          value={emailUser}
          name="emailUser"
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className={styles.containerOpcionEnvio}>
        <label className={styles.labelRadioButtonUno}>
          ¿Enviar ahora?
          <input
            type="radio"
            value="now"
            name="send"
            checked={sendNow}
            onChange={handleSendOptionChange}
          />
        </label>
        <label className={styles.labelRadioButtonDos}>
          ¿Enviar más tarde?
          <input
            type="radio"
            value="later"
            name="send"
            checked={!sendNow}
            onChange={handleSendOptionChange}
          />
        </label>
      </div>
      {!sendNow && (
        <div
          className={`${styles.containerDateTime} ${
            !sendNow ? styles.abrirOptMasTarde : styles.hideOptMasTarde
          }`}
        >
          <label htmlFor={fechaID}>Fecha:</label>
          <input
            type="date"
            value={date}
            name="date"
            id={fechaID}
            onChange={handleDateChange}
            required
          />
          <label htmlFor={horaID}>Hora:</label>
          <input
            type="time"
            value={time}
            name="time"
            id={horaID}
            onChange={handleTimeChange}
            required
          />
        </div>
      )}
      <button
        className={`${styles.btnSubmitFinalForm} ${
          isSubmitDisabled ? styles.botonDisabled : ""
        }`}
        type="submit"
        disabled={isSubmitDisabled}
      >
        Enviar
      </button>
      <button onClick={handleConsoleLog}>handleconsolelog</button>
    </form>
  );
}

export default FormCrearCorreoDos;
