import React from "react";
import styles from "./_Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>DODGE</h1>

      <ul className={styles.navigation}>
        <li>About</li>
        <li>Models</li>
        <li>Contact</li>
        <li>Experience</li>
      </ul>

      <div className={styles.buttons}>
        <span className={styles.login}>Login</span>
        <span className={styles.signUp}>Sign up</span>
      </div>
    </nav>
  );
}

export default Navbar;
