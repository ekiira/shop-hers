import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import styles from './Admin.module.scss';

const AddProducts = () => {

    return (
        <div className={styles.addProduct_wrapper}>
            <div className='container-fluid py-5'>
                <form>
                <Grid container spacing={6}>
                    <Grid item xs={12} lg={4}>
                        <InputLabel> Name  </InputLabel>
                        <InputBase
                            required
                            fullWidth
                            className={styles.inputContainer}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <InputLabel> Price  </InputLabel>
                        <InputBase
                            required
                            fullWidth
                            className={styles.inputContainer}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <InputLabel> Category  </InputLabel>
                        <InputBase
                            required
                            fullWidth
                            className={styles.inputContainer}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={6} className='pt-4'>
                    <Grid item xs={12} lg={4}>
                        <InputLabel> Sizes Available  </InputLabel>
                        <InputBase
                            required
                            fullWidth
                            className={styles.inputContainer}
                        />
                    </Grid>
                    
                    <Grid item xs={12} lg={4}>
                        <InputLabel> Color </InputLabel>
                        <InputBase
                            required
                            fullWidth
                            className={styles.inputContainer}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <InputLabel> Photos  </InputLabel>
                        <InputBase
                            required
                            fullWidth
                            type='file'
                            className={styles.inputContainer}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <InputLabel> Price details  </InputLabel>
                        <TextareaAutosize 
                            aria-label="minimum height" 
                            rowsMin={3} 
                            fullWidth
                            className={`${styles.inputContainer} ${styles.inputTextArea}`}

                        />
                    </Grid>

                </Grid>
                <div className={`${styles.inputButtonWrapper} pt-4`}>
                    <Button className={styles.inputButton}>
                        Save
                    </Button>
                </div>
                </form>

            </div>
        </div>
    )
}

export default AddProducts