import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  loginWrapper: {
    flex: 1,
    margin: 0,
    width: "80vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  loginHeader: {
    flex: 1,
    fontSize: "2.5vw",
    fontWeight: "bold",
    width: "inherit",
    textAlign: "center",
    marginTop: "2vh",
  },
  loginInput: {
    flex: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "inherit",
    marginTop: "2vh",
  },
  bottom: {
    flex: 1,
    width: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "2vh",
  },
  bottomWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "15vw",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomText: {
    fontSize: "1vw",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    width: "100%",
    fontSize: "1.3vw",
  },
});

export default styles;
