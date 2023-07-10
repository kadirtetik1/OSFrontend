import React from 'react'
import SplashLeft from '../components/SplashLeft';
import SplashRight from '../components/SplashRight';
import styles from './SplashScreen.module.css'

const SplashScreen = () => {
  return (
    <div className={styles.background}>
        <SplashLeft/>
        <SplashRight/>
      
    </div>
  )
}

export default SplashScreen
