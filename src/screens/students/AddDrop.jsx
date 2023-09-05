import React, { useEffect, useState } from 'react'
import StuNavbar from './components/StuNavbar';
import SweetAlert from 'react-bootstrap-sweetalert';
import styles from './AddDrop.module.css'

const AddDrop = () => {

  const [showAlert, setShowAlert] = React.useState(false);
  const [faculty, setFaculty] = useState("");
  const [facultyTitle, setFacultyTitle] = useState("");
  const [facultyClassName, setFacultyClassName] = useState("");
  const [titleClassName, setTitleClassName] = useState("");
  const [loading, setLoading] = useState(false);

  let faculty1 = localStorage.getItem("department");
  const facultyTitle1 = "Kayıtlı Olduğunuz Fakülte:";
  const facultyTitle2 = 'Bu İşlemi Yapabilmek İçin "Profil Bilgileri" Bölümünden Fakültenizi Belirlemelisiniz!';

  useEffect(() => {

    setLoading(true);

    setTimeout(() => {   // Dersleri göstereceğin zaman kullan..
      setLoading(false)
    },1500)

  },[])


    useEffect(() => {
      setShowAlert(true);  
    }, []);


  
    const handleCloseAlert = () => {
      setShowAlert(false);  
    };


    useEffect(()=>{

      if(faculty1=="empty" || faculty1=="null" || faculty1==null || faculty1==undefined ){
        setFacultyTitle(facultyTitle2);
        setFaculty("");
        setFacultyClassName(styles.FacultyEmpty);
        setTitleClassName(styles.titleEmpty);
         }
    
        else{
         setFacultyTitle(facultyTitle1);
         setFaculty(faculty1);
         setFacultyClassName(styles.Faculty);
         setTitleClassName(styles.courseHoursTitle);
        }
    
},[])

    

  return (
    <div>
        <StuNavbar/>
        
        <div>
      <SweetAlert
        show={showAlert}
        title="Bu Sayfadan Ders Seçimini İşlemlerinizi Yapabilirsiniz."
        onConfirm={handleCloseAlert}
        confirmBtnText="Tamam"
      >
        <p><span className={titleClassName}>{facultyTitle}</span> <span className={facultyClassName}>{faculty}</span></p>
      </SweetAlert>


      <div className={styles.container}>



      </div>


    </div>
      
    </div>
  )
}

export default AddDrop
