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
    const [events, setEvents] = useState([]);
    const [eventTitle, setEventTitle] = useState('');
    
    // const [courseHour, setcourseHour] = useState('');  // !!!! Kalan ders saatini useState ile tutacaksın ama şu anda güncellenen bilgiyi alamıyor. ÇÖZ!!!
    const [CourseTitle, setCourseTitle] = useState('Makine Elemanları');
    const [showAlert, setShowAlert] = React.useState(false);

    const daysOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    let dayIndex = selectedSlot?.start.getDay(); // Haftanın gününü sayı olarak alıyor, Pazar = 0 gibi...
    let courseStartHour = selectedSlot?.start.getHours();
    let courseEndHour = selectedSlot?.end.getHours();

    let takenHours = courseEndHour - courseStartHour;
    let dayName = daysOfWeek[dayIndex];
    let courseHours = 7;
    let availableHours = courseHours - takenHours;
    

    const showHours = () => {
      toast.info(`Bu ders için toplam ${courseHours} saat seçebilirsiniz. `,{
          position: toast.POSITION.END_RIGHT
      });
    };

    useEffect(() => {
      showHours();
    }, []);

    const showAvailableHours = () => {
      toast.info(`Bu ders için ${availableHours} saat daha belirlemelisiniz. `,{
          position: toast.POSITION.END_RIGHT
      });
    };

    const handleSelectSlot = ({ start, end }) => {
      setSelectedSlot({ start, end });
      
    };
    

  const handleEventAdd = () => {  // Tıklayınca yeni etkinlik oluşturuyor.
    if (selectedSlot && CourseTitle) {
      const newEvent = {
        id: events.length + 1,
        title: CourseTitle,
        start: selectedSlot.start,
        end: selectedSlot.end,
      };

      setEvents([...events, newEvent]);
      setSelectedSlot(null);
      setEventTitle('');
      
      console.log(newEvent);
      console.log(selectedSlot);

      console.log('Başlangıç Saati:', courseStartHour);
      console.log('Bitiş Saati:', courseEndHour);
      console.log('Kullanılan Saat:', takenHours);

      console.log('Seçilen gün:', dayName);

      courseHours=availableHours;
      
      showAvailableHours();
      
    }
  };

  const handleEventClick = (info) => {
    if (window.confirm("Ders kaydını silmek istediğinizden emin misiniz?")) {
      const updatedEvents = events.filter(event => event.id !== info.event.id);
      setEvents(updatedEvents);
    }
  };

  const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr);
    
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
        <p>Takvim üzerinden gün ve saat seçimi yapabilirsiniz.</p>
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
        weekends={true} // Hafta sonlarını göstermiyoruz
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
        hiddenDays={[0]} // Pazar gününü gizliyoruz
        editable={true} 
        selectable={true} // Seçilebilirliği aktif hale getiriyoruz
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

          <h4 className={styles.titles}><span className={styles.titlesIn} >Ders Adı: </span> {CourseTitle}</h4>
          <h4 className={styles.titles}><span className={styles.titlesIn} >Başlangıç: </span> 
          {selectedSlot.start.toLocaleString()} 
          </h4>
          <h4 className={styles.titles}><span className={styles.titlesIn}>Bitiş: </span> 
          {selectedSlot.end.toLocaleString()} 
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
