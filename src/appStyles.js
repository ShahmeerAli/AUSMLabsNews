import { createUseStyles } from "react-jss";
import { vh, vw } from "./Units";

const styles = createUseStyles({
  container: {
    marginTop: "1vh",
    marginBottom: "1vh",
    marginLeft: "2vw",
    marginRight: "2vw",
    fontSize: "2vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "98vh",
    width: "96vw",
  },
  main: {
    flex: 1,
  },
});

export default styles;
