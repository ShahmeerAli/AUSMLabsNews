import React from "react";
import styles from "./styles";

function Footer() {
  const classes = styles();
  return <p className={classes.footer}>&copy; AUSM LABS 2023</p>;
}

export default Footer;
