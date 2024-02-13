import React, { useState } from 'react'
import './Components/Contact.css'
function Form() {
    /* const[text,settext]=useState('') */


  return (
    <>
   <div className='contact'>
   <div id='con'>
    <h1 id='cont'>CONTACT US FORM</h1>
    </div>
    <div className='block'>
    <form className='frm'>
    <label for="name">Name:</label>
    <input id='one' type='text' placeholder='Write your Name ...'  />
    <br />

    <label for="email">Email:</label>
    <input id='two' type='text' placeholder='Write your Email ...' />
    <br />

    <label for="number">Number:</label>
    <input type='number' placeholder='Write your Contact ...' />
    <br />


    

    <label for="address">Address:</label>
    <input id='three' type='text' placeholder='Write your Address ...' />
    <br />


    <label id='lbl' for="gender">Gender:</label><br/>
    <select id="gender" name="gender" required>
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select><br/>

    <label for="name">Message:</label>
    <input id='msg' type='text' placeholder='Tell us about your need...' />
    <br />

    
    <input id='sub' type='submit' value='SUBMIT' />
    </form>

    </div>

   </div>
    
   
    </>
  )
}

export default Form