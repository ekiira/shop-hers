import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { createStyles, makeStyles, Theme, fade } from '@material-ui/core/styles';

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
    close: {
      paddingTop: '20px',
     textAlign: 'end',
     paddingRight: '10px'

    }
  }),
);

const SideBar = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(true);

  
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
        <Link to='/'>
        <MenuList>
            New In
          </MenuList>
        </Link>
         </div>
          <Divider/>
         <div className='padding'>
<Link to='/clothing'>

<MenuList>
          Clothing
          </MenuList>
</Link>
          </div>
          <Divider/>
         <div className='padding'>
<Link to='/bags'>

<MenuList>
          Bags
          </MenuList>
</Link>
          </div>
          <Divider/>
          <div className='padding'>

        <Link to='/shoes'>
        <MenuList>
          Shoes
          </MenuList>
        </Link>
          </div>
          <Divider/>
          <div className='padding'>
<Link to='/hats'>
<MenuList>
          Hats
          </MenuList>
</Link>
         
          </div>
          <Divider/>
          <div className='padding'>
<Link to='/accessories'>
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

