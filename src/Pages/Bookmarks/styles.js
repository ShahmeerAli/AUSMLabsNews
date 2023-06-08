import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  cardContainer: {
    width: "95vw",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    margin: "4vw 2vw",
    cursor: "pointer",
    width: "15%",
    padding: "1vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImg: {
    borderRadius: "1vw",
    width: "100%",
    height: "100%",
  },
  cardText: {
    textAlign: "left",
    backgroundColor: "transparent",
    color: "#000",
    fontSize: "1vw",
    marginTop: "2vw",
  },
});

export default styles;
