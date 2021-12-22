import Link from "next/link";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import { Link as MUILink } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";

import { NAME } from "../../utils/variables";

const useStyles = makeStyles({
  links: {
    listStyle: "none",
    color: "#666666",
    "&:hover": {
      color: "#000000",
    },
  },
  top: {
    backgroundColor: "#eeeeee",
  },
  bottom: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  list: {
    listStyle: "none",
    display: "flex",
  },
  title: {
    fontWeight: "bold",
  },
  bottom_1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inspire: {
    fontSize: "16px",
  },
  inspireLink: {
    color: "white",
    fontWeight: 500,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={`${classes.top} pt5 pb5`}>
        <Container fixed className={classes.links}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <p className={classes.title}>Help and Information</p>
              <li>
                <Link href="/" passHref>
                  <MUILink variant="body1" className={classes.links}>
                    Help
                  </MUILink>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <MUILink variant="body1" className={classes.links}>
                    Track Order
                  </MUILink>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <MUILink variant="body1" className={classes.links}>
                    Delivery Returns
                  </MUILink>
                </Link>
              </li>
            </Grid>
            <Grid item xs={6} md={3}>
              <p className={classes.title}>About Shoppers</p>
              <li>
                <Link href="/" passHref>
                  <MUILink variant="body1" className={classes.links}>
                    About Us
                  </MUILink>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <MUILink variant="body1" className={classes.links}>
                    {`Careers at ${NAME}`}
                  </MUILink>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <MUILink variant="body1" className={classes.links}>
                    Corporate Responsibility
                  </MUILink>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <MUILink variant="body1" className={classes.links}>
                    Investors Site
                  </MUILink>
                </Link>
              </li>
            </Grid>
            <Grid item xs={6} md={3}>
              <li>
                <p className={classes.title}>More from Shoppers</p>

                <Link href="/" passHref>
                  <MUILink variant="body1" className={classes.links}>
                    {`Mobile ans ${NAME} Apps`}
                  </MUILink>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <MUILink variant="body1" className={classes.links}>
                    {`${NAME} Marketplace`}
                  </MUILink>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <MUILink variant="body1" className={classes.links}>
                    Gift vouchers
                  </MUILink>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <MUILink variant="body1" className={classes.links}>
                    Fashion Discovery
                  </MUILink>
                </Link>
              </li>
            </Grid>
            <Grid item xs={6} md={3}>
              <p className={classes.title}>Socials</p>

              <li>
                <Link href="/" passHref>
                  <TwitterIcon className="mr3" />
                </Link>
                <Link href="/" passHref>
                  <InstagramIcon className="mr3" />
                </Link>
                <Link href="/" passHref>
                  <FacebookIcon className="mr3" />
                </Link>
                <Link href="/" passHref>
                  <PinterestIcon />
                </Link>
              </li>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div className={`${classes.bottom} pt3 pb3`}>
        <Container className={classes.bottom_1}>
          <p className="mb0">&copy; {NAME}</p>
          <ul className={`${classes.list}`}>
            <li className="mr2">Privacy</li>
            <li className="mr2">|</li>
            <li>Ts&Cs</li>
          </ul>
        </Container>
        <div className="text-center">
          <p className={classes.inspire}>
            Inspired by{" "}
            <a href="/asos.com" target="_blank" className={classes.inspireLink}>
              {" "}
              asos
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
