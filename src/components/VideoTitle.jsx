import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { IoMdInformationCircleOutline } from 'react-icons/io'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='absolute px-16 text-white mt-96'>
        <h1 className='text-6xl'>{title}</h1>
        <p className='w-[500px]'>{overview}</p>
        <div className='flex gap-3'>
            <button className='flex items-center gap-2 px-6 py-2 text-black rounded-lg bg-slate-300'><FaPlay /> Play</button>
            <button className='flex items-center gap-2 px-6 py-2 text-black bg-white border border-black rounded-lg'><IoMdInformationCircleOutline  className='text-lg'/>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
