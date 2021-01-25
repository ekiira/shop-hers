import React from "react";
import { createStyles, makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
} from "@material-ui/core";
import { Menu, AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";

import "./Header.css";
import { Link } from "react-router-dom";

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
      [theme.breakpoints.down("xs")]: {
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
  })
);

const Header = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
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
            <Typography className={classes.title} variant="h6">
              <Link to="/" className={classes.title}>
                SHOPPERS
              </Link>
            </Typography>
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
              <Link to="/login">
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
        </AppBar>
      </div>
    </>
  );
};

export default Header;
