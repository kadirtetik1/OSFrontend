import React from 'react'
import styles from './StudentsHome.module.css'
import CourseCard from '../../components/CourseCard';
import StuNavbar from './components/StuNavbar';
import StuHero from './components/StuHero';
import TeacherInfo from '../../components/TeacherInfo';


const StudentsHome = () => {
  return (
    <div>
      
      <StuNavbar/>
      <StuHero/>
      <div style={{display:"flex"}}>

      <CourseCard unvan="Prof.Dr." name="Ahmet Yılmaz" teacherImage="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
      courseImage="https://web.harran.edu.tr/assets/uploads/sites/57/slides/ef38464dd6a24fa7bb675710d466fb31.jpg"
      departmentName="Makine Mühendisliği" period="Güz" courseTitle="Statik Ve Mukavemet" courseCode="ME-211" takenKont="39" openKont="40"
      />

       <CourseCard unvan="Dr." name="Mehmet Yılmaz" teacherImage="https://media.istockphoto.com/id/480286744/photo/portrait-of-a-german-businessman-with-beard.jpg?s=612x612&w=0&k=20&c=PAi9oWMV2LLkbPM14nvpWOAZUk_kb6DXvpQ4ZwyJvjs="
      courseImage="https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg"
      departmentName="Elektrik-Elektronik Mühendisliği" period="Bahar" courseTitle="Elektromanyetizma" courseCode="EE-211" takenKont="21" openKont="60"
      />

     

      </div>
      
    </div>
  )
}

export default StudentsHome
