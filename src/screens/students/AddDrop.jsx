import React, { useEffect, useState } from 'react'
import StuNavbar from './components/StuNavbar';
import SweetAlert from 'react-bootstrap-sweetalert';
import styles from './AddDrop.module.css'
import { createAPIEndpoint, EndPoints } from '../../api';
import CourseCard from '../../components/CourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import style from '../teachers/MyCourses.module.css'
import styles1 from './StudentsHome.module.css'

const AddDrop = () => {

  const [showAlert, setShowAlert] = React.useState(false);
  const [faculty, setFaculty] = useState("");
  const [facultyTitle, setFacultyTitle] = useState("");
  const [facultyClassName, setFacultyClassName] = useState("");
  const [titleClassName, setTitleClassName] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  let faculty1 = localStorage.getItem("department");// öğrencinin fakültesi


  const facultyTitle1 = "Kayıtlı Olduğunuz Fakülte:";
  const facultyTitle2 = 'Bu İşlemi Yapabilmek İçin "Profil Bilgileri" Bölümünden Fakültenizi Belirlemelisiniz!';

  let unvan = "Prof.Dr"
  let teacherImage = "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
  let courseImage = "";
  let studentCount = 0;

  const faculties = ["Mühendislik", "Hukuk", "Sağlık", "İşletme", "Fen-Edebiyat"];
  const muhendislik =[];
  const hukuk =[];
  const saglik =[];
  const isletme =[];
  const fenedebiyat =[];
  let showCourses = [];

  useEffect(() => {

    setLoading(true);

    setTimeout(() => {   // Dersleri göstereceğin zaman kullan..
      setLoading(false)
    },1500)

  },[])

   useEffect(() => {
     setShowAlert(true);  
   }, []);

    const handleCloseAlert = () => {
      setShowAlert(false);  
    };


  useEffect(()=>{

   if(faculty1=="empty" || faculty1=="null" || faculty1==null || faculty1==undefined ){
     setFacultyTitle(facultyTitle2);
     setFaculty("");
     setFacultyClassName(styles.FacultyEmpty);
     setTitleClassName(styles.titleEmpty);
      }
  
     else{
      setFacultyTitle(facultyTitle1);
      setFaculty(faculty1);
      setFacultyClassName(styles.Faculty);
      setTitleClassName(styles.courseHoursTitle);
     }
    
},[])


useEffect(() => {

  createAPIEndpoint(EndPoints.course_teacher).get().then((res) =>{   // Ders tablosunun içerisinde dersi veren öğretmen bilgileri de getirilsin diye yazıldı.
    setData(res);
  
  }).catch(err => console.log(err));

},[])


// --- Derslerin dizilere atılma işlemi başlangıç ---

for(let i =0; data?.data.length>i;i++){

  if(data?.data[i].facultyName===faculties[0]){

    courseImage = "https://web.harran.edu.tr/assets/uploads/sites/57/slides/ef38464dd6a24fa7bb675710d466fb31.jpg"
    
    muhendislik.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage}
      courseImage={courseImage} button="Dersi Sepete Ekle" navigate="add-course" selectedCourseId={data.data[i].courseId} clickFuntion={ () => {}}
      departmentName={data.data[i].departmentName} period={data.data[i].semester} courseTitle={data.data[i].courseName} courseCode={data.data[i].courseCode} takenKont={studentCount} openKont={data.data[i].openCapacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
  }
  
  else if(data?.data[i].facultyName===faculties[1]){

    courseImage = "https://savun.av.tr/wp-content/uploads/2021/12/savun-hukuk-arka-plan.jpg"

    hukuk.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} clickFuntion={ () => {}}
      courseImage={courseImage} button="Dersi Sepete Ekle" navigate="add-course" selectedCourseId={data.data[i].courseId}
      departmentName={data.data[i].departmentName} period={data.data[i].semester} courseTitle={data.data[i].courseName} courseCode={data.data[i].courseCode} takenKont={studentCount} openKont={data.data[i].openCapacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
  }

  else if(data?.data[i].facultyName===faculties[2]){

    courseImage="https://tinaztepe.edu.tr/uploads/bolumler/cerrahi-tip-bilimleri.jpg"
   
    saglik.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} clickFuntion={ () => {}}
      courseImage={courseImage} button="Dersi Sepete Ekle" navigate="add-course" selectedCourseId={data.data[i].courseId}
      departmentName={data.data[i].departmentName} period={data.data[i].semester} courseTitle={data.data[i].courseName} courseCode={data.data[i].courseCode} takenKont={studentCount} openKont={data.data[i].openCapacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
  }

  else if(data?.data[i].facultyName===faculties[3]){

    courseImage="https://www.adrespatent.com.tr/wp-content/uploads/2022/09/bir-isletme-nasil-kurulur-isinizi-baslatmak-icin-10-adim.jpg"
   

    isletme.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} clickFuntion={ () => {}}
      courseImage={courseImage} button="Dersi Sepete Ekle" navigate="add-course" selectedCourseId={data.data[i].courseId}
      departmentName={data.data[i].departmentName} period={data.data[i].semester} courseTitle={data.data[i].courseName} courseCode={data.data[i].courseCode} takenKont={studentCount} openKont={data.data[i].openCapacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
    
  }

  else if(data?.data[i].facultyName===faculties[4]){
    
    courseImage="https://cdn.oggito.com/images/full/2017/6/edebiyatdenensey2.jpg"

    fenedebiyat.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} clickFuntion={ () => {}}
      courseImage={courseImage} button="Dersi Sepete Ekle" navigate="add-course" selectedCourseId={data.data[i].courseId}
      departmentName={data.data[i].departmentName} period={data.data[i].semester} courseTitle={data.data[i].courseName} courseCode={data.data[i].courseCode} takenKont={studentCount} openKont={data.data[i].openCapacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
  }

}

// --- Derslerin dizilere atılma işlemi bitiş ---


for(let i=0; 4>=i; i++){

  if(faculty1===faculties[0]){

    showCourses=muhendislik;
  }

  else if(faculty1===faculties[1]){

    showCourses=hukuk;
  }

  else if(faculty1===faculties[2]){

    showCourses=saglik;
  }

  else if(faculty1===faculties[3]){

    showCourses=isletme;
  }

  else if(faculty1===faculties[4]){

    showCourses=fenedebiyat;
  }

}


  return (
    <div>
        <StuNavbar/>
        
        <div>
      <SweetAlert
        show={showAlert}
        title="Bu Sayfadan Ders Seçimini İşlemlerinizi Yapabilirsiniz."
        onConfirm={handleCloseAlert}
        confirmBtnText="Tamam"
      >
        <p><span className={titleClassName}>{facultyTitle}</span> <span className={facultyClassName}>{faculty}</span></p>
      </SweetAlert>

      <div className={styles.container}>

      <div className={style.container}>
        <div className={style.containerSlider}>
      <div className={styles1.swiperContainerOuter}>
      <div className={styles1.swiperContainer}>
        
      <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }} >

 <div>{showCourses}</div>

</Swiper>

</div>
</div>
</div>
</div>

      </div>

    </div>
      
    </div>
  )
}

export default AddDrop
