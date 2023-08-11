import React from 'react'
import styles from './formAreas.module.css'

const FormAreaOption2 = (props) => {
  return (
    <div className={styles.container}>


      <div className={styles.userContents}>
        <label htmlFor="formInput" className={styles.formLabel}>{props.label}</label>

        <select className={styles.optionContainer} disabled={props.disabled} onChange={props.onChange}>
        <option value="" hidden="hidden">{props.selected}</option>
        <option className={styles.options} value="Erkek">Erkek</option>
        <option className={styles.options} value="Kadın">Kadın</option>

        </select>
        
        </div>

    </div>
  )
}

export default FormAreaOption2
