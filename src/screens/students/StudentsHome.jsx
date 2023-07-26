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
      <CourseCard/>
      
      
    </div>
  )
}

export default StudentsHome
