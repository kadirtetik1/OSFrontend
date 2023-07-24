import {React, useState} from 'react'
import axios from 'axios';
import styles from './Login.module.css'
import {FiX} from "react-icons/fi";
import {GiTeacher} from "react-icons/gi";
import {PiStudentFill} from "react-icons/pi";

const Login = (props) => {

  // db'deki değerleri kontrol et eşitliğe göre login olsun değilse hata mesajı döndür.

  // if (userName == db userName && password == db password) => login success, if (academicRole == student) => goto studentHomePage : goto teacherHomePage

  const[academicRole, setAcademicRole] = useState("");
  const[userName, setUserName] = useState("");
  const[password, setPassword] = useState("");

  const handleRoleChange = (value) => {
    setAcademicRole(value);
  }

  const handleUserChange = (value) => {
    setUserName(value);
  }

  const handlePasswordChange = (value) => {
    setPassword(value);
  }





  const handleLogin = () => {
    const data ={
      academic_role: academicRole,
      user_name: userName,
      password: password
    };

    const url = ""   
    axios.post(url, data).then((result) => {
    
    })


    console.log("academic_role:" + {academicRole} +
      "user_name:" + {userName} +
      "password:" + {password}
        );
      


  }
  

    return props.isClicked ? (
        <div className={styles.background} >
    
            <div className={styles.form}>

            <div className={styles.closeContainer}>
            <div className={styles.close}  onClick={() => props.closeLogin(false)}><FiX size={'2rem'}/></div>
            </div>

               <form className={styles.formContainer}>


                <div className={styles.roleBox}>

                  <div className={styles.selectRole}>

                  <input type="radio" id="teacher" name="academic_role" value="teacher" onChange={(e) => handleRoleChange(e.target.value)} required="required"/>
                  <div className={styles.inputTitle}>
                    <GiTeacher className={styles.icon} size={'2rem'} color={"#feb206"}/>
                 <label style={{fontSize:"11px", fontWeight:"600"}} for="teacher">Öğretmen</label>
                 </div>

                  </div>

                  <div className={styles.selectRole}>

                  <input type="radio" id="student" name="academic_role" value="student" onChange={(e) => handleRoleChange(e.target.value)} required="required"/>
                  <div className={styles.inputTitle}>
                  <PiStudentFill className={styles.icon} size={'2rem'} color={"#feb206"}/>
                 <label style={{fontSize:"11px", fontWeight:"600"}} for="student">Öğrenci</label>
                  </div>
                 
                </div>

                  <h4 style={{padding:"0", margin:"0"}}>Akademik Ünvanınızı Seçiniz</h4>
                

                  </div>


                <div className={styles.inputBox}>
                    <input type="text" required="required" onChange={(e) => handleUserChange(e.target.value)}/>
                    <span>Kullanıcı Adı</span>
                    <i></i>
                </div>

                <div className={styles.inputBox}>
                    <input type="password" required="required" onChange={(e) => handlePasswordChange(e.target.value)}/>
                    <span>Şifre</span>
                    <i></i>
                </div>

                <div className={styles.links}>

                    <a href='#'>Şifremi Değiştir</a>
                    <a href='#'>Şifremi Unuttum</a>

                </div>

                <div onClick={() => handleLogin()} className={styles.buttonContainer}>
                <input className={styles.girisButton} type="submit" value="Giriş Yap"/>
                </div>
                
               </form>

               
            </div>
          
        </div>
      )

      : ""
}

export default Login
