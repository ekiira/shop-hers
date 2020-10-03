import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';
import Close from '@material-ui/icons/Close';

import './SideNav.css'

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
    menuList: {
      paddingTop: '50px',
    },
    listItem: {
      color: '#000000', 
      '&:hover': {
      color: '#666666', 
      textDecoration: 'none',
      }
    },
    close: {
      paddingTop: '20px',
     textAlign: 'end',
     paddingRight: '10px'

    }
  }),
);

const SideBar = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  
const toggleDrawer = () => {
  setIsOpen(!isOpen)
}
  

  return (
    <div>
 
      <Drawer classes={{ paper: classes.drawer }} open={isOpen} >
        <div
          className={classes.fullList}
          role="presentation"
        >
         <div 
          className={classes.close}
         
         >
         <Close 
          onClick={toggleDrawer}/>
         </div>
          <div className={classes.menuList}>
          <div className='padding'>
        <Link to='/' className={classes.listItem}>
        <MenuList>
            New In
          </MenuList>
        </Link>
         </div>
          <Divider/>
         <div className='padding'>
<Link to='/clothing' className={classes.listItem}>

<MenuList>
          Clothing
          </MenuList>
</Link>
          </div>
          <Divider/>
         <div className='padding'>
<Link to='/bags' className={classes.listItem}>

<MenuList>
          Bags
          </MenuList>
</Link>
          </div>
          <Divider/>
          <div className='padding'>

        <Link to='/shoes' className={classes.listItem}>
        <MenuList>
          Shoes
          </MenuList>
        </Link>
          </div>
          <Divider/>
          <div className='padding'>
<Link to='/hats' className={classes.listItem}>
<MenuList>
          Hats
          </MenuList>
</Link>
         
          </div>
          <Divider/>
          <div className='padding'>
<Link to='/accessories' className={classes.listItem}>
<MenuList>
          Accessories
          </MenuList>
</Link>
        
          </div>
          </div>
         
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;

