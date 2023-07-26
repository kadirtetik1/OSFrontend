import React from 'react'
import { Link } from 'react-router-dom';
import styles from './StuNavbar.module.css'
import {motion} from "framer-motion";
import { BiUser, BiSearchAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";


const StuNavbar = () => {
  return (
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
                <Link style={{ textDecoration: 'none' }} to="/studentsHome">
                <motion.div className={styles.navItem} whileHover={{scale:1.1}}>
                    Anasayfa
                </motion.div>
                </Link>
            </li>

            <li>
                <Link style={{ textDecoration: 'none' }} to="/studentsHome">
                <motion.div className={styles.navItem} whileHover={{scale:1.1}}>
                    Fakülteler
                </motion.div>
                </Link>
            </li>

            <li>
                <Link style={{ textDecoration: 'none' }} to="/studentsHome">
                <motion.div className={styles.navItem} whileHover={{scale:1.1}}>
                    Açılacak Dersler
                </motion.div>
                </Link>
            </li>

            <li>
                <Link style={{ textDecoration: 'none' }} to="/studentsHome">
                <motion.div className={styles.navItem} whileHover={{scale:1.1}}>
                    Ders İşlemleri
                </motion.div>
                </Link>
            </li>

            <li>
                <Link style={{ textDecoration: 'none' }} to="/studentsHome">
                <motion.div className={styles.navItem} whileHover={{scale:1.1}}>
                    <div className={styles.userIcon}>
                    <BiUser style={{color:"black"}} size={25}/>
                    </div>
                
                </motion.div>
                </Link>
            </li>



        </ul>
    </div>
  )
}

export default StuNavbar
