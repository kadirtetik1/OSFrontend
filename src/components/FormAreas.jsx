import React from 'react'
import styles from './formAreas.module.css'

const FormAreas = (props) => {
  return (
    <div className={styles.container}>

      <form className={styles.userContents}>
        <label for="formInput" className={styles.formLabel}>{props.label}</label>
        <input type="text" id="formInput" name="formInput" value={props.input} className={styles.formInput} />
        </form>

    </div>
  )
}

export default FormAreas
