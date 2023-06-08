import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import styles from "./appStyles";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Bookmarks from "./Pages/Bookmarks";
import Business from "./Pages/Business";
import Technology from "./Pages/Technology";
import Sports from "./Pages/Sports";
import Detail from "./Pages/Detail";
import Protected from "./Components/Protected";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.user.auth);
  const classes = styles();
  return (
    <div className={classes.container}>
      <BrowserRouter>
        <div className={classes.layout}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div className={classes.main}>
                  <Home />
                </div>
              }
            />
            <Route
              path="/detail"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={classes.main}>
                    <Detail />
                  </div>
                </Protected>
              }
            />

            <Route
              path="business"
              exact
              element={
                <div className={classes.main}>
                  <Business />
                </div>
              }
            />
            <Route
              path="technology"
              exact
              element={
                <div className={classes.main}>
                  <Technology />
                </div>
              }
            />
            <Route
              path="sports"
              exact
              element={
                <div className={classes.main}>
                  <Sports />
                </div>
              }
            />
            <Route
              path="bookmarks"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={classes.main}>
                    <Bookmarks />
                  </div>
                </Protected>
              }
            />
            <Route
              path="login"
              exact
              element={
                <div className={classes.main}>
                  <Login />
                </div>
              }
            />
            <Route
              path="register"
              exact
              element={
                <div className={classes.main}>
                  <Register />
                </div>
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
