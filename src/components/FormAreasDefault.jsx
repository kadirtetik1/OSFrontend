import React from 'react'
import styles from './formAreas.module.css'

const FormAreasDefault = (props) => {


  return (
    <div className={styles.container}>

      <div className={styles.userContents}>
        <label htmlFor="formInput" className={styles.formLabel}>{props.label}</label>
        <input type={props.type} id="formInput" defaultValue={props.input} required="required" className={props.classname} onChange={props.onChange} readOnly ={props.readOnly}/>
        </div>

    </div>
  )
  
}

export default FormAreasDefault
