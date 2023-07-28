import React from 'react'
import FormAreas from './FormAreas';
import styles from './UserInfoForm.module.css'
import { LiaEdit} from "react-icons/lia";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserInfoForm = (props) => {

    const kaydetButtonStyle = `styles.kaydetButton`
    const kaydet = 'Değişiklikleri Kaydet'

    const kaydetSuccess = () => {
        toast.success("Bilgileriniz Başarıyla Güncellendi!", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    const showEdit = () =>{
    }



  return (

    <div className={styles.container1}>

    
    <div className={styles.container}>
        <div className={styles.infosContainer}>
            <img src={props.image} alt="" className={styles.image}></img>
            <div className={styles.infos}>
                <div className={styles.realName}>{props.realName}</div>
                <div className={styles.userName}>{props.userName}</div>
                <div className={styles.academicRole}>{props.academicRole}</div>
            </div>
        </div>
      <div className={styles.formContainer}>

        <div className={styles.edit} onClick={(event) => showEdit(event)}><LiaEdit size={25}/></div>

        <FormAreas label="Ad:" input="Kadir"/>
        <FormAreas label="Soyad:" input="Tetik"/>
        <FormAreas label="Akademik Ünvan:" input="Öğrenci"/>
        <FormAreas label="Cinsiyet:" input="Erkek"/>
        <FormAreas label="E-mail Adres:" input="tetik.kadir@student.edu.tr"/>
        <FormAreas label="Telefon Numarası:" input="0553 555 55 55"/>
        <FormAreas label="Kullanıcı Adı:" input="kadir.tetik"/>
        <FormAreas label="Şifre:" input="*********"/>

        <div className={styles.kaydet}>
        <div className={styles.kaydetButton} onClick={() => kaydetSuccess()}>{kaydet}</div>
        </div>
        
      </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default UserInfoForm
