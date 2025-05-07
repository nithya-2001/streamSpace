import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateName, randomMessage } from '../utils/helper';

const LiveChat = () => {

    const [liveChat,setLiveChat]=useState("")
    const dispatch=useDispatch();
    const chatMes=useSelector((store)=> store.chat.messages);

    useEffect(()=>{
        const time=setInterval(()=>{
            dispatch(addMessage({
                name:generateName(),
                comment:randomMessage(7),
            }))
        },2000);
        return ()=> clearInterval(time)
    },[])

  return (
    <>
    <div className='ml-2 p-2 border border-black bg-gray-100 rounded-lg w-full h-[400px] overflow-y-scroll flex flex-col-reverse'>
        {chatMes.map((c,i)=> <ChatMessage key={i} name={c.name} comment={c.comment}/>)}
    </div>
    <form className='ml-2 p-2 border border-black w-full rounded-lg'
        onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"Nithya Vardhan",
                comment:liveChat
            }))
            setLiveChat("");
        }}
    >
        <input className='border border-slate-100 w-72 px-2' 
        type="text"
        value={liveChat}
        onChange={(e)=>{setLiveChat(e.target.value)}}
        />
        <button className='px-2 m-2 rounded-lg bg-slate-200'>Send</button>
    </form>
    </>
  )
}

export default LiveChat