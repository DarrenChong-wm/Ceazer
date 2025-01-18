import React, { useState, } from 'react'
import styles from './Login.module.css'
const Login: React.FC = () => {

    return <>
        {/* <h2>Log In</h2> */}
        <div className={styles.wrapper}>
            <form className={styles.formContainer}>
                <div className={styles.inputContainer}>
                    <input className={styles.email} placeholder="" type="email" />
                    <label className={styles.floatingLabel}>Email</label>
                </div>
                <div className={styles.inputContainer}>
                    <input className={styles.password} placeholder="" type="password" />
                    <label className={styles.floatingLabel}>Password</label>
                </div>
                <button className={styles.button} type="submit"> LOG IN </button>

            </form>
        </div>

    </>


}

export default Login