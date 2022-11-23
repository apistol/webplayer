import React from 'react'
import { BsChevronLeft, BsChevronRight, BsThreeDots } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import profileImage from "../assets/profile.png"

const SearchBar = ({ isDesktop }) => {

    const location = useLocation()
    const navigate = useNavigate();
    const getURL = location.pathname === "/menu" ? "/" : "/menu" 

    return (
        <div className='flex justify-between w-full px-10 bg-black'>
            <div className='flex items-center '>
                {!isDesktop && <Link to={"/"}><svg width="80" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12.18" cy="12" rx="12.18" ry="12" fill="red" /><ellipse cx="12.18" cy="12" rx="7.308" ry="7.2" fill="red" stroke="#fff" stroke-width="1.2" /><path d="M9.744 15.545l6.327-3.544-6.327-3.546v7.09zM37.433 9.642c-.579 2.853-1.019 6.336-1.25 7.774h-.163c-.187-1.482-.627-4.942-1.227-7.75L33.31 2.677h-4.52v18.85h2.803V5.987l.277 1.451 2.85 14.086h2.804l2.803-14.086.3-1.459v15.547h2.804V2.676h-4.563l-1.435 6.966zM51.01 18.696c-.256.517-.81.876-1.368.876-.648 0-.904-.494-.904-1.706V7.754H45.54v10.29c0 2.54.856 3.706 2.758 3.706 1.296 0 2.338-.562 3.058-1.909h.07l.277 1.684h2.502V7.755h-3.198v10.94h.003zM60.392 13.19c-1.043-.742-1.691-1.236-1.691-2.314 0-.763.37-1.19 1.25-1.19.905 0 1.206.605 1.227 2.674l2.689-.111c.208-3.346-.928-4.74-3.87-4.74-2.733 0-4.078 1.19-4.078 3.638 0 2.224 1.113 3.235 2.92 4.562 1.553 1.169 2.457 1.82 2.457 2.764 0 .72-.464 1.213-1.275 1.213-.95 0-1.507-.877-1.365-2.405l-2.71.044c-.419 2.852.766 4.515 3.915 4.515 2.758 0 4.195-1.236 4.195-3.706-.003-2.247-1.16-3.147-3.664-4.944zM68.872 7.754h-3.059v13.77h3.06V7.755zM67.365 2.316c-1.18 0-1.738.427-1.738 1.911 0 1.528.554 1.909 1.739 1.909 1.205 0 1.738-.383 1.738-1.909 0-1.414-.533-1.911-1.739-1.911zM79.158 16.56l-2.803-.135c0 2.426-.277 3.212-1.226 3.212-.95 0-1.113-.877-1.113-3.73v-2.67c0-2.765.187-3.639 1.137-3.639.88 0 1.112.83 1.112 3.393l2.778-.178c.187-2.134-.093-3.595-.949-4.425-.627-.608-1.576-.897-2.896-.897-3.104 0-4.379 1.618-4.379 6.154v1.932c0 4.673 1.088 6.178 4.264 6.178 1.344 0 2.27-.27 2.896-.854.902-.814 1.249-2.205 1.18-4.341z" fill="#fff" /></svg></Link>}
                {isDesktop && <span onClick={() => navigate(-1)}  className='block p-2 rounded-full bg-gray'><BsChevronLeft color="#FFF" size={24} /></span>}
                {-isDesktop && <span onClick={() => navigate(1)}  className='block p-2 ml-5 rounded-full bg-gray'><BsChevronRight color="#FFF" size={24} /></span>}
            </div>
            <div className='flex items-center p-4 flex-end'>
                {isDesktop && <div className='flex items-center pl-4 mr-4 rounded bg-gray'>
                    <SlMagnifier color="#FFF" />
                    <input placeholder='Search' className='p-3 text-white bg-dark ' id="searchSong" />
                </div>}
                {isDesktop && <span className='p-2 rounded-full bg-gray'><BsChevronLeft color="#FFF" size={24} /></span>}
                {!isDesktop && <>
                    <img className="inline-block w-6 h-6 rounded-full" src={profileImage} alt="Profile image" />
                    <Link to={getURL}><BsThreeDots color='#FFF' size={24} className='ml-5' /></Link>
                </>}
            </div>
        </div>
    )
}

export default SearchBar