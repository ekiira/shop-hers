import React from "react";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// images
import sh1 from "../../assets/shoes/airforce.jpeg";
import sh2 from "../../assets/shoes/heel4.jpeg";

import cl1 from "../../assets/clothing/shirt1.jpeg";
import cl2 from "../../assets/clothing/cl4.jpeg";
import cl3 from "../../assets/clothing/cl3.jpeg";

import Hat1 from "../../assets/hats/hat3.jpeg";

import Bg1 from "../../assets/bags/bag1.jpeg";

import gft1 from "../../assets/gifts/gift1.jpeg";
import gft2 from "../../assets/gifts/gift2.jpeg";
import gft3 from "../../assets/gifts/gift3.jpeg";
import gft4 from "../../assets/gifts/gift4.jpeg";

import sdress from "../../assets/sales/sdress.jpeg";
import sshoe from "../../assets/sales/sshoe.jpeg";
import scoat from "../../assets/sales/scoat.jpeg";
import strouser from "../../assets/sales/strouser.jpeg";
import sbag from "../../assets/sales/sbag.jpeg";
import shat from "../../assets/sales/shat.jpeg";

// style
import "./newIn.scss";
import "../../base-styles/styles.scss";

const NewIn = () => {
  return (
    <div className="pt5 pb5">
      <Container fixed className="pb5">
        <h3 className="fweight-bold pb0">Shop By Category</h3>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3} className="pt4">
            <div className="category-content">
              <Link to="/shop/shoes">
                <div className="image-overlay"></div>
              </Link>
              <img src={sh1} className="img-resp" alt="shoe" />
              <div className="category-details fadeIn-top">
                <p>Shop Shoes</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={3} className="pt4">
            <div className="category-content">
              <Link to="/shop/clothing">
                <div className="image-overlay"></div>
              </Link>
              <img src={cl1} className="img-resp" alt="cloth" />
              <div className="category-details fadeIn-top">
                <p>Shop Clothing</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={3} className="pt4">
            <div className="category-content">
              <Link to="/shop/bags">
                <div className="image-overlay"></div>
              </Link>
              <img src={Bg1} className="img-resp" alt="bag" />
              <div className="category-details fadeIn-top">
                <p>Shop Bags</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={3} className="pt4">
            <div className="category-content">
              <Link to="/shop/hats">
                <div className="image-overlay"></div>
              </Link>
              <img src={Hat1} className="img-resp" alt="hat" />
              <div className="category-details fadeIn-top">
                <p>Shop Hats</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container fixed className="pb5">
        <h3 className="fweight-bold pb0">New Arrivals</h3>
        <Grid container spacing={2}>
          <Grid item xs={4} className="pt4">
            <img src={sh2} className="img-resp" alt="shoe" />
          </Grid>

          <Grid item xs={4} className="pt4">
            <img src={cl3} className="img-resp" alt="cloth" />
          </Grid>

          <Grid item xs={4} className="pt4">
            <img src={cl2} className="img-resp" alt="cloth" />
          </Grid>
        </Grid>
      </Container>

      <div className="pt5 pb5">
        <div className="sales">
          <div className="overlay pt5 pb5">
            <Container fixed>
              <div className="sales-s">
                <p className="sales-head center p3 mb0">SALES SALES SALES</p>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={2} className="pt4 pb4">
                    <Card>
                      <img className="img-resp" src={sdress} alt="dress" />

                      <CardHeader
                        title="Dresses"
                        className="mb0 p3 center sales-title"
                      />
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={2} className="pt4 pb4">
                    <Card>
                      <img className="img-resp" src={sshoe} alt="shoe" />

                      <CardHeader
                        title="Shoes"
                        className="mb0 p3 center sales-title"
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={6} md={2} className="pt4 pb4">
                    <Card>
                      <img className="img-resp" src={scoat} alt="coat" />

                      <CardHeader
                        title="Coats"
                        className="mb0 p3 center sales-title"
                      />
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={2} className="pt4 pb4">
                    <Card>
                      <img className="img-resp" src={strouser} alt="Trouser" />

                      <CardHeader
                        title="Trousers"
                        className="mb0 p3 center sales-title"
                      />
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={2} className="pt4 pb4">
                    <Card>
                      <img className="img-resp" src={sbag} alt="Bag" />

                      <CardHeader
                        title="Bags"
                        className="mb0 p3 center sales-title"
                      />
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={2} className="pt4 pb4">
                    <Card>
                      <img className="img-resp" src={shat} alt="Hat" />

                      <CardHeader
                        title="Hats"
                        className="mb0 p3 center sales-title"
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
        <div className="sport">
          <Container maxWidth='sm' className="pt5 pb5 auto-flex">
            <div>
              <div className="sport-head p4 center">
                <Typography className="sport-title mb0 " noWrap>FEELING SPORTY ?</Typography>
                <br />
                <p className="sport-subtitle mb0">
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

      <div className="gift-pack pt5">
        <Container fixed>
          <h3 className="fweight-bold">Check out our Gift Packs</h3>
          <Grid container spacing={2} className="pt3">
            <Grid item xs={6} lg={3} className="pt4">
              <img src={gft1} className="img-resp" alt="gift item" />
            </Grid>
            <Grid item xs={6} lg={3} className="pt4">
              <img src={gft2} className="img-resp" alt="gift item" />
            </Grid>
            <Grid item xs={6} lg={3} className="pt4">
              <img src={gft3} className="img-resp" alt="gift item" />
            </Grid>
            <Grid item xs={6} lg={3} className="pt4">
              <img src={gft4} className="img-resp" alt="gift item" />
            </Grid>
          </Grid>
          <div className="pt3 center">
            <Link to="#" className="gift-link">
              View More
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NewIn;
