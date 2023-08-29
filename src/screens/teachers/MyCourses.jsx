import React, { useEffect, useState } from 'react'
import TeacherNavbar from './components/TeacherNavbar';
import { createAPIEndpoint, EndPoints } from '../../api';
import style from './MyCourses.module.css'
import CourseCard from '../../components/CourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styles from '../students/StudentsHome.module.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const MyCourses = () => {  // Eksiklerin var DÜZELT!! Günleri istediğin gibi yazdıramadın.

  const teacherID = localStorage.getItem("Id");
  const [data, setData] = useState(null);
  

  useEffect(() => {

  createAPIEndpoint(EndPoints.course_byteacher).getByIdTeacher(teacherID).then(res =>{
  
  setData(res);



  }).catch(err => { 
    console.log(err);

  });

}, []);



let unvan = "Prof.Dr"
let name = localStorage.getItem("fullname")
let teacherImage = "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
let courseImage = "https://web.harran.edu.tr/assets/uploads/sites/57/slides/ef38464dd6a24fa7bb675710d466fb31.jpg"
let studentCount = 0;


const Courses = [];
// const days = ["Pazartesi", "Salı", "Çarşamba"];
// const startTime = ["10", "14", "15"];
// const endTime = ["13", "17", "18"];
const date =[]; {/* önce gün stringini "," ile split et, diziye at, boyutunu çek, for içinde çağır. */}



let dataDays = [];
let startTime = [];
let endTime = [];


// let i = dataDays.length;

// for(let k=0; dataDays[i].length<k; k++){
//   date.push(

//     )
// }

for(let i=0; data?.data.length>i ; i++){ 

dataDays[i] = data?.data[i].days?.split(',');
startTime[i] = data?.data[i].startHours?.split(',');
endTime[i] = data?.data[i].endHours?.split(',');


  Courses.push(
  
  <SwiperSlide style={{paddingBottom:"30px"}}>

  <div className={style.cardContainer}>

  <CourseCard unvan={unvan} name={name} teacherImage={teacherImage}
  courseImage={courseImage} button="Dersi Güncelle" navigate="create-course" selectedCourseId={data.data[i].id}
  departmentName={data.data[i].department} period={data.data[i].semester} courseTitle={data.data[i].course_name} courseCode={data.data[i].course_code} takenKont={studentCount} openKont={data.data[i].capacity}/>

   <div className={style.cardInfos}>

        <div className={style.dateInfos}>
        {date}


        </div>

  </div> 

  </div>
  
  </SwiperSlide>
  
  );
  
}

console.log(dataDays);
console.log(startTime);
console.log(endTime);


// for(let i=0; days.length>i ; i++){

//   date.push(
//       <div>{days[i]} {startTime[i]}:00 - {endTime[i]}:00</div>
//   )

// }

  return (
    <div>
      <TeacherNavbar/>
      
      <div className={style.container1}>
        
      <div className={style.container}>
        <div className={style.containerSlider}>

      <div className={styles.swiperContainerOuter}>
<div className={styles.swiperContainer}>

      <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      
    >

 <div>{Courses}</div>  {/* Swiper içerisinde dersler dizisini çağırıyorsun.  */}


        
</Swiper>

</div>

</div>

</div>


</div>

</div>

    </div>
  )
}

export default MyCourses
