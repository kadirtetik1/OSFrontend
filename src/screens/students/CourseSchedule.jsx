import React, { useState } from 'react'
import StuNavbar from './components/StuNavbar';
import styles from './CourseSchedule.module.css'

import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';
import 'moment/locale/tr';
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick


const CourseSchedule = () => {

  moment.locale('tr');
  const daysOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

  const [events, setEvents] = useState([]);

  return (
    <div className={styles.container}>
        <StuNavbar/>

        <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        // dateClick={handleDateClick}
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
        // eventClick={handleEventClick}
        firstDay={1} // Pazartesi olarak ayarlıyoruz
        hiddenDays={[0,6]} // Ctesi ve Pazar gizlendi.
        editable={false} // Kaydırılabilir yapıyor.                       !!! Düzenlenen bilgileri çekemedin şimdlik false yaptın, DÜZELT!!
        // selectable={selectable} // Seçilebilirliği aktif hale getiriyor.
        // select={handleSelectSlot} // Slot seçildiğinde tetiklenecek işlev
        selectOverlap={false} // Seçilen slotun başka etkinliklerle çakışmasını engelliyor

        height={698}  

      />

      
    </div>
  )
}

export default CourseSchedule
