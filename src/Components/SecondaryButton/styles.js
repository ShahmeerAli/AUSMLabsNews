import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  button: {
    border: "none",
    outline: "none",
    borderRadius: "0.3vw",
    paddingTop: "0.2vw",
    paddingBottom: "0.2vw",
    paddingLeft: "0.6vw",
    paddingRight: "0.6vw",
    cursor: "pointer",
    fontSize: "0.7vw",
    textDecoration: "none",
    color: "#000000",
  },
  buttonColor1: {
    background: "linear-gradient(to top, #37ecba 0%, #72afd3 100%)",
    // background: "linear-gradient(to right, #083b64 0%, #083b64 100%)",
    "&:hover": {
      background: "linear-gradient(to right, #192c3a 0%, #192c3a 100%)",
      color: "#fff",
    },
  },
  buttonColor2: {
    // background: "linear-gradient(to top, #37ecba 0%, #72afd3 100%)",
    background: "linear-gradient(to right, #083b64 0%, #083b64 100%)",
    "&:hover": {
      background: "linear-gradient(to right, #192c3a 0%, #192c3a 100%)",
      color: "#fff",
    },
  },
});

export default styles;
