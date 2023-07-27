import React from 'react'
import style from './UserInfos.module.css'
import {FiX} from "react-icons/fi";
import { BiUser} from "react-icons/bi";


const userInfos = (props) => {
  return props.isClicked ? (
    <div className={style.background}>

        <div className={style.container} >

        <div className={style.closeContainer}>

            <div className={style.userNameImage}>
                <div className={style.userImage}><BiUser style={{color:"black"}} size={25}/></div>
                <div className={style.names}>
                    <div className={style.userName}>kadir.tetik</div>
                    <div className={style.realName}>Kadir Tetik</div>
                </div>
            </div>
            <div className={style.close}  onClick={() => props.closeInfo(false)}><FiX size={'2rem'}/></div>
        </div>


        </div>
      
    </div>
  )

  :""
}

export default userInfos
