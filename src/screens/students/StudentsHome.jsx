import React from 'react'
import styles from './StudentsHome.module.css'
import CourseCard from '../../components/CourseCard';
import StuNavbar from './components/StuNavbar';
import StuHero from './components/StuHero';


const StudentsHome = () => {
  return (
    <div>
      
      <StuNavbar/>
      <StuHero/>
      <CourseCard unvan="Prof.Dr." name="Mehmet Yılmaz" teacherImage="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
      courseImage="https://web.harran.edu.tr/assets/uploads/sites/57/slides/ef38464dd6a24fa7bb675710d466fb31.jpg"
      departmentName="Makine Mühendisliği" period="Güz" courseTitle="Statik & Mukavemet" takenKont="39" openKont="40"
      />
      
      
    </div>
  )
}

export default StudentsHome
