import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import StudentsHome from './screens/students/StudentsHome';
import TeachersHome from './screens/teachers/TeachersHome';
import UserScreen from './screens/students/UserScreen';
import ProtectedRouter from './ProtectedRouter';
import Login from './components/Login';
import styles from './components/Login.module.css'
import CourseSchedule from './screens/students/CourseSchedule';
import CreateCourse from './screens/teachers/CreateCourse';
import MyCourses from './screens/teachers/MyCourses';
import AddDrop from './screens/students/AddDrop';
import TakenCourses from './screens/students/TakenCourses';
import GivenCourses from './screens/students/GivenCourses';
import SelectDate from './screens/teachers/components/SelectDate';
import UserInfosTeacher from './screens/teachers/UserScreenTeacher';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
    <Routes>

        <Route element={<ProtectedRouter/>}>  
          <Route path="studentsHome" element={<StudentsHome />} />
          <Route path="teachersHome" element={<TeachersHome />} />
          <Route path="studentInfos" element={<UserScreen />} />
          <Route path="teacherInfos" element={<UserInfosTeacher />} />
          <Route path="schedule" element={<CourseSchedule />} />
          <Route path="add-drop" element={<AddDrop />} />
          <Route path="given-courses" element={<GivenCourses />} />
          <Route path="taken-courses" element={<TakenCourses />} />
          <Route path="create-course" element={<CreateCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="select-date" element={<SelectDate />} />
        </Route>
      
        <Route index element={<App />} />
        <Route path="login" element={<Login isclicked="true" closeShow={styles.closeShow} container={styles.containerBg} />} />
        
       
        
    </Routes>
    </BrowserRouter>
  </>

  
);



