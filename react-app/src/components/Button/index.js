import React from "react";
import styles from './Button.module.css';

export default function Button({text, action, color, width}) {

  return (
    <div className={styles.buttonContainer}>
      <div
        className={styles.button}
        onClick={action}
        style={{
          'background-color': color,
          'width': width
        }}
      ></div>
      <div className={styles.buttonText}>
        {text}
      </div>
    </div>
  );
}
