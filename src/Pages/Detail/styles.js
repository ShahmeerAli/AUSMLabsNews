import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  banner: {
    width: "95vw",
    display: "flex",
  },
  bannerImg: {
    flex: 1,
    minHeight: "35vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
  },
  img: {
    flex: 3,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "50%",
    backgroundColor: "black",
    opacity: "0.8",
  },
  fav: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    "&:hover": {
      backgroundColor: "black",
      opacity: 0.9,
    },
  },

  bannerText: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    justifyContent: "flex-start",
    padding: "1vw",
  },
  textWrapper: { flex: 1, marginBottom: "10vw" },
  text: {
    marginBottom: "1vw",
    margin: 0,
    color: "#000",
    fontSize: "1.2vw",
    fontWeight: "bold",
  },
  head: {
    margin: 0,
    color: "#000",
    fontSize: "1.5vw",
    fontWeight: "bold",
  },
  button: {
    width: "7vw",
    height: "10vw",
    fontSize: "5vw",
    background: "none",
    outline: "none",
    border: "none",
  },

  cardContainer: {
    width: "95vw",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    // borderWidth: "1vw",
    // borderStyle: "solid",
    // borderColor: "white",
    // borderRadius: "2vw",
    margin: "4vw 2vw",
    cursor: "pointer",
    width: "20%",
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
    marginTop: "2vw",
  },
});

export default styles;
