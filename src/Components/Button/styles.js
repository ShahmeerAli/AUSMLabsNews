import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  button: {
    border: "none",
    outline: "none",
    borderRadius: "1vw",
    paddingTop: "0.5vw",
    paddingBottom: "0.5vw",
    paddingLeft: "0.7vw",
    paddingRight: "0.7vw",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1.5vw",
    textDecoration: "none",
    color: "#f3f3f3",
    "&:disabled": {
      background: "linear-gradient(to right, #192c3a 0%, #192c3a 100%)",
      cursor: "default",
    },
  },
  buttonColor1: {
    // background: "linear-gradient(to top, #ff0844 0%, #ffb199 100%)",
    // background: "linear-gradient(to top, #5f72bd 0%, #9b23ea 100%)",
    // background: "linear-gradient(to top, #09203f 0%, #537895 100%)",
    // background: "linear-gradient(-60deg, #16a085 0%, #f4d03f 100%)",
    // background: "linear-gradient(45deg, #874da2 0%, #c43a30 100%)",
    background: "linear-gradient(to top, #4481eb 0%, #04befe 100%)",
    // background: "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
  },
  buttonColor2: {
    background: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
    // background: "linear-gradient(to top, #37ecba 0%, #72afd3 100%)",
    // background: "linear-gradient(to right, #083b64 0%, #083b64 100%)",
    "&:hover": {
      background: "linear-gradient(to right, #192c3a 0%, #192c3a 100%)",
      color: "#fff",
    },
  },
});

export default styles;
