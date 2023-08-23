import React from 'react'
import UserInfoForm from '../../components/UserInfoForm';
import TeacherNavbar from './components/TeacherNavbar';
import styles from './UserScreen.module.css'

const UserScreenTeacher = () => {
  return (
    <div className={styles.container}>
      <TeacherNavbar/>
      <UserInfoForm/>
    </div>
  )
}

export default UserScreenTeacher
