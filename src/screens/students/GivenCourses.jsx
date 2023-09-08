import React, { useEffect, useState } from 'react'
import StuNavbar from './components/StuNavbar';
import styles from './GivenCourses.module.css';
import { createAPIEndpoint, EndPoints } from '../../api';
import CourseCard from '../../components/CourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import style from '../teachers/MyCourses.module.css'
import styles1 from './StudentsHome.module.css'
import GridLoader from 'react-spinners/GridLoader'

const GivenCourses = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const faculties = ["Mühendislik", "Hukuk", "Sağlık", "İşletme", "Fen-Edebiyat"];
  const muhendislik =[];
  const hukuk =[];
  const saglik =[];
  const isletme =[];
  const fenedebiyat =[];

  let unvan = "Prof.Dr";
  let teacherImage = "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg";
  let courseImage = "";
  let studentCount = 0;


  useEffect(() => {

    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    },1000)

  },[])


  useEffect(() => {

  createAPIEndpoint(EndPoints.course_teacher).get().then((res) =>{   // Ders tablosunun içerisinde dersi veren öğretmen bilgileri de getirilsin diye yazıldı.
    setData(res);
  
  }).catch(err => console.log(err));

},[])

console.log(data?.data);


for(let i =0; data?.data.length>i;i++){


  if(data.data[i].facultyName==faculties[0]){

    courseImage = "https://web.harran.edu.tr/assets/uploads/sites/57/slides/ef38464dd6a24fa7bb675710d466fb31.jpg"

    
    muhendislik.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} disabled={true} clickFuntion={ () => {}}
      courseImage={courseImage} button="Derse Kayıt Ol" navigate="add-course" selectedCourseId={data.data[i].courseId}
      departmentName={data.data[i].departmentName} period={data.data[i].semester} courseTitle={data.data[i].courseName} courseCode={data.data[i].courseCode} takenKont={studentCount} openKont={data.data[i].openCapacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
    
  }

  else if(data.data[i].facultyName==faculties[1]){

    courseImage = "https://savun.av.tr/wp-content/uploads/2021/12/savun-hukuk-arka-plan.jpg"

    hukuk.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} disabled={true} clickFuntion={ () => {}}
      courseImage={courseImage} button="Derse Kayıt Ol" navigate="add-course" selectedCourseId={data.data[i].courseId}
      departmentName={data.data[i].departmentName} period={data.data[i].semester} courseTitle={data.data[i].courseName} courseCode={data.data[i].courseCode} takenKont={studentCount} openKont={data.data[i].openCapacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
    
  }

  else if(data.data[i].facultyName==faculties[2]){

    courseImage="https://tinaztepe.edu.tr/uploads/bolumler/cerrahi-tip-bilimleri.jpg"
   

    saglik.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} disabled={true} clickFuntion={ () => {}}
      courseImage={courseImage} button="Derse Kayıt Ol" navigate="add-course" selectedCourseId={data.data[i].courseId}
      departmentName={data.data[i].departmentName} period={data.data[i].semester} courseTitle={data.data[i].courseName} courseCode={data.data[i].courseCode} takenKont={studentCount} openKont={data.data[i].openCapacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
    
  }

  else if(data.data[i].facultyName==faculties[3]){

    courseImage="https://www.adrespatent.com.tr/wp-content/uploads/2022/09/bir-isletme-nasil-kurulur-isinizi-baslatmak-icin-10-adim.jpg"
   

    isletme.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} disabled={true} clickFuntion={ () => {}}
      courseImage={courseImage} button="Derse Kayıt Ol" navigate="add-course" selectedCourseId={data.data[i].courseId}
      departmentName={data.data[i].departmentName} period={data.data[i].semester} courseTitle={data.data[i].courseName} courseCode={data.data[i].courseCode} takenKont={studentCount} openKont={data.data[i].openCapacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
    
  }

  else if(data.data[i].facultyName==faculties[4]){
    
    courseImage="https://cdn.oggito.com/images/full/2017/6/edebiyatdenensey2.jpg"

    fenedebiyat.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} disabled={true} clickFuntion={ () => {}}
      courseImage={courseImage} button="Derse Kayıt Ol" navigate="add-course" selectedCourseId={data.data[i].courseId}
      departmentName={data.data[i].departmentName} period={data.data[i].semester} courseTitle={data.data[i].courseName} courseCode={data.data[i].courseCode} takenKont={studentCount} openKont={data.data[i].openCapacity}/>
    
      </div>
      
      </SwiperSlide>
      
      );
  }
}

  return (
    <div  className={styles.background} >
       
        <StuNavbar/>

        {
          loading ?
          <div className={styles.spinnerContainer}><GridLoader color="#0076fa" /></div>
          
          :

          <div>
        
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
       }
      
    </div>

    

    
  )
}

export default GivenCourses