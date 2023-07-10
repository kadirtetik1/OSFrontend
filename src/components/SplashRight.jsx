import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';
import styles from './SplashRight.module.css'

const SplashRight = () => {

  const [register, setRegister] = useState(false); 
  const [login, setLogin] = useState(false); 

  function toggleRegister (){
     setRegister(!register);

     console.log(register);
  }

  function toggleLogin (){
    setLogin(!login);
    console.log(login);
 }
 

  return (
    <div className={styles.background}>

        <img className={styles.bgImage} src={require('../assets/splash.jpg')} alt="" />
        
        <div className={styles.buttons}>

        <div className={styles.girisButton} onClick={toggleRegister}>Üye Ol</div>
        <div className={styles.uyeButton} onClick={toggleLogin}>Giriş Yap</div>

        </div>

        <Register isClicked={register} closeRegister={setRegister} />
        <Login isClicked={login} closeLogin={setLogin} />
       
        
      
    </div>
  )
}

export default SplashRight
