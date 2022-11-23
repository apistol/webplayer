import React from 'react'
import { useParams } from "react-router-dom"
import { songs } from '../assets/utils'

const Listen = () => {

  const { songId } = useParams()
  const song = songs.filter(s => s.id === parseInt(songId))[0]

  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={song.image} className="w-1/4" />
      <h1 className='mt-5 text-5xl text-white'>{song.title}</h1>
    </div>
  )
}

export default Listen