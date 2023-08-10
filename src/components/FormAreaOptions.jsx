import React from 'react'
import styles from './formAreas.module.css'
import Select from 'react-select';

const FormAreaOptions = (props) => {
    // const options = [
    //     { value: 'Mühendislik', label: 'Mühendislik' },
    //     { value: 'Hukuk', label: 'Hukuk' },
    //     { value: 'Sağlık', label: 'Sağlık' },
    //     { value: 'İşletme', label: 'İşletme' },
    //     { value: 'Fen-Edebiyat', label: 'Fen-Edebiyat' }
    // ];

    console.log(props)
  return (
    <div className={styles.container}>


      <div className={styles.userContents}>
        <label htmlFor="formInput" className={styles.formLabel}>{props.label}</label>

        {/* <Select className={styles.optionContainer}  disabled={props.disabled}
                    value={options.value}
                    options={options}
                    defaultValue={props.selected}
                /> */}

        <select className={styles.optionContainer} disabled={props.disabled} onChange={props.onChange}>
        <option value="" selected="selected" hidden="hidden">{props.selected}</option>
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
