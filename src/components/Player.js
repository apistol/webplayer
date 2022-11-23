import { isEditable } from '@testing-library/user-event/dist/utils'
import React from 'react'
import ExtraOptions from './player/ExtraOptions'
import PlayerMenu from './player/PlayerMenu'
import Title from './player/Title'

const Player = ({ isDesktop}) => {
  return (
    <div className={`fixed bottom-0 left-0 flex ${isDesktop ? "justify-between" : "justify-center"} w-full p-5 bg-gray`}>
      {isDesktop && <Title/>}
      <PlayerMenu isDesktop={isDesktop}/>
      {isDesktop && <ExtraOptions/>}
    </div>
  )
}

export default Player