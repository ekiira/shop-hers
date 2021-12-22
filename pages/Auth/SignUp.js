import React, { useState } from "react";

import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";

import "./auth.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeHandler = (e, handler) => {
    handler(e.target.value);
  };

  const signupData = {
    name,
    email,
    password,
  };

  const clearState = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(signupData);
    clearState();
  };

  return (
    <form className="formBody_form" onSubmit={onFormSubmit}>
      <div className="formBody_fieldWrap">
        <InputLabel className="inputLabel">
          Full Name <span className="asterik">*</span>
        </InputLabel>
        <InputBase
          type="text"
          required
          fullWidth
          value={name}
          onChange={(event) => onChangeHandler(event, setName)}
          className="inputContainer"
        />
      </div>

      <div className="formBody_fieldWrap">
        <InputLabel className="inputLabel">
          Email Address <span className="asterik">*</span>
        </InputLabel>
        <InputBase
          type="email"
          required
          fullWidth
          value={email}
          onChange={(event) => onChangeHandler(event, setEmail)}
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
          fullWidth
          value={password}
          onChange={(event) => onChangeHandler(event, setPassword)}
          className="inputContainer"
        />
      </div>

      <div className="formBody_fieldWrap">
        <InputLabel className="inputLabel">
          Confirm Password <span className="asterik">*</span>
        </InputLabel>
        <InputBase
          type="password"
          required
          fullWidth
          value={confirmPassword}
          onChange={(event) => onChangeHandler(event, setConfirmPassword)}
          className="inputContainer"
        />
      </div>

      <div className="formBody_inputButtonWrapper">
        <Button
          type="submit"
          onClick={onFormSubmit}
          className="formBody_inputButton"
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
