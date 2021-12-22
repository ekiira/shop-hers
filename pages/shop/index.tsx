import Link from "next/link";
import Image from "next/image";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link as MUILink } from "@material-ui/core";

import Seo from "../../components/Seo";
import { NAME } from "../../utils/variables";

import styles from "../../styles/shop.module.scss";

const NewIn = () => {
  return (
    <>
      <Seo
        title={NAME}
        description="Shop all kinds of women wear"
        imagePath="/images/logo.png"
        favicon="/favicon.ico"
      />
      <div className="pt5 pb5">
        <Container fixed className="pb5">
          <h3 className="fweight-bold pb0">Shop By Category</h3>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3} className="pt4">
              <div className={styles.category_content}>
                <Link href="/shop/shoes">
                  <div className={styles.image_overlay}></div>
                </Link>
                <div className="relative">
                  <Image
                    src="/images/shoes/airforce.jpeg"
                    alt="shoe"
                    layout="fill"
                  />
                </div>
                <div
                  className={`${styles.category_details} ${styles.fadeIn_top}`}
                >
                  <p>Shop Shoes</p>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={3} className="pt4">
              <div className={styles.category_content}>
                <Link href="/shop/clothing">
                  <div className={styles.image_overlay}></div>
                </Link>
                <div className="relative">
                  <Image
                    src="/images/clothing/shirt1.jpeg"
                    alt="cloth"
                    layout="fill"
                  />
                </div>
                <div
                  className={`${styles.category_details} ${styles.fadeIn_top}`}
                >
                  <p>Shop Clothing</p>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={3} className="pt4">
              <div className={styles.category_content}>
                <Link href="/shop/bags">
                  <div className={styles.image_overlay}></div>
                </Link>
                <div className="relative">
                  <Image src="/images/bags/bag1.jpeg" alt="bag" layout="fill" />
                </div>

                <div
                  className={`${styles.category_details} ${styles.fadeIn_top}`}
                >
                  <p>Shop Bags</p>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={3} className="pt4">
              <div className={styles.category_content}>
                <Link href="/shop/hats">
                  <div className={styles.image_overlay}></div>
                </Link>
                <div className="relative">
                  <Image src="/images/hats/hat3.jpeg" alt="hat" layout="fill" />
                </div>
                <div
                  className={`${styles.category_details} ${styles.fadeIn_top}`}
                >
                  <p>Shop Hats</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container fixed className="pb5">
          <h3 className="fweight-bold pb0">New Arrivals</h3>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} className="pt4">
              <div className={`relative ${styles.new_image}`}>
                <Image
                  src="/images/shoes/heel4.jpeg"
                  alt="shoe"
                  layout="fill"
                />
              </div>
            </Grid>

            <Grid item xs={12} md={4} className="pt4">
              <div className={`relative ${styles.new_image}`}>
                <Image
                  src="/images/clothing/cl3.jpeg"
                  alt="cloth"
                  layout="fill"
                />
              </div>
            </Grid>

            <Grid item xs={12} md={4} className="pt4">
              <div className={`relative ${styles.new_image}`}>
                <Image
                  src="/images/clothing/cl4.jpeg"
                  alt="cloth"
                  layout="fill"
                />
              </div>
            </Grid>
          </Grid>
        </Container>

        <div className="pt5 pb5">
          <div className={styles.sales}>
            <div className={`${styles.overlay} pt5 pb5`}>
              <Container fixed>
                <div className={`${styles.sales_s}`}>
                  <p className={`${styles.sales_head} center p3 mb0`}>
                    SALES SALES SALES
                  </p>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={2} className="pt4 pb4">
                      <Card>
                        <div className={`relative ${styles.sales_image}`}>
                          <Image
                            src="/images/sales/sdress.jpeg"
                            alt="dress"
                            layout="fill"
                          />
                        </div>

                        <CardHeader
                          title="Dresses"
                          className={`mb0 p3 center ${styles.sales_title}`}
                        />
                      </Card>
                    </Grid>

                    <Grid item xs={6} md={2} className="pt4 pb4">
                      <Card>
                        <div className={`relative ${styles.sales_image}`}>
                          <Image
                            src="/images/sales/sshoe.jpeg"
                            alt="shoe"
                            layout="fill"
                          />
                        </div>

                        <CardHeader
                          title="Shoes"
                          className={`mb0 p3 center ${styles.sales_title}`}
                        />
                      </Card>
                    </Grid>
                    <Grid item xs={6} md={2} className="pt4 pb4">
                      <Card>
                        <div className={`relative ${styles.sales_image}`}>
                          <Image
                            src="/images/sales/scoat.jpeg"
                            alt="coat"
                            layout="fill"
                          />
                        </div>

                        <CardHeader
                          title="Coats"
                          className={`mb0 p3 center ${styles.sales_title}`}
                        />
                      </Card>
                    </Grid>

                    <Grid item xs={6} md={2} className="pt4 pb4">
                      <Card>
                        <div className={`relative ${styles.sales_image}`}>
                          <Image
                            src="/images/sales/strouser.jpeg"
                            layout="fill"
                            alt="Trouser"
                          />
                        </div>

                        <CardHeader
                          title="Trousers"
                          className={`mb0 p3 center ${styles.sales_title}`}
                        />
                      </Card>
                    </Grid>

                    <Grid item xs={6} md={2} className="pt4 pb4">
                      <Card>
                        <div className={`relative ${styles.sales_image}`}>
                          <Image
                            src="/images/sales/sbag.jpeg"
                            layout="fill"
                            alt="Bag"
                          />
                        </div>

                        <CardHeader
                          title="Bags"
                          className={`mb0 p3 center ${styles.sales_title}`}
                        />
                      </Card>
                    </Grid>

                    <Grid item xs={6} md={2} className="pt4 pb4">
                      <Card>
                        <div className={`relative ${styles.sales_image}`}>
                          <Image
                            src="/images/sales/shat.jpeg"
                            layout="fill"
                            alt="Hat"
                          />
                        </div>

                        <CardHeader
                          title="Hats"
                          className={`mb0 p3 center ${styles.sales_title}`}
                        />
                      </Card>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </div>
        </div>

        <div className="pt5 pb5">
          <div className={styles.sport}>
            <Container maxWidth="sm" className="pt5 pb5 auto-flex">
              <div>
                <div className={`${styles.sport_head} p4 center`}>
                  <Typography className={`${styles.sport_title} mb0`} noWrap>
                    FEELING SPORTY ?
                  </Typography>
                  <br />
                  <p className={`${styles.sport_subtitle} mb0`}>
                    Introducing our varieties of sport gears
                  </p>
                  <div className="pt3">
                    <Button variant="outlined">Check it out</Button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>

        <div className={`${styles.gift_pack} pt5`}>
          <Container fixed>
            <h3 className="fweight-bold">Check out our Gift Packs</h3>
            <Grid container spacing={2} className="pt3">
              <Grid item xs={6} lg={3} className="pt4">
                <div className={`relative ${styles.gift_image}`}>
                  <Image
                    src="/images/gifts/gift1.jpeg"
                    alt="gift-item"
                    layout="fill"
                  />
                </div>
              </Grid>
              <Grid item xs={6} lg={3} className="pt4">
                <div className={`relative ${styles.gift_image}`}>
                  <Image
                    src="/images/gifts/gift2.jpeg"
                    alt="gift-item"
                    layout="fill"
                  />
                </div>
              </Grid>
              <Grid item xs={6} lg={3} className="pt4">
                <div className={`relative ${styles.gift_image}`}>
                  <Image
                    src="/images/gifts/gift3.jpeg"
                    alt="gift-item"
                    layout="fill"
                  />
                </div>
              </Grid>
              <Grid item xs={6} lg={3} className="pt4">
                <div className={`relative ${styles.gift_image}`}>
                  <Image
                    src="/images/gifts/gift4.jpeg"
                    alt="gift-item"
                    layout="fill"
                  />
                </div>
              </Grid>
            </Grid>
            <div className="pt3 center">
              <Link href="/">
                <MUILink variant="body1" className={styles.gift_link}>
                  View More
                </MUILink>
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default NewIn;
