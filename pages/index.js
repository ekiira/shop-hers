import Link from "next/link";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { NAME } from "../utils/variables";

import styles from "../styles/landing.module.scss";

const Landing = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.d_view}>
        <Grid container>
          <Grid item xs={4}>
            <img
              src="images/her1.jpeg"
              className={`${styles.image}`}
              alt="model"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src="images/her2.jpeg"
              className={`${styles.image}`}
              alt="model"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src="images/her3.jpeg"
              className={`${styles.image}`}
              alt="model"
            />
          </Grid>
        </Grid>
      </div>

      <div className={styles.m_view}>
        <Grid container>
          <Grid item xs={12}>
            <img
              src="images/her2.jpeg"
              className={`${styles.image}`}
              alt="model"
            />
          </Grid>
        </Grid>
      </div>

      <div className={styles.shop}>
        <Typography className={styles.shopname} variant="h6">
          <Link href="/" className={styles.shopname}>
            {NAME}
          </Link>
        </Typography>
      </div>
      <div className={styles.bto}>
        <Link href="/">
          <Button>Shop</Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
