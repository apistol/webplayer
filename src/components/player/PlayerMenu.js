import React from 'react'
import { BiShuffle, BiSkipPrevious, BiSkipNext } from "react-icons/bi"
import { BsPlayFill } from "react-icons/bs"
import { HiArrowsRightLeft } from "react-icons/hi2"

const PlayerMenu = ({ isDesktop }) => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <BiShuffle color="#FFF" size={isDesktop ? 32 : 22} />
                <BiSkipPrevious color="#FFF" size={isDesktop ? 50 : 32} className="ml-5" />
                <BsPlayFill color="#FFF" size={isDesktop ? 50 : 32} className="mx-5" />
                <BiSkipNext color="#FFF" size={isDesktop ? 50 : 32} className="mr-5" />
                <HiArrowsRightLeft color="#FFF" size={isDesktop ? 32 : 22} />
            </div>
            <div className='flex justify-center'>
                <hr className={`block h-2 mt-4 rounded-full ${isDesktop ? "w-96" : "w-40" } bg-grayer`} />
            </div>
        </div>
    )
}

export default PlayerMenu