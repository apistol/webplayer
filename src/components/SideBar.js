import React from 'react'
import profileImage from "../assets/profile.png"
import { BsThreeDots } from "react-icons/bs";
import { menuCollections, menuImportedAlbums, menuNav, menuPlaylists } from '../assets/utils';
import MenuItem from './menu/MenuItem';


const SideBar = () => {
  return (
    <div className='w-full h-screen overflow-scroll bg-gray sidebar'>
      <div className='flex items-center justify-between p-5 sidebar_top'>
        <img className="inline-block w-6 h-6 rounded-full" src={profileImage} alt="Profile image" />
        <BsThreeDots color='#FFF' />
      </div>
      <div>

        <div className='sidebar_menu'>
          {menuNav.map(menuItem => <MenuItem name={menuItem} />)}
        </div>
        <div className='mt-4 sidebar_collectio'>
          <p className='pl-3 text-grayer'>MY COLLECTION</p>
          {menuCollections.map(collection => <MenuItem name={collection.name} />)}
        </div>
        <div className='mt-4 sidebar_playlist'>
          <p className='pl-3 text-grayer'>MY PLAYLISTS</p>
          {menuPlaylists.map(playlist => <MenuItem name={playlist} />)}
        </div>
        <div className='mt-4 sidebar_importedAlbu'>
          <p className='pl-3 text-grayer'>IMPORTED ALBUMS</p>
          {menuImportedAlbums.map(album => <MenuItem name={album} />)}
        </div>
      </div>
    </div>
  )
}

export default SideBar