import React, { useState } from 'react';
// import { Link } from 'react-router-dom'

import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './auth.module.scss';

const Login =  () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeHandler = (e, handler) => {
        handler(e.target.value)
    }

    const loginData = {
        email,
        password
    }

    const clearState = () => {
        setEmail('');
        setPassword('');
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(loginData)
        clearState();
    }

    return (
        <form className={styles.formBody_form} onSubmit={onFormSubmit}>
        <div className={styles.formBody_fieldWrap}>
            <InputLabel className={styles.inputLabel}>Email Address <span className={styles.asterik}>*</span></InputLabel>
            <InputBase 
                type='email'
                required
                value={email}
                onChange={(event) => onChangeHandler(event, setEmail )}
                fullWidth
                className={styles.inputContainer}
            />
        </div>
        <div className={styles.formBody_fieldWrap}>
            <InputLabel className={styles.inputLabel}>Password <span className={styles.asterik}>*</span></InputLabel>
            <InputBase 
                type='password'
                required
                value={password}
                onChange={(event) => onChangeHandler(event, setPassword )}
                fullWidth
                className={styles.inputContainer}
            />
        </div>

        {/* <div className={styles.formBody_inputButtonWrapperIn}> */}
            {/* <Link to='#'>
                <Button  type='submit' >Forgot Password</Button>
            </Link> */}

            <div className={styles.formBody_inputButtonWrapper}>
                <Button  type='submit' onClick={onFormSubmit} className={styles.formBody_inputButton}>Log In</Button>
            </div>             
        {/* </div> */}
    
    
    </form>


    )
}

export default Login;