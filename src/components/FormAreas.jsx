import React from 'react'
import styles from './formAreas.module.css'

const FormAreas = (props) => {
  return props.isClicked ? (
    <div className={styles.container}>

      <form className={styles.userContents}>
        <label for="formInput" className={styles.formLabel}>{props.label}</label>
        <input type="text" id="formInput" placeholder={props.input} className={styles.formInput} required="required" />
        </form>

    </div>
  )
  :""
}

export default FormAreas
