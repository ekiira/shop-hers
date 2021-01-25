import React from "react";
import { Link } from "react-router-dom";

import { createStyles, makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Divider";
import Close from "@material-ui/icons/Close";

import "./SideNav.css";

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: 300,
    },
    fullList: {
      width: "auto",
    },
    menuList: {
      paddingTop: "50px",
    },
    listItem: {
      color: "#000000",
      "&:hover": {
        color: "#666666",
        textDecoration: "none",
      },
    },
    close: {
      paddingTop: "20px",
      textAlign: "end",
      paddingRight: "10px",
    },
  })
);

const SideBar = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Drawer classes={{ paper: classes.drawer }} open={isOpen}>
        <div className={classes.fullList} role="presentation">
          <div className={classes.close}>
            <Close onClick={toggleDrawer} />
          </div>
          <div className={classes.menuList}>
            <div className="padding">
              <Link
                to="/shop"
                onClick={() => setIsOpen(!isOpen)}
                className={classes.listItem}
              >
                <MenuList>Overview</MenuList>
              </Link>
            </div>
            <Divider />
            <div className="padding">
              <Link
                to="/shop/newin"
                onClick={() => setIsOpen(!isOpen)}
                className={classes.listItem}
              >
                <MenuList>New In</MenuList>
              </Link>
            </div>
            <Divider />
            <div className="padding">
              <Link
                to="/shop/clothing"
                onClick={() => setIsOpen(!isOpen)}
                className={classes.listItem}
              >
                <MenuList>Clothing</MenuList>
              </Link>
            </div>
            <Divider />
            <div className="padding">
              <Link
                to="/shop/bags"
                onClick={() => setIsOpen(!isOpen)}
                className={classes.listItem}
              >
                <MenuList>Bags</MenuList>
              </Link>
            </div>
            <Divider />
            <div className="padding">
              <Link
                to="/shop/shoes"
                onClick={() => setIsOpen(!isOpen)}
                className={classes.listItem}
              >
                <MenuList>Shoes</MenuList>
              </Link>
            </div>
            <Divider />
            <div className="padding">
              <Link
                to="/shop/hats"
                onClick={() => setIsOpen(!isOpen)}
                className={classes.listItem}
              >
                <MenuList>Hats</MenuList>
              </Link>
            </div>
            <Divider />
            <div className="padding">
              <Link
                to="/shop/accessories"
                onClick={() => setIsOpen(!isOpen)}
                className={classes.listItem}
              >
                <MenuList>Accessories</MenuList>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;
