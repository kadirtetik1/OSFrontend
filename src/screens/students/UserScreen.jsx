import React from 'react'
import UserInfoForm from '../../components/UserInfoForm';
import StuNavbar from './components/StuNavbar';
import styles from './UserScreen.module.css'

const UserScreen = () => {
  return (
    <div className={styles.container}>
      <StuNavbar/>
      <UserInfoForm />
    </div>
  )
}

export default UserScreen
