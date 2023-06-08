import React, { useState } from "react";
import styles from "./styles";
import { NavLink } from "react-router-dom";
import { images } from "../../Utils";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Api/internal";
import { resetUser } from "../../Store/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logout();
    dispatch(resetUser());
  };
  const isAuth = useSelector((state) => state.user.auth);
  const classes = styles();
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <nav className={classes.navbarContainer}>
      <NavLink className={`${classes.inActive}`} to="/">
        <img className={classes.logo} src={images.logo}></img>
      </NavLink>
      <div className={classes.navbarWrapper}>
        <div className={classes.navbar}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.inActive
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.inActive
            }
            to="business"
          >
            Business
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.inActive
            }
            to="technology"
          >
            Technology
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.inActive
            }
            to="sports"
          >
            Sports
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.inActive
            }
            to="bookmarks"
          >
            Bookmarks
          </NavLink>
          <div className={classes.buttons}>
            {isAuth ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : classes.inActive
                }
                to="/"
              >
                <Button text={"Sign Out"} handleClick={handleLogout} />
              </NavLink>
            ) : (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? setLogin(true) : setLogin(false)
                  }
                  to="login"
                >
                  <Button color={login} text={"Log In"} />
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? setRegister(true) : setRegister(false)
                  }
                  to="register"
                >
                  <Button color={register} text={"Register"} />
                </NavLink>
              </>
            )}
          </div>
        </div>
        <div className={classes.separator}></div>
      </div>
    </nav>
  );
}

export default Navbar;
