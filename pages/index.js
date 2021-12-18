import Link from "next/link";
import Image from "next/image";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { NAME } from "../utils/variables";

import styles from "../styles/landing.module.scss";

const Landing = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.d_view}>
        <Grid container>
          <Grid item xs={4}>
            <div className={`${styles.image} relative`}>
              <Image src="/images/her1.jpeg" layout="fill" alt="model" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={`${styles.image} relative`}>
              <Image src="/images/her2.jpeg" layout="fill" alt="model" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={`${styles.image} relative`}>
              <Image src="/images/her3.jpeg" layout="fill" alt="model" />
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={styles.m_view}>
        <Grid container>
          <Grid item xs={12}>
            <div className={`${styles.image} relative`}>
              <Image src="images/her2.jpeg" alt="model" />
            </div>
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
        <Link href="/shop">
          <Button>Shop</Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
