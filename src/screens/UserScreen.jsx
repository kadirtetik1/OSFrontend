import React from 'react'
import UserInfoForm from '../components/UserInfoForm';
import StuNavbar from './students/components/StuNavbar';
import styles from './UserScreen.module.css'

const UserScreen = () => {
  return (
    <div className={styles.container}>
      <StuNavbar/>
      <UserInfoForm realName="Kadir Tetik" userName="kadir.tetik" academicRole="Öğrenci" image="https://img.freepik.com/premium-photo/young-student-boy-smiling-happily-with-hand-hip-confident-positive-proud-friendly-attitude_1194-309973.jpg" />
    </div>
  )
}

export default UserScreen
