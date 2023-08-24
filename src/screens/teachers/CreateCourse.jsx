import React, { useState } from 'react'
import TeacherNavbar from './components/TeacherNavbar';
import CourseCard from '../../components/CourseCard';
import style from './CreateCourse.module.css';
import CreateInput from './components/CreateInput';
import styles from './components/CreateInput.module.css'
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion";
import { createAPIEndpoint, EndPoints } from '../../api';
import {ToastContainer, toast } from 'react-toastify';

const CreateCourse = (props) => {

  const[department, setDepartment] = useState("");
  const departmentChange = (event) => {setDepartment(event);} 
  
  const[faculty, setFaculty] = useState("");
  const facultyChange = (event) => {setFaculty(event);} 

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

  const navigate = useNavigate();

  let taken_capacity=0;  // Başta 0 gönder, daha sonra db'ye bağlayıp öğrenci kayıt oldukça arttır.

const data = {
  unvan:"Prof.Dr.",
  name:localStorage.getItem("fullname"),
  teacherImage:"https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
  courseImage:"https://www.ceyrekmuhendis.com/wp-content/uploads/2020/09/one-cikan-1.jpg",
  takenCapacity:taken_capacity,

  // Backendde karşılığı olanlar.
  department:department,
  faculty:faculty,
  semester:semester,
  course_name:courseName,
  course_code:code,
  capacity:capacity,
  weeklyHours:hours,
  teacherId:localStorage.getItem("Id"),

}

const kaydetError = () => {
  toast.error("Bir Hatayla Karşılaşıldı!", {
      position: toast.POSITION.BOTTOM_RIGHT
  });
};

const errorEmptyAreas = () => {
  toast.error("Lütfen Boş Bırakılan Alanları Doldurunuz!", {
      position: toast.POSITION.BOTTOM_RIGHT
  });
};

const successMessage = () => {
  toast.success("Dersiniz Başarıyla Oluşturuldu!", {
      position: toast.POSITION.BOTTOM_RIGHT
  });
};
  const successMessage2 = () => {
  toast.success("Ders Programı Sayfasına Yönlendiriliyorsunuz...", {
      position: toast.POSITION.BOTTOM_RIGHT
  });
};

const createCourse = () => {

    
  createAPIEndpoint(EndPoints.course).post(data).then((res) =>{

    console.log(res);

    if(res?.status===200){
      successMessage();
      setTimeout(() =>  successMessage2(), 1500);
      setTimeout(() => navigate("/select-date"), 3500);   //SelectDate'e gönderirken bilgileri güncellemen gerektiği için props üzerinden componente göndermelisin. Hepsini locale atmak yerine redux kullanman gerekebilir.
      
    }
    
    // console.log(res); 
    // console.log(res.data); 

    
    localStorage.setItem("CourseId", res.data.id);
    localStorage.setItem("WeeklyHours", res.data.weeklyHours);
    localStorage.setItem("CourseName", res.data.course_name);
    // localStorage.setItem("CourseInfos", res.data);
  
  }).catch(err => {
    if(err.message==="Request failed with status code 400"){

      errorEmptyAreas();
    }
    else{
      kaydetError();
    }
  });

}

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

  <select className={styles.formSelect} onChange={(e) => facultyChange(e.target.value)}>

        <option value="" disabled selected>Fakültenizi Seçiniz</option>

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

        <option value="" disabled selected>Dönem Seçiniz</option>
        <option className={styles.options} value="Güz">Güz</option>
        <option className={styles.options} value="Bahar">Bahar</option>
  </select>
  </div>

  <div className={styles.labelInput}>
  <label className={styles.formLabel} htmlFor="formInput" >Haftalık Ders Saati:</label>

  <select className={styles.formSelect} onChange={(e) => hoursChange(e.target.value)}>

        <option value="" disabled selected>Ders Saati Sayısını Seçiniz</option>
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

  {/* <div className={styles.labelInput}>
  <label className={styles.formLabel} htmlFor="formInput" >Programdan Gün Seçiniz</label>
  <input className={styles.formInput} type="text" />
  </div> */}

  <div className={styles.buttonContainer}>
  <div className={styles.button} onClick={ () => {createCourse(); console.log(data); }}>Kaydet Ve Gün Belirle</div>
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
     <ToastContainer/>
    </div>
  )
}

export default CreateCourse
