import React from 'react'
import { BsPlayFill } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Song = ({ song }) => {

  return (
    <div className='flex items-center justify-around'>
        <img src={`${song.image}`} className="w-10" alt="Song"/>
        <p className='w-full pl-5 font-semibold text-white' >{song.title}</p>
        <p className='w-full text-white'>{song.description}</p>
        <Link to={`/song/${song.id}`}>
            <BsPlayFill color="#FFF" size={50} className="ml-5" />
        </Link>
    </div>
  )
}

export default Song