import React, { useState } from "react";
import TextInput from "../../Components/TextInput";
import loginSchema from "../../Schemas/loginSchema";
import { useFormik } from "formik";
import styles from "./styles";
import Button from "../../Components/Button";
import SecondaryButton from "../../Components/SecondaryButton";
import { login } from "../../Api/internal";
import { setUser } from "../../Store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const data = {
      username: values.username,
      password: values.password,
    };
    //try catch used already in Api
    const response = await login(data);

    if (response.status === 200) {
      //1. setUser
      const user = {
        _id: response.data.user._id,
        username: response.data.user.username,
        email: response.data.user.email,
        auth: response.data.auth,
      };
      dispatch(setUser(user));
      //2. redirect -> homepage
      navigate("/bookmarks");
    } else if (response.code === "ERR_BAD_REQUEST") {
      //diplay error message
      setError(response.response.data.message);
    }
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
  });

  const classes = styles();
  return (
    <div className={classes.loginWrapper}>
      <div className={classes.loginHeader}>Log in to your Account</div>
      <div className={classes.loginInput}>
        <TextInput
          type="text"
          value={values.username}
          name="username"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="username"
          error={errors.username && touched.username ? 1 : undefined}
          errormessage={errors.username}
        />
        <TextInput
          type="password"
          value={values.password}
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="password"
          error={errors.password && touched.password ? 1 : undefined}
          errormessage={errors.password}
        />
      </div>
      <div className={classes.bottom}>
        <Button
          text={"Log In"}
          disabled={
            !values.username ||
            !values.password ||
            errors.password ||
            errors.username
          }
          handleClick={handleLogin}
        />
        <span className={classes.bottomWrapper}>
          <p className={classes.bottomText}>Don't have an account?</p>{" "}
          <SecondaryButton
            color={true}
            text={"Register"}
            handleClick={handleRegister}
          />
        </span>
      </div>
      {error != "" ? <p className={classes.errorMessage}>{error}</p> : ""}
    </div>
  );
}

export default Login;
