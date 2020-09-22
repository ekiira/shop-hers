
// import React, { useState } from 'react';
// import { Drawer } from '@material-ui/core'
import './SideNav.css'
// const SideNav = () => {
//   const [navOpen, setNavOpen] = useState(false) 
// const click = () => {
//   setNavOpen(true)
// }
//   return (
//     <>
//     <button onClick={click}>mee</button>
// <Drawer 
//   anchor={'left'}
//   open={navOpen}
//   children={['a', 'b']}
//   />
// </>
//   )
// }

// export default SideNav


import React, { useState } from 'react';


import { createStyles, makeStyles, Theme, fade } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuList,
  InputBase,
  Badge

 } from '@material-ui/core';
import { Menu, Search,  AccountCircle, ShoppingCartOutlined} from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

const NavigationBar = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  
const toggleDrawer = () => {
  setIsOpen(!isOpen)
}
  

  return (
    <div>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
          >
            <Menu />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Shoppers

          </Typography>
       
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div>
<IconButton
edge="end"
aria-label="account of current user"
// aria-controls={menuId}
aria-haspopup="true"
// onClick={handleProfileMenuOpen}
color="inherit"
>
<AccountCircle />
</IconButton>
            
            <IconButton aria-label="show 17 items in cart" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >

            </IconButton>
          </div>
        
        </Toolbar>
      </AppBar>

      </div>
      <Drawer classes={{ paper: classes.drawer }} open={isOpen} >
        <div
          className={classes.fullList}
          role="presentation"
        >
          <CloseIcon onClick={toggleDrawer}/>
          <MenuList>
            New In
          </MenuList>
          <MenuList>
          Clothing
          </MenuList>
          <MenuList>
          Bags
          </MenuList>
          <MenuList>
          Shoes
          </MenuList>
          <MenuList>
          Hats
          </MenuList>
          <MenuList>
          Accessorie
          </MenuList>
        </div>
      </Drawer>
    </div>
  );
};

export default NavigationBar;

