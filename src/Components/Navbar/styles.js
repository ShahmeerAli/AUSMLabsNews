import { createUseStyles } from "react-jss";
import { vh } from "../../Units";

const fontSize = "1.5vw";

const styles = createUseStyles({
  navbarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "96vw",
  },
  navbarWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "90vw",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: "0.5vw",
    paddingBottom: "0.5vw",
    margin: "0.5vw",
    width: "90%",
  },
  logo: {
    height: "8vw",
    width: "8vw",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "15vw",
  },
  active: {
    color: "#3861fb",
    fontSize: fontSize,
    fontWeight: "bold",
  },
  inActive: {
    color: "#fff",
    textDecoration: "none",
    fontSize: fontSize,
    fontWeight: "bold",
  },
  separator: {
    height: "0.5vh",
    background: "linear-gradient(to right, transparent, #9ba3c2, transparent)",
    width: "80vw",
  },
});

export default styles;
