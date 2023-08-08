import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './StuNavbar.module.css'
import {motion} from "framer-motion";
import { BiUser} from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import UserInfos from '../../../components/UserInfos';



const StuNavbar = () => {

    const [userInfos, setUserInfos] = useState(false);

    function toggleUserInfos (){
        setUserInfos(!userInfos);
       
     }

  return (
    <div>

    
    <div className={styles.container}>

        <Link style={{ textDecoration: 'none' }} className={styles.logo} to="/studentsHome"><h1>Logo</h1></Link>

        <div className={styles.searchContainer}>
        <input className={styles.searchInput} type="text" placeholder='Ders Ara...'/>
        <div className={styles.searchIcon}>
        <FiSearch style={{color:"black"}} size={20}/>
        </div>
        
        </div>

        <ul className={styles.navItemsRight}>

            <li>
                <Link style={{ textDecoration: 'none' }} to="/studentsHome">  {/* teacher =>   to="/teachersHome" ÇÖZ!  */}
                <motion.div className={styles.navItem} whileHover={{scale:1.1}}>
                    Anasayfa
                </motion.div>
                </Link>
            </li>

            <li>
                <Link style={{ textDecoration: 'none' }} >  {/* to="/dersprogramı" */}
                <motion.div className={styles.navItem} whileHover={{scale:1.1}}>
                    Ders Programı
                </motion.div>
                </Link>
            </li>

            <li>
                <Link style={{ textDecoration: 'none' }} >  {/* to="/dersislemleri" */}
                <motion.div className={styles.navItem} whileHover={{scale:1.1}}>
                    Ders İşlemleri
                </motion.div>
                </Link>
            </li>

            <li>
                <Link style={{ textDecoration: 'none' }}>
                <motion.div className={styles.navItem} whileHover={{scale:1.1}}>
                    <div onClick={toggleUserInfos} className={styles.userIcon}>
                    <BiUser style={{color:"black"}} size={25}/>
                    </div>
                
                </motion.div>
                </Link>
            </li>


        </ul>
        </div>
        <UserInfos isclicked={userInfos} closeInfo={setUserInfos}/>
    </div>
  )
}

export default StuNavbar
