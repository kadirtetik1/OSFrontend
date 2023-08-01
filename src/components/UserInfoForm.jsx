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
const [success, setSuccess] = useState(false);
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
      console.log(value);
      console.log("--------------1");
    }
    else{
      setFname("value2");
      console.log(value);
      console.log("--------------2");
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


  let color="";

  useEffect(() => {

    createAPIEndpoint(EndPoints.student).getById(userId).then((res) =>{
      setRes(res)
    
    }).catch(err => console.log(err));

  }, [])

function updateInfos(){

  var name1= "";
  var last_name1 = "";
  var academic_role1 = "";
  var department2 = "";
  var gender2 = "";
  var e_mail1 = "";
  var phone_number1 = "";
  var user_name1 = "";
  var password1 = "*******";


  fname!=""? name1=fname : name1=name;
  lname!=""? last_name1=lname : last_name1=last_name;
  academicRole!=""? academic_role1=academicRole : academic_role1=academic_role;
  mail!=""? e_mail1=mail : e_mail1=e_mail;
  pass!=""? password1=pass : password1=password;
  usern!=""? user_name1=usern : user_name1=user_name;
  department1!=""? department2=department1 : department2=department;
  gender1!=""? gender2=gender1 : gender2=gender;
  phone!=""? phone_number1=phone : phone_number1=phone_number;   //Sadece telefon değişmiyor DÜZELT!!
  

  const data ={
    id: userId,
    first_name : name1,
    last_name: last_name1,
    academic_role: academic_role1,
    e_mail: e_mail1,
    user_name: user_name1,
    password: password1,
    department: department2,
    gender: gender2,
    phone_numbe: phone_number1,
   
  };

  createAPIEndpoint(EndPoints.student).put(data).then(res => console.log(res.data)).catch(err => console.log(err));

}


  function toggleEdit (){
    setEdit(!edit);
    setShow(!show);
    setDef(!def);
   
    edit ? editColor="black" : editSuccess();
 }

 function succcessMessage () {
  setSuccess(!success);
  console.log(success);
  kaydetSuccess();
 }

edit ? editColor="#01b671" : editColor="black";


  console.log(res?.data);

  var name= res?.data.first_name;
  var last_name = res?.data.last_name;
  var academic_role = res?.data.academic_role;
  var department = res?.data.department;
  var gender = res?.data.gender;
  var e_mail = res?.data.e_mail;
  var phone_number = res?.data.phone_number;
  var user_name = res?.data.user_name;
  var password = "*******";

  academic_role=="student" ? academic_role="Öğrenci" : academic_role="Öğretmen" // DEĞER GELMEZSE ÖĞRETMEN BASIYO DÜZELT!
  
  console.log(res?.data);
  return (

    <div className={styles.container1}>

    
    <div className={styles.container}>

   
        <div className={styles.infosContainer}>
            <img src={props.image} alt="" className={styles.image}></img>
            <div className={styles.infos}>
                <div className={styles.realName}>{name} {last_name}</div>
                <div className={styles.userName}>{user_name}</div>
                <div className={styles.academicRole}>{academic_role}</div>
            </div>
          
        </div>
      <form className={styles.formContainer}>

        <div className={styles.edit} isclicked={edit}  onClick={() => {toggleEdit(); }}> <LiaEdit size={25} color={editColor}/></div>

        <FormAreasDefault label="Ad:" input={name} readOnly={show} onChange={ (e) => {handleNameChange(e.target.value) }}/>
        <FormAreasDefault label="Soyad:" input={last_name} readOnly={show} onChange={(e) => handleLastNChange(e.target.value)}/>
        <FormAreasDefault label="Akademik Ünvan:" input={academic_role} readOnly={show} onChange={(e) => handleRoleChange(e.target.value)}/>
        <FormAreasDefault label="Fakülte:" input={department} readOnly={show} onChange={(e) => handleDepartmentChange(e.target.value)}/>
        <FormAreasDefault label="Cinsiyet:" input={gender} readOnly={show} onChange={(e) => handleGenderChange(e.target.value)}/>
        <FormAreasDefault label="E-mail Adres:" input={e_mail} readOnly={show} onChange={(e) => handleMailChange(e.target.value)}/>
        <FormAreasDefault label="Telefon Numarası:" input={phone_number} readOnly={show} onChange={(e) => handlePhoneChange(e.target.value)}/>
        <FormAreasDefault label="Kullanıcı Adı:" input={user_name} readOnly={show} onChange={(e) => handleUserNameChange(e.target.value)}/>
        <FormAreasDefault label="Şifre:" input={password} readOnly={show} onChange={(e) => handlePasswordChange(e.target.value)}/>
        
        <div>{fname}</div>

        {/* <FormAreas isclicked={edit} label="Ad:" input={name} onChange={(e) => handleNameChange(e)}/>
        <FormAreas isclicked={edit} label="Soyad:" input={last_name}/>
        <FormAreas isclicked={edit} label="Akademik Ünvan:" input={academic_role}/>
        <FormAreas isclicked={edit} label="Cinsiyet:" input={gender}/>
        <FormAreas isclicked={edit} label="E-mail Adres:" input={e_mail}/>
        <FormAreas isclicked={edit} label="Telefon Numarası:" input={phone_number}/>
        <FormAreas isclicked={edit} label="Kullanıcı Adı:" input={user_name}/>
        <FormAreas isclicked={edit} label="Şifre:" input={password}/> */}


        {/* <div className={styles.kaydet} onClick={() => { updateInfos();}}>
        <input type="submit" className={styles.kaydetButton} value="Değişiklikleri Kaydet"/>
       
        </div> */}


        
        <KaydetButton isclicked={edit} onClick={() => {toggleEdit(); succcessMessage(); updateInfos();
                 }}/> 
        
      </form>
    </div>
    <ToastContainer/>
   
    </div>
  )
}

export default UserInfoForm
