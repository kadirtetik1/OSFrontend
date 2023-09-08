import React, { useEffect, useState } from 'react'
import styles from './AddCourse.module.css'
import style from './StudentsHome.module.css'
import StuNavbar from './components/StuNavbar';
import CourseCard from '../../components/CourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { createAPIEndpoint, EndPoints } from '../../api';
import { BsBasket } from 'react-icons/bs';
import AddCourseList from './components/AddCourseList';
import { useForceUpdate } from 'framer-motion';

const AddCourse = () => {

  let faculty1 = localStorage.getItem("department");// öğrencinin fakültesi
  const [data, setData] = useState(null);
  const [badge, setBadge] = useState(0);
  const faculties = ["Mühendislik", "Hukuk", "Sağlık", "İşletme", "Fen-Edebiyat"];
  const muhendislik =[];
  const hukuk =[];
  const saglik =[];
  const isletme =[];
  const fenedebiyat =[];
  let showCourses = [];
  let listCourses = [];

  let [listOfCourses, setListOfCourses] = useState([]);

  let unvan = "Prof.Dr"
  let teacherImage = "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
  let courseImage = "";
  let studentCount = 0;

useEffect(() => {

  createAPIEndpoint(EndPoints.course_teacher).get().then((res) =>{   // Ders tablosunun içerisinde dersi veren öğretmen bilgileri de getirilsin diye yazıldı.
    setData(res);
  
  }).catch(err => console.log(err));

},[])


const incrementCount = () => {

  setBadge(badge + 1);
};


  // const addCoursesToList = () => {

  //   listCourses.push(
  //     <AddCourseList count="1" courseCode="CMPE-226" courseName="Veri Yapıları"/>
  //   );
  
  //   console.log(listCourses);
  //   incrementCount();  // listCourses içine pushlamasını engelliyor olabilir diika et! Consoleda boyutu artmıyor.

  //   console.log(listCourses.length)
    
  // }


  const addCoursesToList = (code, name) => {

    listCourses.push(
      <AddCourseList count={badge+1} courseCode={code} courseName={name}/>
    );

    setListOfCourses([...listOfCourses, listCourses]); 
    incrementCount(); 
    
  }


// --- Derslerin dizilere atılma işlemi başlangıç ---

for(let i =0; data?.data.length>i;i++){

  if(data?.data[i].facultyName===faculties[0]){

    courseImage = "https://web.harran.edu.tr/assets/uploads/sites/57/slides/ef38464dd6a24fa7bb675710d466fb31.jpg"
    
    muhendislik.push(
  
      <SwiperSlide style={{paddingBottom:"30px"}}>
    
      <div className={style.cardContainer}>
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} clickFuntion={ () => { addCoursesToList(data.data[i].courseCode, data.data[i].courseName); }}
      courseImage={courseImage} button="Dersi Sepete Ekle" navigate="add-course" selectedCourseId={data.data[i].courseId}
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
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} clickFuntion={ () => {addCoursesToList();}}
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
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} clickFuntion={ () => {addCoursesToList();}}
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
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} clickFuntion={ () => {addCoursesToList();}}
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
    
      <CourseCard unvan={unvan} name={data.data[i].teacherName} teacherImage={teacherImage} clickFuntion={ () => {addCoursesToList();}}
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
    <div className={styles.container}>
        <StuNavbar/>

        <div className={styles.container2}>

        <div className={styles.courseTable}>

          <div className={styles.courseContainer}>

            <div className={styles.courseInfos}>

            </div>

            <div className={styles.selectableCourses}>

            <div style={{display:"flex"}}>
<div className={style.swiperContainerOuter}>
<div className={style.swiperContainer}>

<div className={styles.facultyTitle}>Seçebileceğiniz Diğer Dersler</div>

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

          <div className={styles.courseBasket1}>

            <div className={styles.courseBasket2} ></div>

          <div className={styles.courseBasket}>

            <div className={styles.title}>
            <div className={styles.basketTitle}>Ders Sepetiniz</div>

            <div className={styles.basketIconBadge}>

            <div className={styles.badgeBasket}>{badge}</div>
            <BsBasket color="black" size={20} />

            </div>
            
            </div>

            <div className={styles.basketContainer}>

              <div className={styles.courseList}>


                {/* <AddCourseList count="1" courseCode="CMPE-226" courseName="Veri Yapıları"/>
                <AddCourseList count="2" courseCode="CMPE-341" courseName="Veri Tabanı Yönetimi"/>
                <AddCourseList count="3" courseCode="CMPE-538" courseName="Bilgisayar Ağları"/> */}

                {listOfCourses}
               
               
              </div>

              <div className={styles.basketButtonContainer}>
                <button className={styles.basketButton}>Ders Sepetini Onayla</button>
              </div>

            </div>
          
            
          </div>

          </div>

        </div>

        </div>

        
      
    </div>
  )
}

export default AddCourse
