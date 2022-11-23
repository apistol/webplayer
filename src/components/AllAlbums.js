import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { albums } from '../assets/utils'
import Item from './album/Item'

const AllAlbums = () => {

   
    return (
        <div className='h-full px-10 pt-12 overflow-y-scroll bg-black' style={{ height: "75vh"}}>

            <div className='flex justify-between w-full'>
                <div className='text-white'>Section Title</div>
                <div className='flex items-center '>
                    <span className='block p-2 rounded-full bg-gray'><BsChevronLeft color="#FFF" size={24} /></span>
                    <span className='block p-2 ml-5 rounded-full bg-gray'><BsChevronRight color="#FFF" size={24} /></span>
                </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 overflow-x-scroll`}>
                {albums.map(album => <Item key={album} album={album} size={"3"} />)}
            </div>


            <div className='flex justify-between w-full mt-20'>
                <div className='text-white'>Section Title</div>
                <div className='flex items-center '>
                    <span className='block p-2 rounded-full bg-gray'><BsChevronLeft color="#FFF" size={24} /></span>
                    <span className='block p-2 ml-5 rounded-full bg-gray'><BsChevronRight color="#FFF" size={24} /></span>
                </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 overflow-x-scroll`}>
                {albums.map(album => <Item key={album} album={album} size={"3"} />)}
            </div>


            <div className='flex justify-between w-full mt-20'>
                <div className='text-white'>Section Title</div>
                <div className='flex items-center '>
                    <span className='block p-2 rounded-full bg-gray'><BsChevronLeft color="#FFF" size={24} /></span>
                    <span className='block p-2 ml-5 rounded-full bg-gray'><BsChevronRight color="#FFF" size={24} /></span>
                </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 overflow-x-scroll`}>
                {albums.map(album => <Item key={album} album={album} size={"3"} />)}
            </div>
        </div>
    )
}

export default AllAlbums