import React from 'react'
import profileImage from "../assets/profile.png"
import { BsThreeDots } from "react-icons/bs";
import { menuCollections, menuImportedAlbums, menuNav, menuPlaylists } from '../assets/utils';
import MenuItem from './menu/MenuItem';


const SideBar = ({isDesktop}) => {

  return (
    <div className='w-full bg-gray sidebar'>
      {isDesktop && <div className='flex items-center justify-between w-full p-5'>
        <img className="inline-block w-6 h-6 rounded-full" src={profileImage} alt="Profile image" />
        <BsThreeDots color='#FFF' size={22}/>
      </div>}
      <div className='h-screen overflow-scroll '>

        <div className='sidebar_menu'>
          {menuNav.map(menuItem => <MenuItem key={menuItem} name={menuItem} />)}
        </div>
        <div className='mt-4 sidebar_collectio'>
          <p className='pl-3 text-grayer'>MY COLLECTION</p>
          {menuCollections.map(collection => <MenuItem key={collection.name} name={collection.name} />)}
        </div>
        <div className='mt-4 sidebar_playlist'>
          <p className='pl-3 text-grayer'>MY PLAYLISTS</p>
          {menuPlaylists.map(playlist => <MenuItem key={playlist} name={playlist} />)}
        </div>
        <div className='mt-4 sidebar_importedAlbu'>
          <p className='pl-3 text-grayer'>IMPORTED ALBUMS</p>
          {menuImportedAlbums.map(album => <MenuItem key={album} name={album} />)}
        </div>
      </div>
    </div>
  )
}

export default SideBar