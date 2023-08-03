import React from 'react'
import styles from './SplashLeft.module.css'

import {BiTimer} from 'react-icons/bi';
import {IoPeopleSharp} from 'react-icons/io5';



const SplashLeft = () => {
  return (
    <div className={styles.background}>


        <div className={styles.titles}>

        <h1>Learner'a Hoşgeldiniz!</h1>
        <div className={styles.titleLine}>
            <div className={styles.titleLine2}></div>
        </div>

        <h2>Eksik Olduğunuz Konuyu Belirleyin Ve Hemen Öğrenmeye Başlayın!</h2>

        </div>

        <div className={styles.features}>

        <div className={styles.feature1}>
            
            <h3 className={styles.featuresTitle}><BiTimer style={{color:"#0076fa", size:"5em"}}/> Esnek Ders Saatleri</h3>
            <p className={styles.featuresText}>Alanında uzman yüzlerce öğretmenimiz arasından çalışma saatleri size en uygun olanını seçebilirsiniz.</p>
        </div>

        <div className={styles.feature2}>
          
            <h3 className={styles.featuresTitle}><IoPeopleSharp style={{color:"#feb206"}}/> Özel ve Sınıf Ders Seçenekleri</h3>
            <p className={styles.featuresText}>Grup derslerimize katılarak tasarruf sağlayabilir veya özel ders seçekleriyle öğrenme hızınızı arttırabilirsiniz. </p>
        </div>

        <div className={styles.feature1}>
          
            <h3 className={styles.featuresTitle}><IoPeopleSharp style={{color:"#01b671"}}/> Özel ve Sınıf Ders Seçenekleri</h3>
            <p className={styles.featuresText}>Grup derslerimize katılarak tasarruf sağlayabilir veya özel ders seçekleriyle öğrenme hızınızı arttırabilirsiniz. </p>
        </div>

        </div>

      
    </div>
  )
}

export default SplashLeft
