import { useEffect, useState } from "react";
import Navbar from "../navbar";
import VistaGestion from "../vistaGestion";

const ModuloMarketing = () => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [crearCampana, setCrearCampana] = useState(false);
    const [publicoObjetivoIsClicked, setPublicoObjetivoIsClicked] = useState(false);

    // Función para cerrar los elementos cuando se hace clic en cualquier parte del documento
    const handleCloseElements = () => {
        setIsDropDownOpen(false);
        setSubMenuOpen(false);
        setCrearCampana(false);
        setPublicoObjetivoIsClicked(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleCloseElements);

        return () => {
            document.removeEventListener('click', handleCloseElements);
        }
    }, [])

    return(
        <main>
            <Navbar
            isDropDownOpen={isDropDownOpen}
            setIsDropDownOpen={setIsDropDownOpen}
            subMenuOpen={subMenuOpen}
            setSubMenuOpen={setSubMenuOpen}
            crearCampana={crearCampana}
            setCrearCampana={setCrearCampana}
            publicoObjetivoIsClicked={publicoObjetivoIsClicked}
            setPublicoObjetivoIsClicked={setPublicoObjetivoIsClicked}
            />
            <VistaGestion />
        </main>
    );
}

export default ModuloMarketing;