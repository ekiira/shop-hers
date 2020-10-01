import React, { useState } from 'react';
import { createStyles, makeStyles, fade } from '@material-ui/core/styles';
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
import { Menu, AccountCircle, ShoppingCartOutlined } from '@material-ui/icons';

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
      paddingTop: '10px',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      backgroundColor: '#ffffff'
    },
    toolbar: {
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
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
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      margin: 'auto',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        margin: 'auto',
        width: '50%',
      },
    },
    searchIcon: {
  

      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
  top: '25%'

    },
    inputRoot: {
      color: 'inherit',
      width: '100%',

    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      
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
     <div >
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
           <div>
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