import React from 'react'
import './Navinshorts.css'
import Hamburgerdrawer from './Hamburgerdrawer'

const Navinshorts = () => {
  return (
    <div className='nav'>
    <div className='icon'>
        <Hamburgerdrawer/>
    </div>
    <img
    style={{cursor:"pointer"}} 
    src='./Images/header.jpg' 
    height="80%"
    alt='logo'
    >
    </img>
    </div>
  )
}

export default Navinshorts
