import React from 'react'
import styles from './UserInfoForm.module.css'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const KaydetButton = (props) => {

    const kaydetSuccess = () => {
        toast.success("Bilgileriniz Başarıyla Güncellendi!", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

  return props.isclicked ? (
    <div className={styles.kaydet} onClick={() => kaydetSuccess()}>
        <input type="submit" className={styles.kaydetButton} value="Değişiklikleri Kaydet"/>
        <ToastContainer />
        </div>
  )
  :undefined
}

export default KaydetButton
