import React, { useState } from 'react';

import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';

import styles from './auth.module.scss';



const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


 
    const onChangeHandler = (e, handler) => {
        handler(e.target.value)
    };

    const signupData = {
        name,
        email,
        password
    }

    const clearState = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(signupData)
        clearState();
    }

    return (
        
        <form className={styles.formBody_form} onSubmit={onFormSubmit}>
            <div className={styles.formBody_fieldWrap}>
                <InputLabel className={styles.inputLabel}>Full Name <span className={styles.asterik}>*</span></InputLabel>
                <InputBase 
                    type='text'
                    required
                    fullWidth
                    value={name}
                    onChange={(event) => onChangeHandler(event, setName)}
                    className={styles.inputContainer}
                />
            </div>
        
            <div className={styles.formBody_fieldWrap}>
                <InputLabel className={styles.inputLabel}>Email Address <span className={styles.asterik}>*</span></InputLabel>
                <InputBase 
                    type='email'
                    required
                    fullWidth
                    value={email}
                    onChange={(event) => onChangeHandler(event, setEmail)}
                    className={styles.inputContainer}
                />
            </div>

            <div className={styles.formBody_fieldWrap}>
                <InputLabel className={styles.inputLabel}>Password <span className={styles.asterik}>*</span></InputLabel>
                <InputBase 
                    type='password'
                    required
                    fullWidth
                    value={password}
                    onChange={(event) => onChangeHandler(event, setPassword)}
                    className={styles.inputContainer}
                />
            </div>

            <div className={styles.formBody_fieldWrap}>
                <InputLabel className={styles.inputLabel}>Confirm Password <span className={styles.asterik}>*</span></InputLabel>
                <InputBase 
                    type='password'
                    required
                    fullWidth
                    value={confirmPassword}
                    onChange={(event) => onChangeHandler(event, setConfirmPassword)}
                    className={styles.inputContainer}
                />
            </div>

            <div className={styles.formBody_inputButtonWrapper}>
                    <Button  type='submit' onClick={onFormSubmit} className={styles.formBody_inputButton}>Sign Up</Button>
            </div> 
        
        </form>

                    

   
    )
}

export default SignUp;