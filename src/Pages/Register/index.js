import React, { useState } from "react";
import styles from "./styles";
import TextInput from "../../Components/TextInput";
import Button from "../../Components/Button";
import SecondaryButton from "../../Components/SecondaryButton";
import { useFormik } from "formik";
import registerSchema from "../../Schemas/registerSchema";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../Store/userSlice";
import { register } from "../../Api/internal";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const classes = styles();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = async () => {
    const data = {
      name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    //try catch used already in Api
    const response = await register(data);

    if (response.status === 201) {
      //1. Set User
      const user = {
        _id: response.data.user._id,
        username: response.data.user.username,
        email: response.data.user.email,
        auth: response.data.auth,
      };
      dispatch(setUser(user));
      //2.Redirect Home Page
      navigate("/");
    } else if (response.code === "ERR_BAD_REQUEST") {
      //diplay error message
      setError(response.response.data.message);
    }
  };

  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: registerSchema,
  });

  return (
    <div className={classes.loginWrapper}>
      <div className={classes.loginHeader}>Create an Account</div>
      <div className={classes.loginInput}>
        <TextInput
          type="text"
          value={values.name}
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="name"
          error={errors.name && touched.name ? 1 : undefined}
          errormessage={errors.name}
        />
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
          type="email"
          value={values.email}
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="email"
          error={errors.email && touched.email ? 1 : undefined}
          errormessage={errors.email}
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
        <TextInput
          type="password"
          value={values.confirmPassword}
          name="confirmPassword"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="confirm password"
          error={
            errors.confirmPassword && touched.confirmPassword ? 1 : undefined
          }
          errormessage={errors.confirmPassword}
        />
      </div>
      <div className={classes.bottom}>
        <Button
          text={"Sign Up"}
          disabled={
            !values.username ||
            !values.password ||
            !values.email ||
            !values.name ||
            !values.confirmPassword ||
            errors.password ||
            errors.username ||
            errors.confirmPassword ||
            errors.name ||
            errors.email
          }
          handleClick={handleRegister}
        />
        <span className={classes.bottomWrapper}>
          <p className={classes.bottomText}>Already have an account?</p>{" "}
          <SecondaryButton
            color={true}
            text={"Log In"}
            handleClick={handleLogin}
          />
        </span>
      </div>
      {error != "" ? <p className={classes.errorMessage}>{error}</p> : ""}
    </div>
  );
}

export default Register;
