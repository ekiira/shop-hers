import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';
import Login from './Login';
import styles from './auth.module.scss';
import SignUp from './SignUp';

import 'semantic-ui-css/semantic.min.css'

import './styles.scss'
import { Typography } from '@material-ui/core';

const panes = [
    { menuItem: "Don't have an account?", render: () => <Tab.Pane> <SignUp/> </Tab.Pane> },
    { menuItem: "Already have an account? ", render: () => <Tab.Pane> <Login/> </Tab.Pane> },
  ]


const Auth = () => {

    return (
        <div className='py-5'>

           <Link to='/' className={styles.logoLink}>
           <Typography className={styles.logo}>
                Shoppers
            </Typography>
           </Link>
            <div className={`${styles.formBody} py-4 px-3`}>
                <Tab 
                    panes={panes}  
                    defaultActiveIndex={1} 
                    />
            </div>
        </div> 
    )
}

export default Auth;
