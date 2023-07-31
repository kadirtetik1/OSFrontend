import React from 'react'
import styles from './formAreas.module.css'

const FormAreas = (props) => {
  return props.isclicked ? (
    <div className={styles.container}>

      <div className={styles.userContents}>
        <label htmlFor="formInput" className={styles.formLabel}>{props.label}</label>
        <input type="text" id="formInput" defaultValue={props.input} placeholder={props.input} className={styles.formInput} style={{color:"#989898"}} required="required" />
        </div>

    </div>
  )
  :""
}

export default FormAreas
