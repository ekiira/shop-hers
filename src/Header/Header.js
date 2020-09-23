import React, { useState } from 'react';
import { createStyles, makeStyles, Theme, fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
InputLabel,
  InputBase,
  Badge,
 TextField
 } from '@material-ui/core';
import { Menu, AccountCircle, ShoppingCartOutlined, More} from '@material-ui/icons';

import './Header.css'

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
      textAlign: 'center',
      paddingTop: '15px'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      backgroundColor: '#ffffff'
    },
    toolbar: {
      // minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    search: {
      position: 'relative',
      // justifyContent: 'center',
      // display: 'flex',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      margin: 'auto',
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        margin: 'auto',
        width: '50%',
      },
    },
    searchIcon: {
  

      padding: theme.spacing(0, 1),
      height: '100%',
      // width: '50%',
      // fontSize:'small',
      position: 'absolute',
      pointerEvents: 'none',
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

const Header = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
     <div className={classes.root}>
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
          <Typography className={classes.title} variant="h6" noWrap>
            Shoppers

          </Typography>
{/*        
          <div className={classes.sectionDesktop}>
           
          <select className='currency'>
          <option value='1'>
              1
            </option>
            <option value='1'>
              2
            </option>
            <option value='1'>
              3
            </option>
            <option value='1'>
              4
            </option>
            <option value='1'>
              5
            </option>
          </select>
            
            <IconButton
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
           
           */}
            {/* <IconButton
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <More />
            </IconButton>
          </div> */}
          {/* <div className={classes.grow} /> */}
          <div >

           <select className='currency'>
          <option value='1'>
              1
            </option>
            <option value='1'>
              2
            </option>
            <option value='1'>
              3
            </option>
            <option value='1'>
              4
            </option>
            <option value='1'>
              5
            </option>
          </select>
            
            <IconButton
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
           
          </div>
        
        </Toolbar>
        <Toolbar>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon fontSize='small' />
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
        
        </Toolbar>
      </AppBar>

      </div>

</>
  )
}

export default Header