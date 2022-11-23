import React from 'react'
import AllAlbums from '../components/AllAlbums'
import Player from '../components/Player'

const Dashboard = ({isDesktop}) => {
  return (
    <div>
      <AllAlbums isDesktop={isDesktop}/>
      <Player />
    </div>

  )
}

export default Dashboard