import React from 'react'
import { BsPlayFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Item = ({ album, size }) => {
    return (

        <div style={{ background: `url(${album.image})` }} className="flex flex-row items-end rounded h-96 albumCoverBackground">
            <div className='w-full p-5 albumCoverBlur'>
                <h2 className='text-red'>{album.category}</h2>
                <h1 className='mt-1 font-bold text-white'>{album.title}</h1>
                <h3 className='mt-1 text-grayer'>{album.description}</h3>
                <span className='p-3 bg-white rounded-full'><Link to={`/single/${album.id}`}><BsPlayFill color='#000' size={24} /></Link></span>
            </div>
        </div>

    )
}

export default Item