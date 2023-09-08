import React, { useEffect, useState } from 'react'
import TeacherNavbar from './components/TeacherNavbar';
import CourseCard from '../../components/CourseCard';
import style from './CreateCourse.module.css';
import styles from './components/CreateInput.module.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { createAPIEndpoint, EndPoints } from '../../api';
import {ToastContainer, toast } from 'react-toastify';




const CreateCourse = (props) => {


  const[department, setDepartment] = useState("");
  const departmentChange = (event) => {setDepartment(event);} 

  const [selectedCourse, setSelectedCourse] = useState(null);
  const location = useLocation();
  
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

  const selectedCourseId = localStorage.getItem("SelectedCourse"); 

      useEffect(() => {


    if(selectedCourseId!=undefined && selectedCourseId!=null){  
     
      createAPIEndpoint(EndPoints.course).getById(selectedCourseId).then((res) =>{

        setSelectedCourse(res);
        
      }).catch(err => console.log(err));

    }

    }, []);


    useEffect(() => {
      // Sayfa değiştiğinde localStorage'daki veriyi silmek
      window.localStorage.removeItem('SelectedCourse');
    }, [navigate]);

    console.log(selectedCourse?.data)
    


    useEffect(() => {
      if (selectedCourse) {
        updatePage(); 
        
      }
    }, [selectedCourse]);


    const dataSelected = {

       department:"",
       faculty:"",
       semester:"",
       course_name:"",
       course_code:"",
       capacity:"",
       weeklyHours:"",
       days:"",
       endHours:"",
       startHours:"",
    }

    const updatePage = () => {
      toast.success(`"${selectedCourse.data.course_name}" Dersinizi Güncelleyebilirsiniz!`, {
          position: toast.POSITION.BOTTOM_RIGHT
      });
    };

    if(selectedCourse){    // Güncelleme kısmı için yapılan fonksiyonlar.


      dataSelected.department=selectedCourse.data.department;
      dataSelected.faculty=selectedCourse.data.faculty;
      dataSelected.semester=selectedCourse.data.semester;
      dataSelected.course_name=selectedCourse.data.course_name;
      dataSelected.course_code=selectedCourse.data.course_code;
      dataSelected.capacity=selectedCourse.data.capacity;
      dataSelected.weeklyHours=selectedCourse.data.weeklyHours;
      dataSelected.days=selectedCourse.data.days;
      dataSelected.endHours=selectedCourse.data.endHours;
      dataSelected.startHours=selectedCourse.data.startHours;

    }


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

const createCourse = () => {    //   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Eğer, SelectedCourse dolu geldiyse güncelleme fnc. çalıştır, yoksa yeni ders oluştur.

    
  createAPIEndpoint(EndPoints.course).post(data).then((res) =>{

    console.log(res);

    if(res?.status===200){
      successMessage();
      setTimeout(() =>  successMessage2(), 1500);
      setTimeout(() => navigate("/select-date"), 3500); 
      
    }
    
    localStorage.setItem("CourseId", res.data.id);
    localStorage.setItem("WeeklyHours", res.data.weeklyHours);
    localStorage.setItem("CourseName", res.data.course_name);
 

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
  <input className={styles.formInput} defaultValue={dataSelected.department} type="text" onChange={(e) => departmentChange(e.target.value)}/>
  </div>

  <div className={styles.labelInput}>
  <label className={styles.formLabel} htmlFor="formInput" >Ders Adı:</label>
  <input className={styles.formInput} defaultValue={dataSelected.course_name} type="text" onChange={(e) => courseNameChange(e.target.value)}/>
  </div>

  <div className={styles.labelInput}>
  <label className={styles.formLabel} htmlFor="formInput" >Ders Kodu:</label>
  <input className={styles.formInput} defaultValue={dataSelected.course_code} type="text" onChange={(e) => courseCodeChange(e.target.value)}/>
  </div>

  <div className={styles.labelInput}>
  <label className={styles.formLabel} htmlFor="formInput" >Kontenjan:</label>
  <input className={styles.formInput} defaultValue={dataSelected.capacity} type="number" onChange={(e) => capacityChange(e.target.value)}/>
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


  <div className={styles.buttonContainer}>
  <div className={styles.button} onClick={ () => {createCourse(); console.log(data); }}>Kaydet Ve Gün Belirle</div>
  </div>
  

</form>

</div>


{/* CreateInput bitiş... */}

      </div>  

      <div className={style.infos}>
        <h2></h2>
     <CourseCard unvan={data.unvan} teacherImage={data.teacherImage} name={data.name} courseImage={data.courseImage} departmentName={department} period={semester} courseTitle={courseName} courseCode={code} takenKont={data.takenCapacity} openKont={capacity} button="Derse Kayıt Ol" clickFuntion={ () => {}} />     
     </div>

     </div>
     </div>
     <ToastContainer/>
    </div>
  )
}

export default CreateCourse
