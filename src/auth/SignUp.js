import React from 'react';

import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import styles from './auth.module.scss';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby= 'simple-tab'
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }


const SignUp = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className='py-5'>
            <div className={`${styles.formBody} `}>
                <div className="form">
                    <AppBar position="static">
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered >
                            <Tab label="Don't have an account" />
                            <Tab label="Already have an account"  />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <form className={styles.formBody_form}>
                            <div className={styles.formBody_fieldWrap}>
                                <InputLabel className={styles.inputLabel}>Full Name <span className={styles.asterik}>*</span></InputLabel>
                                <InputBase 
                                    type='text'
                                    required
                                    fullWidth
                                    className={styles.inputContainer}
                                />
                            </div>
                        
                            <div className={styles.formBody_fieldWrap}>
                                <InputLabel className={styles.inputLabel}>Email Address <span className={styles.asterik}>*</span></InputLabel>
                                <InputBase 
                                    type='email'
                                    required
                                    fullWidth
                                    className={styles.inputContainer}
                                />
                            </div>

                            <div className={styles.formBody_fieldWrap}>
                                <InputLabel className={styles.inputLabel}>Password <span className={styles.asterik}>*</span></InputLabel>
                                <InputBase 
                                    type='password'
                                    required
                                    fullWidth
                                    className={styles.inputContainer}
                                />
                            </div>

                            <div className={styles.formBody_inputButtonWrapper}>
                                    <Button  type='submit' >Sign Up</Button>
                            </div> 
                        
                        </form>
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <form className={styles.formBody_form}>
                            <div className={styles.formBody_fieldWrap}>
                                <InputLabel className={styles.inputLabel}>Email Address <span className={styles.asterik}>*</span></InputLabel>
                                <InputBase 
                                    type='email'
                                    required
                                    fullWidth
                                    className={styles.inputContainer}
                                />
                            </div>
                            <div className={styles.formBody_fieldWrap}>
                                <InputLabel className={styles.inputLabel}>Password <span className={styles.asterik}>*</span></InputLabel>
                                <InputBase 
                                    type='password'
                                    required
                                    fullWidth
                                    className={styles.inputContainer}
                                />
                            </div>

                            <div className={styles.formBody_inputButtonWrapperIn}>
                                <Link to='#'>
                                    <Button  type='submit' >Forgot Password</Button>
                                </Link>

                                <div >
                                    <Button  type='submit' >Log In</Button>
                                </div>             
                            </div>
                        
                        
                        </form>

                    
                    </TabPanel>
                    

</div> 
        </div>
        </div>
    )
}

export default SignUp;