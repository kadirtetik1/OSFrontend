import React from 'react'
import styles from './UserInfoAreas.module.css'

const UserInfoAreas = (props) => {
  return (
    <div className={styles.container1}>

    <div className={styles.container}>
        <div className={styles.icon}>{props.icon}</div>   {/* <BiUser style={{color:"black"}} size={20}/>   Çağırdığın bölümde dahil et. */}
        <div className={styles.content}>{props.title}</div>

        </div>

        <div className={styles.bottomLine}></div>
    </div>
  )
}

export default UserInfoAreas
