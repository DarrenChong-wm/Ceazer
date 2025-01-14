import React, { useState, } from 'react'
import styles from './Login.module.css'
const Login: React.FC = () => {

    return <>
        <h2>Log In</h2>
        <div>
            <form className={styles.formContainer}>
                <input className={styles.email} placeholder="Email" type="email" />
                <input className={styles.password} placeholder="Password" type="password" />
                <button className={styles.button} type="submit"> Log In </button>

            </form>
        </div>

    </>


}

export default Login