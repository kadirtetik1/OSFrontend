import React from 'react'
import style from './UserInfos.module.css'
import {FiX} from "react-icons/fi";


const userInfos = (props) => {
  return props.isClicked ? (
    <div className={style.background}>

        <div className={style.container} >



        <div className={style.closeContainer}>
            <div className={style.close}  onClick={() => props.closeInfo(false)}><FiX size={'2rem'}/></div>
        </div>


        </div>
      
    </div>
  )

  :""
}

export default userInfos
