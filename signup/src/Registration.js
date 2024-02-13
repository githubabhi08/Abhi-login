import React, { useContext } from 'react'
import flower from './All-Images/flower.png'
import './Components/Registration.css'
import { magic } from './App'
function Registration() {
    const{setdata}=useContext(magic)
  return (
    <>
    
    
    <div className='contain'>
        <div className='parent'>
            <div className='child'>
                <img src={flower} className='img-fluid' />
                 <h1>WELCOME</h1>
                 <input type='email'  placeholder='Email Address'className='in1'/>
                 <input type='password' placeholder='Password'className='in2'/>

                 <button onClick={()=>{setdata('loggedin')}}>Continue</button>
                 <h6>Dont have an account? <a onClick={()=>{setdata('signup')}} >Sign up</a></h6>
            </div>
        </div>
    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Registration