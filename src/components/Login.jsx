import {React, useEffect, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import {FiX} from "react-icons/fi";
import {GiTeacher} from "react-icons/gi";
import {PiStudentFill} from "react-icons/pi";
import { createAPIEndpoint, EndPoints } from '../api';
import jwt from 'jwt-decode'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {

  // db'deki değerleri kontrol et eşitliğe göre login olsun değilse hata mesajı döndür.

  // if (userName == db userName && password == db password) => login success, if (academicRole == student) => goto studentHomePage : goto teacherHomePage

  const[academicRole, setAcademicRole] = useState("");
  const[userName, setUserName] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleRoleChange = (value) => {
    setAcademicRole(value);
  }

  const handleUserChange = (value) => {
    setUserName(value);
  }

  const handlePasswordChange = (value) => {
    setPassword(value);
  }


  const handleLogin = (event) => {

     event.preventDefault();

    const data ={
      academic_role: academicRole,
      user_name: userName,
      password: password
    };
    

    if(data.academic_role==="student"){
      createAPIEndpoint(EndPoints.student_login, ).post({user_name : data.user_name ,password : data.password}).then((res) =>{
        console.log(res);
        
        if(res.data == "Kullanıcı adı veya şifre hatalı!"){

          const showToastMessage = () => {
            toast.error(res.data, {
                position: toast.POSITION.TOP_RİGHT
            });
        };
        showToastMessage();
          
        }
        else{

          // createAPIEndpoint(EndPoints.student_login).post(res.data.accessToken).then((response) =>{            //  headersta deneme

          //   console.log(response.data.message);

          // }).catch(error => console.log(error));

          console.log(res.data);
          navigate("/studentsHome");
          localStorage.setItem("Token", res.data.accessToken);
          const decode = jwt(res.data.accessToken);
          localStorage.setItem("Id", decode.id); 
          localStorage.setItem("username", decode.username); 
          localStorage.setItem("fullname", decode.fullname); 
          localStorage.setItem("role", decode.role); 
 
          // createAPIEndpoint(EndPoints.base, {                 // !!! headersta tokenı gönderip doğru olup olmadığını kontrol et, içersinden teacher id'yi çek.
          //   Headers:{
          //     `Token: ${res.data.accessToken}`
          //   }
          // }).
        }

      }).catch(err => console.log(err));
    
    }


    else if(data.academic_role==="teacher"){
      createAPIEndpoint(EndPoints.teacher_login).post({user_name : data.user_name ,password : data.password}).then((res) =>{
        console.log(res);

        if(res.data == "Kullanıcı adı veya şifre hatalı!"){

          const showToastMessage = () => {
            toast.error(res.data, {
                position: toast.POSITION.TOP_RİGHT
            });
        };
        showToastMessage();

          // event.preventDefault();
          
        }
        else{
          console.log(res.data);
          navigate("/teachersHome");
          localStorage.setItem("Token", res.data.accessToken);
          const decode = jwt(res.data.accessToken);
          localStorage.setItem("Id", decode.id); 
          localStorage.setItem("username", decode.username); 
          localStorage.setItem("fullname", decode.fullname); 
          localStorage.setItem("role", decode.role); 
          
        }

      }).catch(err => console.log(err));
    }
  }
  

    return props.isclicked ? (

      <div className={props.container}>

      
        <div className={styles.background} >

         
    
            <div className={styles.form}>

            <div className={styles.closeContainer}>
              <div className={props.closeShow}>
                <div className={styles.close}  onClick={() => props.closeLogin(false)}><FiX size={'2rem'}/></div>
                </div>
            
            </div>

               <form className={styles.formContainer}>


                <div className={styles.roleBox}>

                  <div className={styles.selectRole}>

                  <input type="radio" id="teacher" name="academic_role" value="teacher" onChange={(e) => handleRoleChange(e.target.value)} required="required"/>
                  <div className={styles.inputTitle}>
                    <GiTeacher className={styles.icon} size={'2rem'} color={"#feb206"}/>
                 <label style={{fontSize:"11px", fontWeight:"600"}}>Öğretmen</label>
                 </div>

                  </div>

                  <div className={styles.selectRole}>

                  <input type="radio" id="student" name="academic_role" value="student" onChange={(e) => handleRoleChange(e.target.value)} required="required"/>
                  <div className={styles.inputTitle}>
                  <PiStudentFill className={styles.icon} size={'2rem'} color={"#feb206"}/>
                 <label style={{fontSize:"11px", fontWeight:"600"}} >Öğrenci</label>
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

                    
                    <a href='#'>Şifremi Unuttum</a>

                </div>

                <div onClick={(event) => handleLogin(event)} className={styles.buttonContainer}>
                <input className={styles.girisButton} type="submit" value="Giriş Yap"/>
                </div>
                
               </form>
               
            </div>
            <ToastContainer />
        </div>

        </div>
      )

      : ""
}

export default Login
