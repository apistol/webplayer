import React from 'react'
import profileImage from "../assets/profile.png"
import { BsThreeDots } from "react-icons/bs";
import { menuCollections, menuImportedAlbums, menuNav, menuPlaylists } from '../assets/utils';
import MenuItem from './menu/MenuItem';


const SideBar = () => {
  return (
    <div className='w-2/12 h-screen bg-gray sidebar '>
      <div className='flex items-center justify-between p-5 sidebar_top'>
        <img className="inline-block w-6 h-6 rounded-full" src={profileImage} alt="Profile image" />
        <BsThreeDots color='#FFF'/>
      </div>
      <div className='sidebar_menu'>
        {menuNav.map( menuItem => <MenuItem name={menuItem}/>)}
      </div>
      <div className='sidebar_collection'>
        {menuCollections.map(collection  => <MenuItem name={collection.name}/> )}
      </div>
      <div className='sidebar_playlists'>
        {menuPlaylists.map(playlist  => <MenuItem name={playlist}/> )}
      </div>
      <div className='sidebar_importedAlbum'>
        {menuImportedAlbums.map(album  => <MenuItem name={album}/> )}
      </div>
    </div>
  )
}

export default SideBar