import React from 'react'
import styles from './TeacherInfo.module.css'
import {FiX} from "react-icons/fi";



const TeacherInfo = (props) => {
  return props.isClicked ? (
    <div className={styles.container}>
    

        <div className={styles.infoContainer}>


        <div className={styles.closeContainer}>
            <div className={styles.close}  onClick={() => props.closeInfo(false)}><FiX size={'2rem'}/></div>
            </div>

           <div className={styles.teacherNameImage}>
           <div className={styles.teacherName}><h4> {props.unvan} {props.name} </h4></div>
           <div className={styles.teacherImage}><img src ={props.teacherImage} style={{height:"100%", width:"100%", borderRadius:"50%"}} /></div>
           </div>

           <ul className={styles.teacherInfos}>

           <li className={styles.titleContent}>
                <div className={styles.title}>Fakülte:</div>
                <div className={styles.content}>Makine Mühendisliği</div>
            </li>

            <li className={styles.titleContent}>
                <div className={styles.title}>Verdiği Dersler:</div>
                <div className={styles.content}>ME-211, ME-255, ME-301</div>
            </li>

            <li className={styles.titleContent}>
                <div className={styles.title}>Mail:</div>
                <div className={styles.content}>mehmet.yilmaz@teacher.edu.tr</div>
            </li>

            <li className={styles.titleContent}>
                <div className={styles.title}>Telefon:</div>
                <div className={styles.content}>0553 212 21 21</div>
            </li>

            </ul>

        </div>
      
    </div>
  )
  : ""
}


export default TeacherInfo
