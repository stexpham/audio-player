import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.contribute}>
        Looking for new Open Source Tools?{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://stepham.com"
        >
          Talk to Dev{" "}
        </a>
        here to help!
      </p>
      <p>
        corner of{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://stepham.com"
        >
          Stepham
        </a>
      </p>
    </div>
  );
};

export default Footer;
