import React from 'react'
import { useParams } from "react-router-dom"
import { songs } from '../assets/utils'

const Listen = ({isDesktop}) => {

  const { songId } = useParams()
  const song = songs.filter(s => s.id === parseInt(songId))[0]

  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={song.image} className={`${isDesktop? "w-1/4 mt-5" : "w-2/4 mt-20"} `} alt="Single"/>
      <h1 className='mt-5 text-5xl text-white'>{song.title}</h1>
      <h1 className='mt-5 text-xl text-white'>{song.description}</h1>
      <h1 className='mt-5 text-xs text-red'>{song.category}</h1>
    </div>
  )
}

export default Listen