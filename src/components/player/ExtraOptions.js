import React from 'react'
import {AiOutlineSound, AiOutlineMenu} from "react-icons/ai"
import {MdOutlineScreenShare,MdOutlineKeyboardArrowUp} from "react-icons/md"

const ExtraOptions = () => {
  return (
    <div className='flex items-center justify-end'>
        <AiOutlineSound color="#FFF" size={32} className="ml-8"/>
        <MdOutlineScreenShare color="#FFF" size={32} className="ml-8"/>
        <AiOutlineMenu color="#FFF" size={32} className="ml-8"/>
        <MdOutlineKeyboardArrowUp color="#FFF" size={32} className="ml-8"/>
    </div>
  )
}

export default ExtraOptions