import React from "react";
import styles from "./styles";

function Button({ text, color, handleClick, disabled }) {
  const classes = styles();
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={
        color
          ? `${classes.button} ${classes.buttonColor1}`
          : `${classes.button} ${classes.buttonColor2}`
      }
    >
      {text}
    </button>
  );
}

export default Button;
