import React from "react";
import styles from './Button.module.css';

export default function Button({text, action, color, width, fontSize}) {

  return (
    <div className={styles.buttonContainer}>
      <div
        className={styles.button}
        onClick={action}
        style={{
          'background-color': color,
          'width': width,
          'font-size': fontSize
        }}
      ></div>
      <div className={styles.buttonText}>
        {text}
      </div>
    </div>
  );
}
