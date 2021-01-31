import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "semantic-ui-react";
import Login from "./Login";
import "./auth.scss";
import SignUp from "./SignUp";

import "semantic-ui-css/semantic.min.css";

import "../../base-styles/styles.scss";
import Typography from "@material-ui/core/Typography";
import { NAME } from '../../constants/variables'
const panes = [
  {
    menuItem: "Don't have an account?",
    render: () => (
      <Tab.Pane>
        {" "}
        <SignUp />{" "}
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Already have an account? ",
    render: () => (
      <Tab.Pane>
        {" "}
        <Login />{" "}
      </Tab.Pane>
    ),
  },
];

const Auth = () => {

  return (
    <div className="auth">
      <Link to="/" className="logoLink">
        <Typography className="logo">{NAME}</Typography>
      </Link>
      <div className="formBody">
        <Tab panes={panes} defaultActiveIndex={1} />
      </div>
    </div>
  );
};

export default Auth;
