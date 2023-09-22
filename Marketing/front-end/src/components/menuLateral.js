import React, { useState } from 'react';
import styles from "../styles/menu.module.css"

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.menuContainer} ${menuOpen ? styles.open : ''}`}>
      <button onClick={toggleMenu}>Toggle Menu</button>
      <div className={styles.menuContent}>
        {/* Contenido del menú */}
        <p>AAAAAAAAAAAAAA</p>
        <p>Lorem IPSUM</p>
      </div>
    </div>
  );
}

export default Menu;
