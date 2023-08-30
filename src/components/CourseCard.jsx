import React, { useState } from 'react'
import styles from './CourseCard.module.css'
import {motion} from "framer-motion";
import TeacherInfo from './TeacherInfo';
import {useNavigate } from 'react-router-dom'


const CourseCard = (props) => {

  const [teacherInfo, setTeacherInfo] = useState(false);
  const navigate = useNavigate();

  function toggleTeacherInfo (){
    setTeacherInfo(!teacherInfo);
    console.log(teacherInfo);
 }

  return (

    <div>

    
    <div className={styles.cardContainer}>

<div className={styles.teacherNameImage}>
<div className={styles.teacherName}><h4> {props.unvan} {props.name} {props.lastname} </h4></div>
<div className={styles.teacherImage} onClick={toggleTeacherInfo}><img src ={props.teacherImage} style={{height:"100%", width:"100%", borderRadius:"50%"}} /></div>
</div>

<div className={styles.courseImage}><img src ={props.courseImage} style={{height:"100%", width:"100%", borderRadius:"10px"}} /></div>


  <div className={styles.departmentInfos}>
    
    <div className={styles.courseDepartment}>{props.departmentName}</div>
   
  <div className={styles.period}>{props.period}</div>
  </div>
  
  <div className={styles.courseInfo}>
    <div className={styles.courseTitle}>
    <div>{props.courseTitle}</div>
      <div>{props.courseCode}</div>
    </div>
  
  <div className={styles.kontenjan}> <div className={styles.takenKont}>{props.takenKont}</div>/<div className={styles.openKont}>{props.openKont}</div> </div>

</div>

<motion.div className={styles.addButton} whileHover={{scale:1.05}}  onClick={ () => {navigate(`/${props.navigate}`); localStorage.setItem("SelectedCourse", props.selectedCourseId)}}  >{props.button}</motion.div>
        
</div>

<TeacherInfo isclicked={teacherInfo} closeInfo={setTeacherInfo} teacherImage={props.teacherImage} name={props.name} unvan={props.unvan} />

    </div>
  )
}

export default CourseCard
