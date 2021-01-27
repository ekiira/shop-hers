import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import herModel1 from "../../assets/her1.jpeg";
import herModel2 from "../../assets/her2.jpeg";
import herModel3 from "../../assets/her3.jpeg";
import { NAME } from "../../constants/variables";

import "./landing.scss";

const Landing = () => {
  return (
    <div className="landing">
      <Box display={{ xs: 'none', lg: 'block' }}>
      <Grid container >
        <Grid item xs={4}>
          <img src={herModel2} className="image" alt="model" />
        </Grid>
        <Grid item xs={4}>
          <img src={herModel1} className="image" alt="model" />
        </Grid>
        <Grid item xs={4}>
          <img src={herModel3} className="image" alt="model" />
        </Grid>
      </Grid>
      
      </Box>
        <Box display={{ xs: 'block', lg: 'none' }}>
      <Grid container >
        <Grid item xs={12}>
          <img src={herModel2} className="image" alt="model" />
        </Grid>
        {/* <Grid item xs={4}>
          <img src={herModel1} className="image" alt="model" />
        </Grid>
        <Grid item xs={4}>
          <img src={herModel3} className="image" alt="model" />
        </Grid> */}
      </Grid>
      
      </Box>
      <div className="shop">
        <Typography className="shopname" variant="h6">
          <Link to="/" className="shopname">
            {NAME}
          </Link>
        </Typography>
      </div>
      <div className="bto">
        <Link to="/shop">
          <Button>Shop</Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
