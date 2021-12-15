import React, { useState } from "react";

import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import "./auth.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandler = (e, handler) => {
    handler(e.target.value);
  };

  const loginData = {
    email,
    password,
  };

  const clearState = () => {
    setEmail("");
    setPassword("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    clearState();
  };

  return (
    <form className="formBody_form" onSubmit={onFormSubmit}>
      <div className="formBody_fieldWrap">
        <InputLabel className="inputLabel">
          Email Address <span className="asterik">*</span>
        </InputLabel>
        <InputBase
          type="email"
          required
          value={email}
          onChange={(event) => onChangeHandler(event, setEmail)}
          fullWidth
          className="inputContainer"
        />
      </div>
      <div className="formBody_fieldWrap">
        <InputLabel className="inputLabel">
          Password <span className="asterik">*</span>
        </InputLabel>
        <InputBase
          type="password"
          required
          value={password}
          onChange={(event) => onChangeHandler(event, setPassword)}
          fullWidth
          className="inputContainer"
        />
      </div>

      <div className="formBody_inputButtonWrapper">
        <Button
          type="submit"
          onClick={onFormSubmit}
          className="formBody_inputButton"
        >
          Log In
        </Button>
      </div>
    </form>
  );
};

export default Login;
