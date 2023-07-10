import React from 'react'
import styles from './Register.module.css'
import {FiX} from "react-icons/fi";

const Register = (props) => {
  return props.isClicked ? (
    <div className={styles.background} >

        <div className={styles.form}>

        <div className={styles.closeContainer}>
            <div className={styles.close}  onClick={() => props.closeRegister(false)}><FiX size={'2rem'}/></div>
        </div>

            <h1>Register</h1>
            <h2>Giriş Yap:</h2>
            <h2>Giriş Yap:</h2>
            <h2>Giriş Yap:</h2>
        </div>
      
    </div>
  )
  : ""
}

export default Register
