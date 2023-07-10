import React from 'react'
import styles from './Login.module.css'
import {FiX} from "react-icons/fi";

const Login = (props) => {
    return props.isClicked ? (
        <div className={styles.background} >
    
            <div className={styles.form}>

            <div className={styles.closeContainer}>
            <div className={styles.close}  onClick={() => props.closeLogin(false)}><FiX size={'2rem'}/></div>
            </div>

                <h1>Login</h1>
                <h2>Giriş Yap:</h2>
                <h2>Giriş Yap:</h2>
                <h2>Giriş Yap:</h2>
            </div>
          
        </div>
      )
      : ""
}

export default Login
