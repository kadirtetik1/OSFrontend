import React, { useState } from 'react'
import TeacherNavbar from './TeacherNavbar'
import styles from './SelectDate.module.css'
import {FiX} from "react-icons/fi";
import { createAPIEndpoint, EndPoints } from '../../../api';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';
import 'moment/locale/tr';
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import SweetAlert from 'react-bootstrap-sweetalert';
import { useEffect } from 'react';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


moment.locale('tr');

  const SelectDate = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectable, setSelectable] = useState(true);
    const [disableButton, setDisableButton] = useState(true);
    const [events, setEvents] = useState([]);
    const [eventTitle, setEventTitle] = useState('');
    const [CourseTitle, setCourseTitle] = useState('Makine Elemanları');
    const [showAlert, setShowAlert] = React.useState(false);
    const [res, setRes] = useState(null);

    const daysOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    let dayIndex = selectedSlot?.start.getDay(); // Haftanın gününü sayı olarak alıyor, Pazar = 0 gibi...
    let courseStartHour = selectedSlot?.start.getHours();
    let courseEndHour = selectedSlot?.end.getHours();

    let takenHours = courseEndHour - courseStartHour;
    let dayName = daysOfWeek[dayIndex];
    let courseHours = localStorage.getItem("WeeklyHours");
    let courseName = localStorage.getItem("CourseName");
    const [availableHours, setAvailableHours] = useState(courseHours);

    const FullOfHours = () => {
      toast.info(`Toplam Ders Saati Sayısına Ulaştınız.`,{
          position: toast.POSITION.BOTTOM_RIGHT
      });
    };

    const OutOfHours = () => {
      toast.error(`Toplam Ders Saatinden Fazla Seçim Yaptınız.`,{
      position: toast.POSITION.BOTTOM_RIGHT
      });
    };


    const handleSelectSlot = ({ start, end }) => {
      setSelectedSlot({ start, end });
      
    };

    const courseId = localStorage.getItem("CourseId");      // ders bilgilerini çek, update yaparken tablodaki yerleri doldur.


    useEffect(() => {   // res değerine useState ile diışarıdan ulaşabilmek için yazıldı.
  
      createAPIEndpoint(EndPoints.course).getById(courseId).then((res) =>{
     
        // console.log(res.data); 
        setRes(res);
        
      }).catch(err => console.log(err));

    }, [])


    // console.log("Course Data:", res.data);
    

  const handleEventAdd = () => { // Ders Saati Ekle Butonu
    if (selectedSlot) {
      const newEvent = {
        id: events.length + 1,
        title: courseName,
        start: selectedSlot.start,
        end: selectedSlot.end,
      };

      if(availableHours - takenHours>=0 && availableHours>=takenHours){

        setEvents([...events, newEvent]);
        setSelectedSlot(null);
        setEventTitle('');
        
        setAvailableHours(availableHours - takenHours); 


        if(availableHours===takenHours){
          FullOfHours();
          setSelectable(false);
          setDisableButton(false);

         }
        }
  
        else{

            setSelectedSlot(null);
            OutOfHours();
        }
    }

  };

  const handleEventClick = (info) => {
    if (window.confirm("Ders kaydını silmek istediğinizden emin misiniz?")) {
      const updatedEvents = events.filter(event => event.id !== info.event.id);
      setEvents(updatedEvents);


      // events.id.remove();      !!! Şu an çalışmıyor, kontrol et tekrar bak!
    }
  };

  const handleDateClick = (arg) => { 
    // alert(arg.dateStr);
    
  }
  
  const closeContainer = () => { 
    setSelectedSlot(null);
    
  }

  useEffect(() => {
    setShowAlert(true);  // sweet alert fnc.ları
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);  // sweet alert fnc.ları
  };


  let days= "";
  let startHours= "";
  let endHours = "";
  let eventList= "";

  for(let i=0; events.length>i; i++){


    days= days + daysOfWeek[events[i].start.getDay()] + ",";
    startHours= startHours + events[i].start.getHours().toString() + ",";
    endHours= endHours + events[i].end.getHours().toString() + ",";


    // days.push(daysOfWeek[events[i].start.getDay()])
    // startHours.push(events[i].start.getHours().toString())
    // endHours.push(events[i].end.getHours().toString())
    
    // eventList.push(events[i]);

  };

  let data = {

    id:res?.data.id,
    faculty:res?.data.faculty,
    department:res?.data.department,
    course_name:res?.data.course_name,
    course_code:res?.data.course_code,
    capacity:res?.data.capacity,
    semester:res?.data.semester,
    weeklyHours:res?.data.weeklyHours,
    
    days:days,
    startHours:startHours,
    endHours:endHours

  };


  function updateCourse(){

    createAPIEndpoint(EndPoints.course).put(data).then(put =>{
      console.log(put);
  
      if(put?.status===200){
        
       alert("Başarılı!")
        
      }
  
    }).catch(err => { 
      console.log(err);
  
    });

  }


  return (

  
<div>

  <TeacherNavbar/>
<div className={styles.container} >

<div>
      {/* Sayfa içeriği */}
      <SweetAlert
        show={showAlert}
        title="Lütfen oluşturduğunuz dersin haftalık programını belirleyiniz."
        onConfirm={handleCloseAlert}
        confirmBtnText="Tamam"
    
      >
        <p><span className={styles.courseHoursTitle}>Bu ders için seçmeniz gereken ders saati sayısı:</span> <span className={styles.courseHours}>{courseHours}</span></p>
        {/* <p>Uzun tıklayarak aynı gün içinde çoklu seçim yapabilirsiniz.</p> */}
      </SweetAlert>
    </div>


  <div className={styles.calendarContainer}>

      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        initialView="timeGridWeek" // Haftalık görünümü ayarlıyoruz 
        locale="tr" // Türkçe dilini ayarlıyoruz
        slotMinTime="09:00:00" // Minimum saat aralığını belirliyoruz
        slotMaxTime="19:00:00" // Maksimum saat aralığını belirliyoruz
        slotDuration="01:00:00" // Saat aralığı sıklığını belirliyoruz
        weekends={true} 
        dayHeaderFormat={{ weekday: 'long' }} // Günlerin yanındaki tarihleri siler
        slotLabelFormat={{ hour: 'numeric', minute: '2-digit', omitZeroMinute: false }} // Başlıktaki tarih aralığını siler
        headerToolbar={{
          left: '',
          center: '',
          right: '',
        }}
        allDaySlot={false} 
        businessHours={{
          startTime: '09:00', // İş saatlerini belirliyoruz
          endTime: '19:00',   // İş saatlerini belirliyoruz
        }}
        events={events}
        eventClick={handleEventClick}
        firstDay={1} // Pazartesi olarak ayarlıyoruz
        hiddenDays={[0,6]} // Ctesi ve Pazar gizlendi.
        editable={false} // Kaydırılabilir yapıyor.                       !!! Düzenlenen bilgileri çekemedin şimdlik false yaptın, DÜZELT!!
        selectable={selectable} // Seçilebilirliği aktif hale getiriyor.
        select={handleSelectSlot} // Slot seçildiğinde tetiklenecek işlev
        selectOverlap={false} // Seçilen slotun başka etkinliklerle çakışmasını engelliyor

        height={698}  

      />

      {selectedSlot && (
        <div className={styles.SelectDateContainer}>

          <div className={styles.SelectDateContainer2}>

          <div className={styles.closeContainer}>
            <div className={styles.closeButton} onClick={closeContainer}><FiX size={'2rem'}/></div>
            </div>

          
          <div className={styles.ContentsContainer}>

          <h4 className={styles.titles}><span className={styles.titlesIn}>Ders Adı: </span><span className={styles.titlesOut}>{courseName}</span></h4>
          
          <h4 className={styles.titles}><span className={styles.titlesIn}>Başlangıç: </span><span className={styles.titlesOut}>{dayName} - <span></span>
          {courseStartHour}:00</span>
          </h4>
          <h4 className={styles.titles}><span className={styles.titlesIn}>Bitiş: </span> <span className={styles.titlesOut}>{dayName} - <span></span>
          {courseEndHour}:00</span>
          </h4>
          <button className={styles.AddButton} onClick={handleEventAdd}>Ders Saati Ekle</button>  
          </div>
          
          </div>

        </div>
      )}

      {disableButton ? <div className={styles.ButtonContainer}>
        <button disabled={disableButton} className={styles.SendButtonDisabled} onClick={() => {console.log(events); console.log(days);console.log(startHours); console.log(endHours); console.log(eventList)}}>Gönder</button>
      </div> : <div className={styles.ButtonContainer}>
        <button disabled={disableButton} className={styles.SendButton} onClick={() => {console.log(events); console.log(days);console.log(startHours); console.log(endHours); console.log(data); updateCourse();}}>Gönder</button>
      </div>

      }


      <ToastContainer/>

  </div>
</div>
</div>
  )
  
}



export default SelectDate
