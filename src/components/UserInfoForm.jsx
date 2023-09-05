import React, { useEffect, useState } from 'react'
import FormAreas from './FormAreas';
import styles from './UserInfoForm.module.css'
import { LiaEdit} from "react-icons/lia";
import FormAreasDefault from './FormAreasDefault';
import KaydetButton from './KaydetButton';
import { createAPIEndpoint, EndPoints } from '../api';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormAreaOptions from './FormAreaOptions';
import FormAreaOption2 from './FormAreaOption2';
import { AxiosError } from 'axios';




const UserInfoForm = (props) => {


const [res, setRes] = useState(null);

const userId= localStorage.getItem("Id");   //localden Id çekiyor.

const [edit, setEdit] = useState(false);
const [def, setDef] = useState(true);
const [show, setShow] = useState(true);

let editColor ="";

const editSuccess = () => {
  toast.info("Bilgilerinizi Güncelleyebilirsiniz!", {    // 2 Defa gönderiyor çöz....
      position: toast.POSITION.TOP_RIGHT
  });
};

const kaydetSuccess = () => {
  toast.success("Bilgileriniz Başarıyla Güncellendi!", {
      position: toast.POSITION.BOTTOM_RIGHT
  });
};

const kaydetError = () => {
  toast.error("Bir Hatayla Karşılaşıldı!", {
      position: toast.POSITION.BOTTOM_RIGHT
  });
};

const errorEmptyAreas = () => {
  toast.error("Lütfen Boş Bırakılan Alanları Doldurunuz!", {
      position: toast.POSITION.BOTTOM_RIGHT
  });
};

  const[fname, setFname] = useState("");
  const[lname, setLname] = useState("");
  const[academicRole, setAcademicRole] = useState("");
  const[department1, setDepartment] = useState("");
  const[gender1, setGender] = useState("");
  const[mail, setMail] = useState("");
  const[phone, setPhone] = useState("");
  const[usern, setUserN] = useState("");
  const[pass, setPass] = useState("");

  const handleNameChange = (value) => {

    if(value!=""){  //1 değişken daha oluştur eğer "" değilse db'ye gönder?
      setFname(value);
      
    }
    else{
      setFname("");
      
    }

}

  const handleLastNChange = (value) => {setLname(value);}
  const handleRoleChange = (value) => {setAcademicRole(value);}
  const handleDepartmentChange = (value) => {setDepartment(value);}
  const handleGenderChange = (value) => {setGender(value);}
  const handleMailChange = (value) => {setMail(value);}
  const handlePhoneChange = (value) => {setPhone(value);}
  const handleUserNameChange = (value) => {setUserN(value);}
  const handlePasswordChange = (value) => {setPass(value);}

  const role = localStorage.getItem("role"); 


  useEffect(() => {

    if(role==="student"){

      createAPIEndpoint(EndPoints.student).getById(userId).then((res) =>{
        setRes(res);
  
        console.log(res); 
        console.log("res"); 
      
      }).catch(err => console.log(err));
      
    }

    else if(role==="teacher"){

      createAPIEndpoint(EndPoints.teacher).getById(userId).then((res) =>{
        setRes(res);
  
        console.log(res); 
        console.log("res"); 
      
      }).catch(err => console.log(err));


    }

  }, [])

  

function updateInfos(){

  let name1= " ";
  let last_name1 = " ";
  let academic_role1 = " ";
  let department2 = " ";
  let gender2 = " ";
  let e_mail1 = " ";
  let phone_number1 = " ";
  let user_name1 = " ";
  let password1 = " ";


  fname!=""? name1=fname : name1=name;    // Eğer onchangede değişiklik yoksa db'ye eski halini göndermesi için yazıldı.
  lname!=""? last_name1=lname : last_name1=last_name;
  mail!=""? e_mail1=mail : e_mail1=e_mail;
  pass!=""? password1=pass : password1=password;
  usern!=""? user_name1=usern : user_name1=user_name;
  department1!=""? department2=department1 : department2=department;
  gender1!=""? gender2=gender1 : gender2=gender;
  phone!=""? phone_number1=phone : phone_number1=phone_number;
  
  academic_role=="student" || academic_role=="Öğrenci" ? academic_role1="Öğrenci" : academic_role1="Öğretmen"; 

  const data ={
    id: userId,
    first_name : name1,
    last_name: last_name1,
    academic_role: academic_role1,
    e_mail: e_mail1,
    user_name: user_name1,
    password: password1,
    phone_number: phone_number1,
    gender:gender2,
    department:department2

  };

  if(role==="student"){

    createAPIEndpoint(EndPoints.student).put(data).then(put =>{
      console.log(put);

      if(put?.status===200){
        kaydetSuccess();
        setTimeout(() => window.location.reload(), 1000);
        
      }
  
    }).catch(err => { 
      console.log(err);
      if(err.message==="Request failed with status code 400"){
  
        errorEmptyAreas();
      }
      else{
        kaydetError();
      }

    });

  }

  else if(role==="teacher"){

    createAPIEndpoint(EndPoints.teacher).put(data).then(put =>{
      console.log(put);

      if(put?.status===200){
        kaydetSuccess();
        setTimeout(() => window.location.reload(), 1000);
        
      }
  
    }).catch(err => { 
      console.log(err);
      if(err.message==="Request failed with status code 400"){
  
        errorEmptyAreas();
      }
      else{
        kaydetError();
      }
      
    });

  }

  // Registerdaki gibi sisteme kayıtlı aynı kullanıcı adı veya e posta varsa değiştirmesine izin verme!

  
}


  function toggleEdit (){
    setEdit(!edit);
    setShow(!show);
    setDef(!def);
   
    edit ? editColor="black" : editSuccess();
 }

edit ? editColor="#01b671" : editColor="black";

let profilPicture = "";

if(role==="student"){

  profilPicture="https://img.freepik.com/premium-photo/young-student-boy-smiling-happily-with-hand-hip-confident-positive-proud-friendly-attitude_1194-309973.jpg"

}

else if(role==="teacher"){

  profilPicture="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"

}
  console.log(res?.data);

  let name= res?.data.first_name;
  let last_name = res?.data.last_name;
  let academic_role = res?.data.academic_role;
  let department = res?.data.department;
  let gender = res?.data.gender;
  let e_mail = res?.data.e_mail;
  let phone_number = res?.data.phone_number;
  let user_name = res?.data.user_name;
  let password = res?.data.password;

  let fullname= name + " " + last_name;

  localStorage.setItem("username", user_name); // Değişiklik olduğunda sağ taraftaki bilgileri de güncellesin diye yazıldı..
  localStorage.setItem("fullname", fullname);
  localStorage.setItem("department", department);
  

  let inputClassName=styles.formInput;

  show ? inputClassName=styles.formInputDisabled : inputClassName=styles.formInput;

  
  return (

    <div className={styles.container1}>

    <div className={styles.container}>

        <div className={styles.infosContainer}>
            <img src={profilPicture} alt="" className={styles.image}></img>
            <div className={styles.infos}>
                <div className={styles.realName}>{name} {last_name}</div>
                <div className={styles.userName}>{user_name}</div>
                <div className={styles.academicRole}>{academic_role}</div>
            </div>
          
        </div>
      <form className={styles.formContainer}>

        <div className={styles.edit} isclicked={edit}  onClick={() => {toggleEdit(); }}> <LiaEdit size={25} color={editColor}/></div>

        <FormAreasDefault classname={inputClassName} type="text" label="Ad:" input={name} readOnly={show} onChange={ (e) => {handleNameChange(e.target.value) }}/>
        <FormAreasDefault classname={inputClassName} type="text" label="Soyad:" input={last_name} readOnly={show} onChange={(e) => handleLastNChange(e.target.value)}/>
        <FormAreasDefault classname={inputClassName} type="text" label="Akademik Ünvan:" input={academic_role} readOnly={true}/>
       
        <FormAreaOptions type="text" label="Fakülte:" selected={department} disabled={show} onChange={(e) => {
          const selectedDepartment = e.target.value;
          setDepartment(selectedDepartment); console.log(department1);
        }} />

        <FormAreaOption2 type="text" label="Cinsiyet:" selected={gender} disabled={show} onChange={(e) => {
          const selectedGender = e.target.value;
          setGender(selectedGender); console.log(gender1);
        }} /> 

        <FormAreasDefault classname={inputClassName} type="email" label="E-mail Adres:" input={e_mail} readOnly={show} onChange={(e) => handleMailChange(e.target.value)}/>
        <FormAreasDefault classname={inputClassName} type="number" label="Telefon Numarası:" input={phone_number} readOnly={show} onChange={(e) => handlePhoneChange(e.target.value)}/>
        <FormAreasDefault classname={inputClassName} type="text" label="Kullanıcı Adı:" input={user_name} readOnly={show} onChange={(e) => handleUserNameChange(e.target.value)}/>
        <FormAreas classname={inputClassName} type="password" label="Şifre:" input={password} readOnly={show} onChange={(e) => handlePasswordChange(e.target.value)}/>

        <KaydetButton isclicked={edit} onClick={() => {
          toggleEdit(); 
          updateInfos();
            }}/> 
        
      </form>
    </div>
    <ToastContainer/>
   
    </div>
  )
}

export default UserInfoForm
