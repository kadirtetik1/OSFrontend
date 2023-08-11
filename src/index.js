import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import StudentsHome from './screens/students/StudentsHome';
import TeachersHome from './screens/teachers/TeachersHome';
import UserScreen from './screens/UserScreen';
import ProtectedRouter from './ProtectedRouter';
import Login from './components/Login';
import styles from './components/Login.module.css'
import CourseSchedule from './screens/students/CourseSchedule';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
    <Routes>

        <Route element={<ProtectedRouter/>}>  
          <Route path="studentsHome" element={<StudentsHome />} />
          <Route path="teachersHome" element={<TeachersHome />} />
          <Route path="userInfos" element={<UserScreen />} />
          <Route path="schedule" element={<CourseSchedule />} />
        </Route>
      
        <Route index element={<App />} />
        <Route path="login" element={<Login isclicked="true" closeShow={styles.closeShow} container={styles.containerBg} />} />
        
       
        
    </Routes>
    </BrowserRouter>
  </>

  
);



