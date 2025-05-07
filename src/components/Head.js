import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

    const [search,setSearch]=useState("")
    const [suggestion,setSuggestion]=useState([])
    const [showSuggestions,setShowSuggestions]=useState(true)
    const showCache=useSelector(store=> store.search);

    useEffect(()=>{
         const timer=setTimeout(()=>{
            if(showCache[search]){
                setSuggestion(showCache[search])
            }
            else{
            getSuggestions()}
    },200);
         return ()=>{
         clearTimeout(timer);
         }
    },[search])

    const getSuggestions= async ()=>{
        const data=await fetch(YOUTUBE_SEARCH_API+ search);
        const json=await data.json();
        setSuggestion(json[1])
        dispatch(cacheResults({
            [search]:json[1],
        }))

    }

    const dispatch=useDispatch();

    const toggleMenuHandler= ()=>{
        dispatch(toggleMenu());
    }

  return (
    <div className='grid grid-flow-col shadow-lg m-2 p-5'>
        <div className='flex col-span-1'>
            <img onClick={()=> toggleMenuHandler()}
            className='h-8 cursor-pointer'
            alt="logo" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"/>
            <img className='h-12'
            alt="yt" src="https://www.alvahnbeldinglibrary.org/site-assets/images/youtube-icon.png/@@images/image.png"/>
        </div>
        <div className='col-span-10 px-12 ml-60'>
            <div>
            <input 
                className='border border-gray-400 p-2 w-1/2 rounded-l-full ' 
                type='text'
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                onFocus={()=> setShowSuggestions(true)}
                onBlur={()=> setShowSuggestions(false)}
                />
            <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>Search</button>
            </div>
            {showSuggestions&&(<div className='fixed bg-white shadow-lg rounded-lg w-[21rem]'>
                <ul>
                    {suggestion.map(s=> <li className='py-1 px-2 hover:bg-gray-100 shadow-sm'>{s}</li>)}
                </ul>
            </div>)}
        </div>
        <div className='col-span-1'>
            <img className="h-8"
            alt="user" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"/>
        </div>
    </div>
  )
}

export default Head