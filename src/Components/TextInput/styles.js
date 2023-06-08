import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  textInputWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "35vw",
    alignItems: "center",
    justifyContent: "center",
    "& input": {
      paddingTop: "0.1vw",
      paddingBottom: "0.1vw",
      paddingLeft: "2vw",
      width: "20vw",
      paddingRight: "2vw",
      marginTop: "3vh",
      outline: "none",
      border: "10px solid #fff",
      borderRadius: "2vh",
      fontSize: "1.5vw",
    },
  },

  errorMessage: {
    color: "red",
    textAlign: "center",
    width: "100%",
    fontSize: "1.3vw",
  },
});

export default styles;
