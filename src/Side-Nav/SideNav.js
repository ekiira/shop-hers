
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
import { Drawer, MenuList } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
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
          <Close onClick={toggleDrawer}/>
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

export default SideBar;

