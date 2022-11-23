import React from 'react'
import ExtraOptions from './player/ExtraOptions'
import PlayerMenu from './player/PlayerMenu'
import Title from './player/Title'

const Player = () => {
  return (
    <div className='fixed bottom-0 left-0 flex justify-between w-full p-5 bg-gray'>
      <Title/>
      <PlayerMenu/>
      <ExtraOptions/>
    </div>
  )
}

export default Player