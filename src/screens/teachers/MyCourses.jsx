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


const MyCourses = () => {

  const teacherID = localStorage.getItem("Id");
  const [data, setData] = useState(null);
  


  useEffect(() => {

  createAPIEndpoint(EndPoints.course_byteacher).getByIdTeacher(teacherID).then(res =>{
  
    setData(res);



  }).catch(err => { 
    console.log(err);

  });

}, [])

let unvan = "Prof.Dr"
let name = localStorage.getItem("fullname")
let teacherImage = "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
let courseImage = "https://web.harran.edu.tr/assets/uploads/sites/57/slides/ef38464dd6a24fa7bb675710d466fb31.jpg"
let studentCount = 0;




const Courses = [];

for(let i=0; data?.data.length>i ; i++){


  Courses.push(<SwiperSlide style={{paddingBottom:"30px"}}>

  <CourseCard unvan={unvan} name={name} teacherImage={teacherImage}
  courseImage={courseImage} button="Dersi Güncelle" navigate="create-course" selectedCourseId={data.data[i].id}
  departmentName={data.data[i].department} period={data.data[i].semester} courseTitle={data.data[i].course_name} courseCode={data.data[i].course_code} takenKont={studentCount} openKont={data.data[i].capacity}/>
  
  </SwiperSlide>);

  
}



  return (
    <div>
      <TeacherNavbar/>
      

      <div className={style.container}>


        <div className={style.containerSlider}>

        


      <div className={styles.swiperContainerOuter}>
<div className={styles.swiperContainer}>

      <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
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
  )
}

export default MyCourses
