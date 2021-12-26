import Link from "next/link";
import Image from "next/image";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { NAME } from "../utils/variables";

import styles from "../styles/landing.module.scss";
import Seo from "../components/Seo";

const Landing = () => {
  return (
    <>
      <Seo
        title={NAME}
        description="Shop all kinds of women wear"
        imagePath="/images/logo.png"
        favicon="/favicon.ico"
      />
      <div className={`${styles.wrapper}`}>
        <div className={styles.d_view}>
          <Grid container>
            <Grid item xs={4}>
              <div className={`${styles.image} relative`}>
                <Image
                  src="/images/her1.jpeg"
                  layout="fill"
                  alt="model"
                  placeholder="blur"
                  blurDataURL="/images/her1.jpeg"
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={`${styles.image} relative`}>
                <Image
                  src="/images/her2.jpeg"
                  layout="fill"
                  alt="model"
                  placeholder="blur"
                  blurDataURL="/images/her2.jpeg"
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={`${styles.image} relative`}>
                <Image
                  src="/images/her3.jpeg"
                  layout="fill"
                  alt="model"
                  placeholder="blur"
                  blurDataURL="/images/her3.jpeg"
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={styles.m_view}>
          <Grid container>
            <Grid item xs={12}>
              <div className={`${styles.image} relative`}>
                <Image src="/images/her2.jpeg" layout="fill" alt="model" />
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={styles.shop}>
          <Link href="/">
            <p className={styles.shopname}>
              {NAME}
            </p>
          </Link>
        </div>
        <div className={styles.bto}>
          <Link href="/shop" passHref>
            <button className={styles.button} role='link'>Shop</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
