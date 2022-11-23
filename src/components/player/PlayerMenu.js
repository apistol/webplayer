import React from 'react'
import { BiShuffle, BiSkipPrevious, BiSkipNext } from "react-icons/bi"
import { BsPlayFill } from "react-icons/bs"
import { HiArrowsRightLeft } from "react-icons/hi2"

const PlayerMenu = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <BiShuffle color="#FFF" size={32} />
                <BiSkipPrevious color="#FFF" size={50} className="ml-5" />
                <BsPlayFill color="#FFF" size={50} className="mx-5" />
                <BiSkipNext color="#FFF" size={50} className="mr-5" />
                <HiArrowsRightLeft color="#FFF" size={32} />
            </div>
            <hr className='block h-2 mt-4 rounded-full w-96 bg-grayer' />
        </div>
    )
}

export default PlayerMenu