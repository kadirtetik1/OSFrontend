import React from 'react'
import styles from './CourseCard.module.css'
import {motion} from "framer-motion";

const CourseCard = (props) => {
  return (
    <div className={styles.cardContainer}>

<div className={styles.teacherNameImage}>
<div className={styles.teacherName}><h4> {props.unvan} {props.name} </h4></div>
<div className={styles.teacherImage}><img src ={props.teacherImage} style={{height:"100%", width:"100%", borderRadius:"50%"}} /></div>
</div>

<div className={styles.courseImage}><img src ={props.courseImage} style={{height:"100%", width:"100%", borderRadius:"10px"}} /></div>


  <div className={styles.departmentInfos}>
  <div className={styles.courseDepartment}>{props.departmentName}</div>
  <div className={styles.period}>{props.period}</div>
  </div>
  
  <div className={styles.courseInfo}>
  <div className={styles.courseTitle}>{props.courseTitle}</div>
  <div className={styles.kontenjan}> <div className={styles.takenKont}>{props.takenKont}</div>/<div className={styles.openKont}>{props.openKont}</div> </div>

</div>

<motion.div className={styles.addButton} whileHover={{scale:1.05}}>Derse kayıt Ol</motion.div>
        
      
    </div>
  )
}

export default CourseCard
