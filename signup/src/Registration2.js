import React, { useContext } from 'react'
import flower from './All-Images/flower.png'
import './Components/Registration2.css'
import { magic } from './App'
function Registration() {
    const{setdata}=useContext(magic)
  return (
    <>
    
    
    <div className='contains'>
        <div className='parent'>
            <div className='childs'>
            <img src={flower} className='img-fluid' />
                 <h1>WELCOME</h1>
                 <input type='text'  placeholder='Your name'className='in0'/>
                 <input type='email'  placeholder='Email Address'className='in1'/>
                 <input type='password' placeholder='Password'className='in2'/>

                 <button onClick={()=>{setdata('loggedin')}}>Continue</button>
                 <h6>Already have an account?<a onClick={()=>{setdata ('logged-in')}} >Log in</a></h6>
            </div>
        </div>
    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Registration