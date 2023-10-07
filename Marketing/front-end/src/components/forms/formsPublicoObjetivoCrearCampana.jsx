import { useState } from "react";
import { distritosPorDepartamento, departamentos } from "../dataDistritosDepartamentos";
import styles from "./formsPublicoObjetivo.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const FormsPublicoObjetivoCrearCampana = (props) => {

    const {setSecondFormIsSubmitted, setPublicoObjetivoIsClicked, publicoObjetivoIsClicked, onSecondFormSubmit} = props


    const [selectedDepartamento, setSelectedDepartamento] = useState('');
    const [guardarIsClicked, setGuardarIsClicked] = useState(false);

    const handleSubmitSubmenu = (e) => {
        e.preventDefault()
        setGuardarIsClicked(true);

        const formDataSubmenu = new FormData(e.target); 
        const dataSubMenu = Object.fromEntries(formDataSubmenu);
        console.log(dataSubMenu);

        setSecondFormIsSubmitted(true);

        onSecondFormSubmit(dataSubMenu);
    }

    const handleDepartamentoChange = (e) => {
        setSelectedDepartamento(e.target.value);
    };


    const togglePublicoObjetivoClicked = (e) => {
        setPublicoObjetivoIsClicked(!publicoObjetivoIsClicked);
    }

    return(
        <div className={`${styles.menuPopupPublicoObjetivo} ${publicoObjetivoIsClicked ? styles.showMenuPopup : ''} 
        ${guardarIsClicked ? styles.hidePopupMenu : ""}`}>

            <div className={styles.hamburguerPopup} onClick={togglePublicoObjetivoClicked}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            

            <form className={styles.formSubmenuCrearCampana} onSubmit={handleSubmitSubmenu}>

                <div className={styles.labelsPublicoCampana}>
                    <label htmlFor='edadDirigida'>Edad dirigida<span className={styles.asterisco}>*</span></label>
                    <label htmlFor='sexo'>Sexo<span className={styles.asterisco}>*</span></label>
                </div>
                <div className={styles.inputsPublicoCampana}>
                    <select className={styles.customSelect} id="edadDirigida" name="targeredAge" required>
                        <option value="rangoEdad1">11-19</option>
                        <option value="rangoEdad2">20-29</option>
                        <option value="rangoEdad3">30-39</option>
                        <option value="rangoEdad4">40-49</option>
                        <option value="rangoEdad5">50-59</option>
                        <option value="rangoEdad6">60 a más</option>
                    </select>

                    <select id="sexo" className={styles.customSelect} name="gender" required>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="prefieroNoDecirlo">Prefiero no decirlo</option>
                    </select>
                </div>

                <div className={styles.departamentoPublicoCampana}>
                    <label htmlFor="departamento">Departamento<span className={styles.asterisco}>*</span></label>
                    <select
                        className={styles.customSelect}
                        id="departamento"
                        name="department"
                        onChange={handleDepartamentoChange}
                        required
                    >
                        <option value="">Selecciona un departamento</option>
                        {departamentos.map((departamento) => (
                            <option key={departamento.id} value={departamento.id}>
                                {departamento.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.departamentoPublicoCampana}>
                    <label htmlFor="distrito">Distrito<span className={styles.asterisco}>*</span></label>
                    <select
                        className={styles.customSelect}
                        id="distrito"
                        name="district"
                        disabled={!selectedDepartamento}
                        required
                    >
                        <option value="">Selecciona un distrito</option>
                        {selectedDepartamento &&
                            distritosPorDepartamento[selectedDepartamento].map((distrito) => (
                                <option key={distrito.id} value={distrito.id}>
                                    {distrito.nombre}
                                </option>
                            ))}
                    </select>
                </div>
                <div className={styles.containerBotonesPopup}>
                    <button type="submit" className={styles.botonPopup} >Guardar</button>
                </div>

            </form>
        </div>
    ); 
}

export default FormsPublicoObjetivoCrearCampana;