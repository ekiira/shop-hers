import React from "react";
import Link from "next/link";

import Image from "next/image";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";

import styles from "../../styles/shop.module.scss";

const Clothing = () => {
  return (
    <div className="pt5 pb5">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3} className="pt4 pb4">
            <div className={styles.category_content}>
              <div className="relative">
                <Image
                  src="/images/clothing/shirt1.jpeg"
                  alt="cloth"
                  layout="fill"
                />
              </div>
              <div className="mt1">
                From <strong>N50, 000</strong>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3} className="pt4 pb4">
            <div className={styles.category_content}>
              <div className="relative">
                <Image
                  src="/images/clothing/shirt1.jpeg"
                  alt="cloth"
                  layout="fill"
                />
              </div>
              <div className="mt1">
                From <strong>N50, 000</strong>
              </div>
            </div>
          </Grid>{" "}
          <Grid item xs={12} md={6} lg={3} className="pt4 pb4">
            <div className={styles.category_content}>
              <div className="relative">
                <Image
                  src="/images/clothing/shirt1.jpeg"
                  alt="cloth"
                  layout="fill"
                />
              </div>
              <div className="mt1">
                From <strong>N50, 000</strong>
              </div>
            </div>
          </Grid>{" "}
          <Grid item xs={12} md={6} lg={3} className="pt4 pb4">
            <div className={styles.category_content}>
              <div className="relative">
                <Image
                  src="/images/clothing/shirt1.jpeg"
                  alt="cloth"
                  layout="fill"
                />
              </div>
              <div className="mt1">
                From <strong>N50, 000</strong>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Clothing;
