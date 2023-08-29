import React, { useEffect, useState } from 'react'
import StuNavbar from './components/StuNavbar';
import styles from './GivenCourses.module.css';
import { createAPIEndpoint, EndPoints } from '../../api';
import CourseCard from '../../components/CourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import style from '../teachers/MyCourses.module.css'
import styles1 from './StudentsHome.module.css'

const GivenCourses = () => {


  const faculties = ["Mühendislik", "Hukuk", "Sağlık", "İşletme", "Fen-Edebiyat"];
  const [data, setData] = useState(null);
  const muhendislik =[];
  const hukuk =[];
  const saglik =[];
  const isletme =[];
  const fenedebiyat =[];

  let unvan = "Prof.Dr"
  let name = localStorage.getItem("fullname")
  let teacherImage = "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
  let courseImage = "https://web.harran.edu.tr/assets/uploads/sites/57/slides/ef38464dd6a24fa7bb675710d466fb31.jpg"
  let studentCount = 0;


  useEffect(() => {

  createAPIEndpoint(EndPoints.course).get().then((res) =>{
    // console.log(res);
    setData(res);

  
  }).catch(err => console.log(err));

},[])

console.log(data?.data);

// let name = localStorage.getItem("fullname")    => dersten teacher id'yi çek ve her ders için sorgu gönderip isim soyisimi ver.


for(let i =0; data?.data.length>i;i++){

  let teacherId= "";

  if(data.data[i].faculty==faculties[0]){

    teacherId = data.data[i].teacherId;

    
      // createAPIEndpoint(EndPoints.teacher).getById(teacherID).then(res =>{
   
      // console.log(res)
   
      // }).catch(err => { 
      //   console.log(err);
   
      // });
   
    
    
    muhendislik.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={name} teacherImage={teacherImage}
      courseImage={courseImage} button="Derse Kayıt Ol" navigate="create-course" selectedCourseId={data.data[i].id}
      departmentName={data.data[i].department} period={data.data[i].semester} courseTitle={data.data[i].course_name} courseCode={data.data[i].course_code} takenKont={studentCount} openKont={data.data[i].capacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
    
  }

  else if(data.data[i].faculty==faculties[1]){

    teacherId = data.data[i].teacherId;
   

    hukuk.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={name} teacherImage={teacherImage}
      courseImage={courseImage} button="Derse Kayıt Ol" navigate="create-course" selectedCourseId={data.data[i].id}
      departmentName={data.data[i].department} period={data.data[i].semester} courseTitle={data.data[i].course_name} courseCode={data.data[i].course_code} takenKont={studentCount} openKont={data.data[i].capacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
    
  }

  else if(data.data[i].faculty==faculties[2]){

    teacherId = data.data[i].teacherId;
   

    saglik.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={name} teacherImage={teacherImage}
      courseImage={courseImage} button="Derse Kayıt Ol" navigate="create-course" selectedCourseId={data.data[i].id}
      departmentName={data.data[i].department} period={data.data[i].semester} courseTitle={data.data[i].course_name} courseCode={data.data[i].course_code} takenKont={studentCount} openKont={data.data[i].capacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
    
  }

  else if(data.data[i].faculty==faculties[3]){

    teacherId = data.data[i].teacherId;
   

    isletme.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={name} teacherImage={teacherImage}
      courseImage={courseImage} button="Derse Kayıt Ol" navigate="create-course" selectedCourseId={data.data[i].id}
      departmentName={data.data[i].department} period={data.data[i].semester} courseTitle={data.data[i].course_name} courseCode={data.data[i].course_code} takenKont={studentCount} openKont={data.data[i].capacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
    
  }

  else if(data.data[i].faculty==faculties[4]){

    teacherId = data.data[i].teacherId;
    
    
    fenedebiyat.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={name} teacherImage={teacherImage}
      courseImage={courseImage} button="Derse Kayıt Ol" navigate="create-course" selectedCourseId={data.data[i].id}
      departmentName={data.data[i].department} period={data.data[i].semester} courseTitle={data.data[i].course_name} courseCode={data.data[i].course_code} takenKont={studentCount} openKont={data.data[i].capacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
    
  }
  
  
}


  return (
    <div>
        <StuNavbar/>

          <div className={styles.marginTop}></div>
        <div className={styles.facultyTitle}>{faculties[0]} Fakültesi</div>
        <div className={styles.titleLine}></div>

<div className={styles.sliderBackGround}>


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

 <div>{muhendislik}</div>

</Swiper>

</div>
</div>
</div>
</div>

</div>
        

   

        <div className={styles.facultyTitle}>{faculties[1]} Fakültesi</div>
        <div className={styles.titleLine}></div>

<div className={styles.sliderBackGroundContainer}>


        <div className={styles.sliderBackGround}>

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

 <div>{hukuk}</div>

</Swiper>

</div>
</div>
</div>
</div>

</div>

</div>
        


        <div className={styles.facultyTitle}>{faculties[2]} Fakültesi</div>
        <div className={styles.titleLine}></div>
        
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

 <div>{saglik}</div>

</Swiper>

</div>
</div>
</div>
</div>
        
     

     

        <div className={styles.facultyTitle}>{faculties[3]} Fakültesi</div>
        <div className={styles.titleLine}></div>
        
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

 <div>{isletme}</div>

</Swiper>

</div>
</div>
</div>
</div>
        
    

        <div className={styles.facultyTitle}>{faculties[4]} Fakültesi</div>
        <div className={styles.titleLine}></div>
        
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

 <div>{fenedebiyat}</div>

</Swiper>

</div>
</div>
</div>
</div>
        
      
      
    </div>
  )
}

export default GivenCourses
