import React from 'react'
import styles from './CreateInput.module.css'

const CreateInput = () => {
  return (
    <div>

        <form className={styles.formContainer}>
          <div className={styles.labelInput} >
          <label className={styles.formLabel} htmlFor="formInput" >Fakülte:</label>
          <input className={styles.formInput} type="text"/>
          </div>
        
          <div className={styles.labelInput}>
          <label className={styles.formLabel} htmlFor="formInput" >Bölüm:</label>
          <input className={styles.formInput} type="text"/>
          </div>

          <div className={styles.labelInput}>
          <label className={styles.formLabel} htmlFor="formInput" >Ders Adı:</label>
          <input className={styles.formInput} type="text"/>
          </div>

          <div className={styles.labelInput}>
          <label className={styles.formLabel} htmlFor="formInput" >Ders Kodu:</label>
          <input className={styles.formInput} type="text"/>
          </div>

          <div className={styles.labelInput}>
          <label className={styles.formLabel} htmlFor="formInput" >Kontenjan:</label>
          <input className={styles.formInput} type="text"/>
          </div>

          <div className={styles.labelInput}>
          <label className={styles.formLabel} htmlFor="formInput" >Dönem:</label>
          <input className={styles.formInput} type="text"/>
          </div>

          <div className={styles.buttonContainer}>
          <button className={styles.button}>Oluştur</button>
          </div>
          

        </form>
      
    </div>
  )
}

export default CreateInput
