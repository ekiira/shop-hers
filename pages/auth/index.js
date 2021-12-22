import Link from "next/link";
import { Tab } from "semantic-ui-react";
import Login from "./Login";
import SignUp from "./SignUp";

import "semantic-ui-css/semantic.min.css";

import Typography from "@material-ui/core/Typography";
import { NAME } from "../../utils/variables";

import styles from "../../styles/auth.module.scss";

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
    <div className={styles.auth}>
      <div>
        <Link href="/" className={styles.logoLink}>
          <Typography className={styles.logo}>{NAME}</Typography>
        </Link>
        <div className={styles.formBody}>
          <Tab panes={panes} defaultActiveIndex={1} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
