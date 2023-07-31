import React, { useEffect, useState } from 'react'
import FormAreas from './FormAreas';
import styles from './UserInfoForm.module.css'
import { LiaEdit} from "react-icons/lia";
import FormAreasDefault from './FormAreasDefault';
import KaydetButton from './KaydetButton';
import { createAPIEndpoint, EndPoints } from '../api';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserInfoForm = (props) => {

const [res, setRes] = useState(null);
const userId="eb04476e-7595-4ed0-a804-855606ea61e2";

const [edit, setEdit] = useState(false);
const [def, setDef] = useState(true);
const [show, setShow] = useState(true);

let editColor ="";

const editSuccess = () => {
  toast.info("Bilgilerinizi Güncelleyebilirsiniz!", {    // 2 Defa gönderiyor çöz....
      position: toast.POSITION.TOP_RIGHT
  });
};


  const handleNameChange = (value) => {
    setFname(value);
  }

  const handleLastNChange = (value) => {
    setLname(value);
  }

  const handleRoleChange = (value) => {
    setAcademicRole(value);
  }

  const handleDepartmentChange = (value) => {
    setDepartment(value);
  }

  const handleGenderChange = (value) => {
    setGender(value);
  }
  const handleMailChange = (value) => {
    setMail(value);
  }

  const handlePhoneChange = (value) => {
    setPhone(value);
  }

  const handleUserNameChange = (value) => {
    setUserN(value);
  }

  const handlePasswordChange = (value) => {
    setPass(value);
  }

  const[fname, setFname] = useState("");
  const[lname, setLname] = useState("");
  const[academicRole, setAcademicRole] = useState("");
  const[department1, setDepartment] = useState("");
  const[gender1, setGender] = useState("");
  const[mail, setMail] = useState("");
  const[phone, setPhone] = useState("");
  const[usern, setUserN] = useState("");
  const[pass, setPass] = useState("");
  


  const data ={
    id: userId,
    first_name : fname,
    last_name: lname,
    academic_role: academicRole,
    department: department1,
    gender: gender1,
    e_mail: mail,
    phone_numbe: phone,
    user_name: usern,
    password: pass
   
  };

 
  console.log(data);

 createAPIEndpoint(EndPoints.student).put(data.id).then(res => alert(res.data).console.log(res)).catch(err => console.log(err));

 

  let name= "Null";
  let last_name = "Null";
  let academic_role = "Null";
  let department = "Null";
  let gender = "Null";
  let e_mail = "Null";
  let phone_number = "Null";
  let user_name = "Null";
  let password = "*******";


  function toggleEdit (event){
    setEdit(!edit);
    setShow(!show);
    setDef(!def);
   
 }
//  edit ? editSuccess() :


 edit ? editColor="#01b671" & editSuccess() : editColor="black";


  useEffect(() => {

    createAPIEndpoint(EndPoints.student).getById(userId).then((res) =>{
      setRes(res)
    
    }).catch(err => console.log(err));

  }, [])

  console.log(res?.data);

  name= res?.data.first_name;
  last_name = res?.data.last_name;
  academic_role = res?.data.academic_role;
  department = res?.data.department;
  gender = res?.data.gender;
  e_mail = res?.data.e_mail;
  phone_number = res?.data.phone_number;
  user_name = res?.data.user_name;
  password = "*******";
  

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
      <form className={styles.formContainer}>

        <div className={styles.edit} isclicked={edit}  onClick={() => {toggleEdit(); }}> <LiaEdit size={25} color={editColor}/></div>


        <FormAreasDefault label="Ad:" input={name} readOnly={show} onChange={(e) => handleNameChange(e.target.value)}/>
        <FormAreasDefault label="Soyad:" input={last_name} readOnly={show} onChange={(e) => handleLastNChange(e.target.value)}/>
        <FormAreasDefault label="Akademik Ünvan:" input={academic_role} readOnly={show} onChange={(e) => handleRoleChange(e.target.value)}/>
        <FormAreasDefault label="Fakülte:" input={department} readOnly={show} onChange={(e) => handleDepartmentChange(e.target.value)}/>
        <FormAreasDefault label="Cinsiyet:" input={gender} readOnly={show} onChange={(e) => handleGenderChange(e.target.value)}/>
        <FormAreasDefault label="E-mail Adres:" input={e_mail} readOnly={show} onChange={(e) => handleMailChange(e.target.value)}/>
        <FormAreasDefault label="Telefon Numarası:" input={phone_number} readOnly={show} onChange={(e) => handlePhoneChange(e.target.value)}/>
        <FormAreasDefault label="Kullanıcı Adı:" input={user_name} readOnly={show} onChange={(e) => handleUserNameChange(e.target.value)}/>
        <FormAreasDefault label="Şifre:" input={password} readOnly={show} onChange={(e) => handlePasswordChange(e.target.value)}/>



        {/* <FormAreas isclicked={edit} label="Ad:" input={name} onChange={(e) => handleNameChange(e)}/>
        <FormAreas isclicked={edit} label="Soyad:" input={last_name}/>
        <FormAreas isclicked={edit} label="Akademik Ünvan:" input={academic_role}/>
        <FormAreas isclicked={edit} label="Cinsiyet:" input={gender}/>
        <FormAreas isclicked={edit} label="E-mail Adres:" input={e_mail}/>
        <FormAreas isclicked={edit} label="Telefon Numarası:" input={phone_number}/>
        <FormAreas isclicked={edit} label="Kullanıcı Adı:" input={user_name}/>
        <FormAreas isclicked={edit} label="Şifre:" input={password}/> */}

        
        <KaydetButton isclicked={edit} onClick={() => {toggleEdit(); }}/> 
        
      </form>
    </div>
    <ToastContainer/>
    </div>
  )
}

export default UserInfoForm
