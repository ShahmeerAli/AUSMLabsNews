import React from "react";
import styles from "./styles";

function SecondaryButton({ text, color, handleClick }) {
  const classes = styles();
  return (
    <button
      onClick={handleClick}
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

export default SecondaryButton;
