import React from 'react'
import styles from './formAreas.module.css'

const FormAreaOptions = (props) => {

  return (
    <div className={styles.container}>


      <div className={styles.userContents}>
        <label htmlFor="formInput" className={styles.formLabel}>{props.label}</label>

        <select className={styles.optionContainer} disabled={props.disabled} onChange={props.onChange}>
        <option value="" hidden="hidden">{props.selected}</option>
        <option className={styles.options} value="Mühendislik">Mühendislik</option>
        <option className={styles.options} value="Hukuk">Hukuk</option>
        <option className={styles.options} value="Sağlık">Sağlık</option>
        <option className={styles.options} value="İşletme">İşletme</option>
        <option className={styles.options} value="Fen-Edebiyat">Fen-Edebiyat</option>

        </select>
        
        </div>

    </div>
  )
}

export default FormAreaOptions
