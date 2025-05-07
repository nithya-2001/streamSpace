import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
const [searchParam]=useSearchParams();

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    })
  return (
    <div>
    <div className='px-5'>
        <iframe 
        width="900" 
        height="400" 
        src={"https://www.youtube.com/embed/"+searchParam.get("v") }
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerpolicy="strict-origin-when-cross-origin" 
         allowfullscreen>
         </iframe>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage