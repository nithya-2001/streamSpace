import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen=useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='p-5 w-48 shadow-lg'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>live</li>
      </ul>
      <h2 className='font-bold pt-5'>Trending</h2>
      <ul>
        <li>Movies</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h2 className='font-bold pt-5'>Subscriptions</h2>
      <ul>
        <li>Movies</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
    </div>
  )
}

export default SideBar