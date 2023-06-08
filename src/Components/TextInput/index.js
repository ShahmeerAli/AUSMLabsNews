import React from "react";
import styles from "./styles";

function TextInput(props) {
  const classes = styles();
  return (
    <div className={classes.textInputWrapper}>
      <input {...props} />
      {props.error && (
        <p className={classes.errorMessage}>{props.errormessage}</p>
      )}
    </div>
  );
}

export default TextInput;
