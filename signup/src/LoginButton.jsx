import React, { useContext,useEffect } from 'react';

import { magic } from './App';
import Main from './Main';
import './Components/Login.css'

function LoginButton() {
  
  const { setdata } = useContext(magic);

  
  
  // Use useEffect to setdata when isAuthenticated changes
 

  return (
    <>
  
 {/*  <div className='logo'>
    <img src={macro} alt='macro' />
  </div> */}
  

<nav  className='boxed mt-5'>
        <ul>
          
          
          
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Products</a></li>
          <li>
        <button onClick={()=>{setdata('logged-in')}} className='btn btn-primary mt-2' >Log in</button>
      
      </li>
        </ul>
      </nav>
      
      <Main />
    </>
  );
}

export default LoginButton;

