import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Stepham Music Corner</h1>
      <p className={styles.description}>
        Relax.
      </p>
    </div>
  );
};

export default Header;
