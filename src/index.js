import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './components/Login';
import StudentsHome from './screens/students/StudentsHome';
import TeachersHome from './screens/teachers/TeachersHome';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="studentsHome" element={<StudentsHome />} />
        <Route path="teachersHome" element={<TeachersHome />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>

  
);



