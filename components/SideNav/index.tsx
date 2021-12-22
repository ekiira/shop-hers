import Link from "next/link";

import { createStyles, makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Divider";
import Close from "@material-ui/icons/Close";

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
            <Divider />
            <div className="p2">
              <Link href="/shop">
                <MenuList>New In</MenuList>
              </Link>
            </div>
            <Divider />
            <div className="p2">
              <Link href="/shop/clothing">
                <MenuList>Clothing</MenuList>
              </Link>
            </div>
            <Divider />
            <div className="p2">
              <Link href="/shop/bags">
                <MenuList>Bags</MenuList>
              </Link>
            </div>
            <Divider />
            <div className="p2">
              <Link href="/shop/shoes">
                <MenuList>Shoes</MenuList>
              </Link>
            </div>
            <Divider />
            <div className="p2">
              <Link href="/shop/hats">
                <MenuList>Hats</MenuList>
              </Link>
            </div>
            <Divider />
            <div className="p2">
              <Link href="/shop/accessories">
                <MenuList>Accessories</MenuList>
              </Link>
            </div>
            <Divider />

            <div className="p2">
              <Link href="/blog">
                <MenuList>Blog</MenuList>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;
