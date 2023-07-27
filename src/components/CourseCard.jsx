import React from 'react'
import styles from './CourseCard.module.css'
import {motion} from "framer-motion";

const CourseCard = () => {
  return (
    <div className={styles.cardContainer}>

<div className={styles.teacherNameImage}>
<div className={styles.teacherName}><h4>Prof.Dr. Ahmet Yılmaz</h4></div>
<div className={styles.teacherImage}><img src ="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg" style={{height:"100%", width:"100%", borderRadius:"50%"}} /></div>
</div>

<div className={styles.courseImage}><img src ="https://web.harran.edu.tr/assets/uploads/sites/57/slides/ef38464dd6a24fa7bb675710d466fb31.jpg" style={{height:"100%", width:"100%", borderRadius:"10px"}} /></div>


  <div className={styles.departmentInfos}>
  <div className={styles.courseDepartment}>Makine Mühendisliği</div>
  <div className={styles.period}>Güz</div>
  </div>
  
  <div className={styles.courseInfo}>
  <div className={styles.courseTitle}>Statik & Mukavemet</div>
  <div className={styles.kontenjan}> <div className={styles.takenKont}>40</div>/<div className={styles.openKont}>40</div> </div>

</div>

<motion.div className={styles.addButton} whileHover={{scale:1.05}}>Derse kayıt Ol</motion.div>
        
      
    </div>
  )
}

export default CourseCard
