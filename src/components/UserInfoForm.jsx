import React, { useState } from 'react'
import FormAreas from './FormAreas';
import styles from './UserInfoForm.module.css'
import { LiaEdit} from "react-icons/lia";
import FormAreasDefault from './FormAreasDefault';
import KaydetButton from './KaydetButton';

const UserInfoForm = (props) => {

  const [edit, setEdit] = useState(false);
  const [def, setDef] = useState(true);

  function toggleEdit (event){
    setEdit(!edit);
    console.log(edit);
   

    setDef(!def);
    console.log(def);

 }

 let editColor ="";

 edit? editColor="#01b671" : editColor="black";


  const name= "Kadir";
  const last_name = "Tetik";
  const academic_role = "tetik.kadir@hotmail.com";
  const gender = "Erkek";
  const e_mail = "tetik.kadir@hotmail.com";
  const phone_number = "0553 555 55 55";
  const user_name = "kadir.tetik";
  const password = "*******";


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

        <div className={styles.edit} isClicked={edit}  onClick={() => {toggleEdit(); }}> <LiaEdit size={25} color={editColor}/></div>

     


        <FormAreas isClicked={edit} label="Ad:" input={name}/>
        <FormAreas isClicked={edit} label="Soyad:" input={last_name}/>
        <FormAreas isClicked={edit} label="Akademik Ünvan:" input={academic_role}/>
        <FormAreas isClicked={edit} label="Cinsiyet:" input={gender}/>
        <FormAreas isClicked={edit} label="E-mail Adres:" input={e_mail}/>
        <FormAreas isClicked={edit} label="Telefon Numarası:" input={phone_number}/>
        <FormAreas isClicked={edit} label="Kullanıcı Adı:" input={user_name}/>
        <FormAreas isClicked={edit} label="Şifre:" input={password}/>

       

        <FormAreasDefault isClicked={def} label="Ad:" input={name}/>
        <FormAreasDefault isClicked={def} label="Soyad:" input={last_name}/>
        <FormAreasDefault isClicked={def} label="Akademik Ünvan:" input={academic_role}/>
        <FormAreasDefault isClicked={def} label="Cinsiyet:" input={gender}/>
        <FormAreasDefault isClicked={def} label="E-mail Adres:" input={e_mail}/>
        <FormAreasDefault isClicked={def} label="Telefon Numarası:" input={phone_number}/>
        <FormAreasDefault isClicked={def} label="Kullanıcı Adı:" input={user_name}/>
        <FormAreasDefault isClicked={def} label="Şifre:" input={password}/>

        
        <KaydetButton isClicked={edit} onClick={(event) => {toggleEdit(event); }}/> 
        
      </form>
    </div>
    
    </div>
  )
}

export default UserInfoForm
