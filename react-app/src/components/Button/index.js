import React from "react";
import styles from './Button.module.css';

export default function Button({text, action, color}) {

  return (
    <div className={styles.buttonContainer}>
      <div
        style={{
          'background-color': color
        }}
        onClick={action}
        className={styles.button}
      ></div>
      <div className={styles.buttonText}>
        {text}
      </div>
    </div>
  );
}
