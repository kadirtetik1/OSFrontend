import React, { useState } from 'react'
import styles from './formAreas.module.css'
import { BiShow } from "react-icons/bi";
import { BsEyeSlash } from "react-icons/bs";

const FormAreas = (props) => {

  let show= "";
  let icon = <BiShow color='#6f6f6f'/>;
  const[showPass, setShow] = useState(false);
  const[iconToggle, setIcon] = useState(false);

  const showPassword = (value) => {
    setShow(!showPass);
  }

  const changeIcon = (value) => {
    setIcon(!iconToggle);
  }

  showPass ? show="text" : show="password" ;
  iconToggle ? icon=<BsEyeSlash color='#6f6f6f'/> : <BiShow color='#6f6f6f'/> ;

  return (

    <div className={styles.container1}>
<div className={styles.userContents1}>
        <label htmlFor="formInput" className={styles.formLabel1}>{props.label}</label>
        <input type={show} id="formInput" defaultValue={props.input}  className={styles.formInput1} onChange={props.onChange} readOnly ={props.readOnly}/>

        <div className={styles.passwordButton}  onClick={(event) => { showPassword(event); changeIcon(event); }}>{icon}</div>
        </div>
    </div>
  )

}

export default FormAreas
