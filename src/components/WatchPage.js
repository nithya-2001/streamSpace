import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
const [searchParam]=useSearchParams();

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    })
  return (
    <div className='w-full'>
    <div className='px-5 flex w-full'>
      <div className='w-full'>
        <iframe 
        width="850" 
        height="400" 
        src={"https://www.youtube.com/embed/"+searchParam.get("v") }
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerpolicy="strict-origin-when-cross-origin" 
         allowfullscreen>
         </iframe>
         </div>
         <div className='w-full'>
          <LiveChat/>
         </div>
    </div>
    <div className='w-[900px]'>
    <CommentsContainer/>
    </div>
    </div>
  )
}

export default WatchPage