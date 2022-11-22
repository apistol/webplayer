import React from 'react'
import { albums } from '../assets/utils'

const AllAlbums = () => {
  return (
    <div>
        {albums.map(album => (<div>
            <img src={}/>
        </div>))}
    </div>
  )
}

export default AllAlbums