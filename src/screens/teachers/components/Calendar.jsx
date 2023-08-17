import React from 'react'
import TeacherNavbar from './TeacherNavbar'
import styles from './Calendar.module.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import momentPlugin from '@fullcalendar/moment';

import { Scheduler } from "@aldabil/react-scheduler";

const Calendar = () => {
  let i =0;
  const handleDateClick = (arg) => { // bind with an arrow function
    // alert(arg.dateStr);
    i++;
    console.log(i); //seçtiği haftalık ders sayısını db'den çek, yeni alan seçtikçe arttırarak kısıtla, eşit değilse gönder butonunu aktif etme.

  }
  return (
  <div>

       <TeacherNavbar/>

      {/* <FullCalendar
      weekday="long"
        plugins={[ dayGridPlugin, interactionPlugin, momentPlugin  ]}
        
    initialView= 'dayGridWeek'
    businessHours= {true}
    dateClick={handleDateClick}

    titleFormat="dddd, MMMM D, YYYY"
    
    />  */}


    <div className={styles.container}>

    
    <div className={styles.calendarContainer}>

    
     <Scheduler
       view="week"
       navigation="false"
       disableViewNavigator="false"
       hourFormat="24"
       events={[
         {
           event_id: 1,
           title: "Makine Elemanları",
           start: new Date("2023/8/19 10:00"),
           end: new Date("2023/8/19 13:00"),
           
           
         },
         {
           event_id: 2,
           title: "Makine Elemanları",
           start: new Date("2023/8/17 09:00"),
           end: new Date("2023/8/17 11:00"),
         },
       ]}

      
       stickyNavitation="true"

       week={
        {
          weekDays: [0, 1, 2, 3, 4, 5], 
          weekStartOn: 1,   //monday 
          startHour: 9, 
          endHour: 18,
          step: 60,
          navigation: true,
          disableGoToDay: false
          }
       }
     /> 

</div>

</div>



      
  </div>
  )
}

export default Calendar
