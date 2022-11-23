import React, { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { albums } from '../assets/utils'
import useMediaQuery from '../hooks/useMediaQuery'
import Item from './album/Item'

const AllAlbums = ({isDesktop}) => {

    const [cols, setCols] = useState("1")
    const mobile = useMediaQuery("(max-width:700px)")
    const tablet = useMediaQuery("(min-width:700px) and (max-width:1000px)")
    const desktop = useMediaQuery("(min-width:1000px)")
    useEffect(() => {
        if(mobile){ return setCols("1")}
        if(tablet){ return setCols("2")}
        if(desktop){ return setCols("4")}

    }, [mobile, tablet])

    console.log(cols)

    return (
        <div className='h-full mt-12 overflow-y-scroll' style={{ height: "75vh", width: !isDesktop ? "80%": "inherit"}}>

            <div className='flex justify-between w-full'>
                <div className='text-white'>Section Title</div>
                <div className='flex items-center '>
                    <span className='block p-2 rounded-full bg-gray'><BsChevronLeft color="#FFF" size={24} /></span>
                    <span className='block p-2 ml-5 rounded-full bg-gray'><BsChevronRight color="#FFF" size={24} /></span>
                </div>
            </div>
            <div className={`grid grid-cols-${cols} gap-10 mt-5 overflow-x-scroll`}>
                {albums.map(album => <Item key={album} album={album} size={"3"} />)}
            </div>


            <div className='flex justify-between w-full mt-20'>
                <div className='text-white'>Section Title</div>
                <div className='flex items-center '>
                    <span className='block p-2 rounded-full bg-gray'><BsChevronLeft color="#FFF" size={24} /></span>
                    <span className='block p-2 ml-5 rounded-full bg-gray'><BsChevronRight color="#FFF" size={24} /></span>
                </div>
            </div>
            <div className={`grid grid-cols-${cols} gap-10 mt-5 overflow-x-scroll`}>
                {albums.map(album => <Item key={album} album={album} size={"3"} />)}
            </div>


            <div className='flex justify-between w-full mt-20'>
                <div className='text-white'>Section Title</div>
                <div className='flex items-center '>
                    <span className='block p-2 rounded-full bg-gray'><BsChevronLeft color="#FFF" size={24} /></span>
                    <span className='block p-2 ml-5 rounded-full bg-gray'><BsChevronRight color="#FFF" size={24} /></span>
                </div>
            </div>
            <div className={`grid grid-cols-${cols} gap-10 mt-5 overflow-x-scroll`}>
                {albums.map(album => <Item key={album} album={album} size={"3"} />)}
            </div>
        </div>
    )
}

export default AllAlbums