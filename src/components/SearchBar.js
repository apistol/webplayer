import React from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";

const SearchBar = () => {
    return (
        <div className='flex justify-between w-full'>
            <div className='flex items-center '>
                <span className='block p-2 rounded-full bg-gray'><BsChevronLeft color="#FFF" size={24} /></span>
                <span className='block p-2 ml-5 rounded-full bg-gray'><BsChevronRight color="#FFF" size={24} /></span>
            </div>
            <div className='flex items-center search'>
                <div className='flex items-center pl-4 mr-4 rounded bg-gray'>
                    <SlMagnifier color="#FFF"/>
                    <input placeholder='Search' className='p-3 text-white bg-dark ' id="searchSong"/>
                </div>
                <span className='p-2 rounded-full bg-gray'><BsChevronLeft color="#FFF" size={24} /></span>
            </div>
        </div>
    )
}

export default SearchBar