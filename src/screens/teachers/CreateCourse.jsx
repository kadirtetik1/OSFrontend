import React, { useState } from 'react'
import TeacherNavbar from './components/TeacherNavbar';
import CourseCard from '../../components/CourseCard';
import style from './CreateCourse.module.css';
import CreateInput from './components/CreateInput';
import styles from './components/CreateInput.module.css'

const CreateCourse = (props) => {

  const[department, setDepartment] = useState("");
  const departmentChange = (event) => {setDepartment(event);} 

  const[hours, setHours] = useState("");
  const hoursChange = (event) => {setHours(event);}
  
  const[code, setCode] = useState("");
  const courseCodeChange = (event) => {setCode(event);}
  
  const[courseName, setCourseName] = useState("");
  const courseNameChange = (event) => {setCourseName(event);}
  
  const[capacity, setCapacity] = useState("");
  const capacityChange = (event) => {setCapacity(event);}
  
  const[semester, setSemester] = useState("");
  const semesterChange = (event) => {setSemester(event);}


  // datada dolu gelen yerleri(user bilgileri vs) db'den çek yazdır, gerisini güncelle.

const data = {
  unvan:"Prof.Dr.",
  name:"Ahmet Çelik",
  teacherImage:"https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
  courseImage:"https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg",
  departmentName:department,
  period:semester,
  courseTitle:courseName,
  courseCode:code,
  takenCapacity:"0",
  freeCapacity:capacity,
  weeklyHours:hours,

}

console.log(data);

  return (
    <div>

        <TeacherNavbar/>
     <h1 className={style.pageTitle}></h1>
     
     <div  className={style.container}>

     
     <div className={style.createCourse}>

      <div className={style.infos}>
        <h2 className={style.title}></h2> 


{/* CreateInput Başlangıç.. Componentten veri çekemediğin için buraya aktardın. Redux'ı dahil edersen component olarak çağırarak yaz.. */}
  

  <div>
<form className={styles.formContainer}>
  <div className={styles.labelInput} >
  <label className={styles.formLabel} htmlFor="formInput" >Fakülte:</label>

  <select className={styles.formSelect} >
        
        <option className={styles.options} value="Mühendislik">Mühendislik</option>
        <option className={styles.options} value="Hukuk">Hukuk</option>
        <option className={styles.options} value="Sağlık">Sağlık</option>
        <option className={styles.options} value="İşletme">İşletme</option>
        <option className={styles.options} value="Fen-Edebiyat">Fen-Edebiyat</option>
  </select>
  </div>

  <div className={styles.labelInput}>
  <label className={styles.formLabel} htmlFor="formInput" >Bölüm:</label>
  <input className={styles.formInput} type="text" onChange={(e) => departmentChange(e.target.value)}/>
  </div>

  <div className={styles.labelInput}>
  <label className={styles.formLabel} htmlFor="formInput" >Ders Adı:</label>
  <input className={styles.formInput} type="text" onChange={(e) => courseNameChange(e.target.value)}/>
  </div>

  <div className={styles.labelInput}>
  <label className={styles.formLabel} htmlFor="formInput" >Ders Kodu:</label>
  <input className={styles.formInput} type="text" onChange={(e) => courseCodeChange(e.target.value)}/>
  </div>

  <div className={styles.labelInput}>
  <label className={styles.formLabel} htmlFor="formInput" >Kontenjan:</label>
  <input className={styles.formInput} type="number" onChange={(e) => capacityChange(e.target.value)}/>
  </div>

  <div className={styles.labelInput}>
  <label className={styles.formLabel} htmlFor="formInput" >Dönem:</label>
  <select className={styles.formSelect} onChange={(e) => semesterChange(e.target.value)}>
   
        <option className={styles.options} value="Güz">Güz</option>
        <option className={styles.options} value="Bahar">Bahar</option>
  </select>
  </div>

  <div className={styles.labelInput}>
  <label className={styles.formLabel} htmlFor="formInput" >Haftalık Saat Sayısı:</label>

  <select className={styles.formSelect}  onChange={(e) => hoursChange(e.target.value)}>
   
        <option className={styles.options} value="1">1</option>
        <option className={styles.options} value="2">2</option>
        <option className={styles.options} value="3">3</option>
        <option className={styles.options} value="4">4</option>
        <option className={styles.options} value="5">5</option>
        <option className={styles.options} value="6">6</option>
        <option className={styles.options} value="7">7</option>
        <option className={styles.options} value="8">8</option>
        <option className={styles.options} value="9">9</option>
        <option className={styles.options} value="10">10</option>
  </select>

  </div>

  <div className={styles.labelInput}>
  <label className={styles.formLabel} htmlFor="formInput" >Programdan Gün Seçiniz</label>
  <input className={styles.formInput} type="text" />
  </div>

  <div className={styles.buttonContainer}>
  <button className={styles.button}>Oluştur</button>
  </div>
  

</form>

</div>


{/* CreateInput bitiş... */}

      </div>  

      <div className={style.infos}>
        <h2></h2>
     <CourseCard unvan={data.unvan} teacherImage={data.teacherImage} name={data.name} courseImage={data.courseImage} departmentName={department} period={semester} courseTitle={courseName} courseCode={code} takenKont={data.takenCapacity} openKont={capacity} button="Derse Kayıt Ol" />     
     </div>

     </div>
     </div>
    </div>
  )
}

export default CreateCourse
