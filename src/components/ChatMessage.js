import React from 'react'

const ChatMessage = ({name,comment}) => {
  return (
    <div className='flex items-center shadow-sm'>
        <img className='h-8'
        alt="logo"
         src="https://openclipart.org/image/2000px/247319"
         />
         <span className='font-bold p-2'>{name}</span>
         <span>{comment}</span>
    </div>
  )
}

export default ChatMessage