import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list=["All","Movies","Music","Cricket","Soccer","Live","Cooking","News","Gaming"]

  return (
    <div className='flex'>
      {list.map((name,index) => <Button key={index} name={name}/>)}
    </div>
  )
}

export default ButtonList