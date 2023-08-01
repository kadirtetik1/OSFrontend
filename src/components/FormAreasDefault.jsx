import React from 'react'
import styles from './formAreas.module.css'

const FormAreasDefault = (props) => {


  return (
    <div className={styles.container}>

      <div className={styles.userContents}>
        <label htmlFor="formInput" className={styles.formLabel}>{props.label}</label>
        <input type="text" id="formInput" defaultValue={props.input}  className={styles.formInput} onChange={props.onChange} readOnly ={props.readOnly}/>
        </div>

    </div>
  )
  
}

export default FormAreasDefault
