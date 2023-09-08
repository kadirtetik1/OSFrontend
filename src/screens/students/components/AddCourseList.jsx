import React from 'react'
import styles from './AddCourseList.module.css'

const AddCourseList = (props) => {
  return (
    <div className={styles.container}>
        <h3 className={styles.count}>{props.count}. </h3>
        <h3 className={styles.code}>{props.courseCode} </h3>
        <h3 className={styles.name}>{props.courseName}</h3>
    </div>
  )
}

export default AddCourseList
