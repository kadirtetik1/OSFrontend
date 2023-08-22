import React, { useState } from 'react'
import TeacherNavbar from './TeacherNavbar'
import styles from './SelectDate.module.css'
import {FiX} from "react-icons/fi";

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
    const [events, setEvents] = useState([]);
    const [eventTitle, setEventTitle] = useState('');
    const [CourseTitle, setCourseTitle] = useState('Makine Elemanları');
    const [showAlert, setShowAlert] = React.useState(false);

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
  
        }
  
        else{

          if(events.length>0){   // 2 tane ders var ama 3. aşıyorsa seçilebilirliği kapatıyor. DÜZELT !!!

          FullOfHours();
          setSelectable(false);
          closeContainer();


          }

          else{
            setSelectedSlot(null);
            OutOfHours();

          }
          
        }

      

    }




    // if(availableHours>=takenHours){

    // }

    // else{
    //   alert("123")
    // }

  };



  const handleEventClick = (info) => {
    if (window.confirm("Ders kaydını silmek istediğinizden emin misiniz?")) {
      const updatedEvents = events.filter(event => event.id !== info.event.id);
      setEvents(updatedEvents);
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
        editable={true} // Kaydırılabilir yapıyor.
        selectable={selectable} // Seçilebilirliği aktif hale getiriyoruz
        select={handleSelectSlot} // Slot seçildiğinde tetiklenecek işlev
        selectOverlap={false} // Seçilen slotun başka etkinliklerle çakışmasını engelliyoruz

        height={698} // Takvimin yüksekliğini belirli bir piksel değeri olarak ayarlayın

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

      <div className={styles.ButtonContainer}>
        <div className={styles.SendButton}>Gönder</div>
      </div>


      <ToastContainer/>

  </div>
</div>
</div>
  )
  
}



export default SelectDate
