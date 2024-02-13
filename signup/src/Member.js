import React from 'react'
import './Components/Member.css'
import Android from './All-Images/Android.png'
import machine from './All-Images/machine.png'
import web from './All-Images/web.png'
import cyber from './All-Images/cyber.png'
import marketing from './All-Images/marketing.png'
import cloud from './All-Images/cloud.png'
function Member() {
  return (
    <>
    <div className='services'>
      <h1>OUR SERVICES</h1>
    </div>
    <div className='images'>
      <h1 id='app'>App Development</h1>
    <img src={Android} alt='img1' className='img1' />
    <h1 id='web'>Web Development</h1>
    <img src={web} alt='img2' className='img2' />

    <h1 className='cyber'>Cyber Security</h1>
    <img src={cyber} alt='img3' className='img3' />

    <h1 className='cyber'>Cloud Services</h1>
    <img src={cloud} alt='img4' className='img4' />

    <h1 className='mac'>Machine Learning</h1>
    <img src={machine} alt='img4' className='img5' />

    <h1 className='mac'>Digital Marketing</h1>
    <img src={marketing} alt='img4' className='img7' />
    </div>
    
   
    
    
    
    
    </>
  )
}

export default Member