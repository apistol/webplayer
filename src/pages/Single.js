import React from 'react'
import { useParams } from 'react-router-dom';
import { albums, songs } from '../assets/utils';
import Song from '../components/album/Song';

const Single = ({ isDesktop }) => {

  let { id } = useParams();
  const album = albums.filter(a => a.id === parseInt(id))[0]


  return (
    <div className='p-10'>
      <div className='flex singleCover'>
        <img src={album.image} className={isDesktop ? "w-92" : "w-40"} alt="Album"/>
        <div className='w-full' style={{ backgroundImage: `url(${album.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className='flex flex-col items-start justify-center w-full h-full py-10 pl-10 singleCover'>
            <h1 className='text-3xl text-white'>{album.title}</h1>
            <h2 className='mt-3 text-white'>{album.category}</h2>
            <h2 className='mt-3 text-white'>{album.description}</h2>
            <button className='w-32 p-1 mt-5 bg-white hover:bg-aqua'>Shuffle</button>
          </div>
        </div>
      </div>

      <div className='mt-20 overflow-y-scroll h-96'>
        {songs.map( s => <Song key={s.title} song={s}/>)}
      </div>

    </div>
  )
}

export default Single