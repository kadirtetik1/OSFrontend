import React from 'react'
import styles from './UserInfoAreas.module.css'
import {useNavigate } from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UserInfoAreas = (props) => {

  const showToastMessage = () => {
    toast.success(props.title, {
        position: toast.POSITION.TOP_RİGHT
    });
};

  const navigate = useNavigate();

  const handleLogin = (event) => {

    if(props.title==="Profil Bilgileri"){

      navigate("/studentInfos");
    }

    else if(props.title==="Bilgileri Güncelle"){

      navigate("/teacherInfos");
    }

    else if(props.title==="Aldığım Dersler"){
      navigate("/taken-courses");
      
    }
    
    else if(props.title==="Verdiğim Dersler"){
      navigate("/my-courses");
      
    }

    else if(props.title==="Ders Programım"){

      navigate("/schedule");
    }

    else if(props.title==="Çıkış"){

      
      if (window.confirm("Çıkış yapmak istediğinize emin misiniz?")) {

        navigate("/");
      
        localStorage.clear();
        
      }
     
      
      
    }
  }
  return (
    <div className={styles.container1}>

    <div onClick={(event) => handleLogin(event)} className={styles.container}>
        <div className={styles.icon}>{props.icon}</div>
        <div className={styles.content}>{props.title}</div>

        </div>

        <div className={styles.bottomLine}></div>
        <ToastContainer />
    </div>
  )
}

export default UserInfoAreas
