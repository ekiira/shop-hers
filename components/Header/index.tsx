import Link from "next/link";

import { createStyles, makeStyles, fade } from "@material-ui/core/styles";
import { Link as MUILink } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";

import { Menu, AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";

import { NAME } from "../../utils/variables";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
      display: "none",
      [theme.breakpoints.up("xs")]: {
        display: "flex",
      },
    },
    title: {
      color: "#ffffff",
      fontSize: "26px",
      "&:hover": {
        textDecoration: "none",
        color: "#ffffff",
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      backgroundColor: "#ffffff",
    },
    toolbar: {
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        justifyContent: "space-between",
      },
    },
    toolbarMobile: {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    searchDesktop: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      margin: "auto",
      width: "100%",
      height: "100%",
      display: "none",

      [theme.breakpoints.up("sm")]: {
        margin: "auto",
        width: "50%",
        display: "flex",
      },
    },

    searchMobile: {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        margin: "auto",
        height: "100%",
        width: "100%",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      top: "20%",
    },
    inputRoot: {
      color: "inherit",
      width: "100%",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
    nav: {
      width: "auto",
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
    navLists: {
      display: "inline-flex",
      width: "100%",
      margin: "auto",
      padding: 0,
    },
    navList: {
      color: "#ffffff",
      listStyle: "none",
      padding: "10px",
      textAlign: "center",
      fontSize: "16px",
      whiteSpace: "nowrap",
      "&:first-child": {
        paddingLeft: 0,
      },
    },
    nav_link: {
      color: "#ffffff",
      transition: "0.2s all ease-in",

      "&:hover": {
        color: "#ffffff",
        textDecoration: "underline",
      },
    },
    end: {
      justifyContent: "flex-end",
    },
  })
);

const Header = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div title="header">
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
            >
              <Menu />
            </IconButton>
            <Link href="/" passHref>
              <MUILink variant="body2" className={classes.title}>
                {NAME}
              </MUILink>
            </Link>
            <div className={classes.searchDesktop}>
              <div className={classes.searchIcon}>
                <SearchIcon fontSize="small" />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>

            <div>
              <Link href="/auth" passHref>
                <IconButton
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Link>

              <IconButton aria-label="show 17 items in cart" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
          <Toolbar className={classes.toolbarMobile}>
            <div className={classes.searchMobile}>
              <div className={classes.searchIcon}>
                <SearchIcon fontSize="small" />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
          <Toolbar className={classes.nav}>
            <ul className={classes.navLists}>
              <li className={classes.navList}>
                <Link href="/shop" passHref>
                  <MUILink variant="body1" className={classes.nav_link}>
                    New In
                  </MUILink>
                </Link>
              </li>
              <li className={classes.navList}>
                <Link href="/shop/clothing" passHref>
                  <MUILink variant="body1" className={classes.nav_link}>
                    Clothing
                  </MUILink>
                </Link>
              </li>
              <li className={classes.navList}>
                <Link href="/shop/shoes" passHref>
                  <MUILink variant="body1" className={classes.nav_link}>
                    Shoes
                  </MUILink>
                </Link>
              </li>
              <li className={classes.navList}>
                <Link href="/shop/bags" passHref>
                  <MUILink variant="body1" className={classes.nav_link}>
                    Bags
                  </MUILink>
                </Link>
              </li>
              <li className={classes.navList}>
                <Link href="/shop/hats" passHref>
                  <MUILink variant="body1" className={classes.nav_link}>
                    Hats
                  </MUILink>
                </Link>
              </li>
              <li className={classes.navList}>
                <Link href="/shop/accessories" passHref>
                  <MUILink variant="body1" className={classes.nav_link}>
                    Accessories
                  </MUILink>
                </Link>
              </li>
            </ul>

            <ul className={`${classes.navLists} ${classes.end}`}>
              <li className={classes.navList}>
                <Link href="#" passHref>
                  <MUILink variant="body1" className={classes.nav_link}>
                    Blog
                  </MUILink>
                </Link>
              </li>
              <li className={classes.navList}>
                <Link href="#" passHref>
                  <MUILink variant="body1" className={classes.nav_link}>
                    Flag
                  </MUILink>
                </Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
