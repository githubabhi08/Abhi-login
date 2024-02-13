import React from 'react'
import call from './All-Images/call.png'
import macro from './All-Images/macro.png'
import './Components/Main.css'
function Main() {
  return (
    <>
    <div className='brand'>
        <img src={macro} className='img-fluid' />
    </div>
    <div className='caller'>
        <img src={call} className='img-fluid ms-5'/>
    </div>
    

    <div className='black'>
        <h2>copyright 2024 Macro, Inc</h2>
    </div>
    
    
    </>
  )
}

export default Main