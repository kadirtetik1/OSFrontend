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

const userId="eb04476e-7595-4ed0-a804-855606ea61e2";   //db'den var olan bir userId verildi. Dah sonra burayı giriş yapılan tokendan çekeceksin.

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


  fname!=""? name1=fname : name1=name;    // Eğer onchangede değişiklik yoksa db'ye eski halini göndermesi için yazıldı.
  lname!=""? last_name1=lname : last_name1=last_name;
  // academicRole!=""? academic_role1=academicRole : academic_role1=academic_role;
  mail!=""? e_mail1=mail : e_mail1=e_mail;
  pass!=""? password1=pass : password1=password;
  usern!=""? user_name1=usern : user_name1=user_name;
  department1!=""? department2=department1 : department2=department;
  gender1!=""? gender2=gender1 : gender2=gender;
  phone!=""? phone_number1=phone : phone_number1=phone_number;   // Telefon, cinsiyet, fakülte update tablosunda olmadığı için şu an değiştirmiyor.
  
  academic_role=="student" ? academic_role1="Öğrenci" : academic_role1="Öğretmen";  // Değiştirmiyor kontrol et!

  const data ={
    id: userId,
    first_name : name1,
    last_name: last_name1,
    academic_role: academic_role1,
    e_mail: e_mail1,
    user_name: user_name1,
    password: password1,
    phone_numbe: phone_number1,
   
  };

  // department: department2,
  //   gender: gender2,

  

  createAPIEndpoint(EndPoints.student).put(data).then(res => console.log(res.data)).catch(err => console.log(err));

  // Registerdaki gibi sisteme kayıtlı aynı kullanıcı adı veya e posta varsa değiştirmesine izin verme!

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

  let name= res?.data.first_name;
  let last_name = res?.data.last_name;
  let academic_role = res?.data.academic_role;
  let department = res?.data.department;
  let gender = res?.data.gender;
  let e_mail = res?.data.e_mail;
  let phone_number = res?.data.phone_number;
  let user_name = res?.data.user_name;
  let password = "*******";

  
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
        <FormAreasDefault label="Akademik Ünvan:" input={academic_role} readOnly={true}/>
        <FormAreasDefault label="Fakülte:" input={department} readOnly={show} onChange={(e) => handleDepartmentChange(e.target.value)}/>
        <FormAreasDefault label="Cinsiyet:" input={gender} readOnly={show} onChange={(e) => handleGenderChange(e.target.value)}/>
        <FormAreasDefault label="E-mail Adres:" input={e_mail} readOnly={show} onChange={(e) => handleMailChange(e.target.value)}/>
        <FormAreasDefault label="Telefon Numarası:" input={phone_number} readOnly={show} onChange={(e) => handlePhoneChange(e.target.value)}/>
        <FormAreasDefault label="Kullanıcı Adı:" input={user_name} readOnly={show} onChange={(e) => handleUserNameChange(e.target.value)}/>
        <FormAreasDefault label="Şifre:" input={password} readOnly={show} onChange={(e) => handlePasswordChange(e.target.value)}/>
        
   
        <KaydetButton isclicked={edit} onClick={() => {toggleEdit(); succcessMessage(); updateInfos(); }}/> 
        
      </form>
    </div>
    <ToastContainer/>
   
    </div>
  )
}

export default UserInfoForm
