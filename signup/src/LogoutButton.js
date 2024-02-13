import React, { useContext } from "react";

import { magic } from "./App";
import './Components/Logout.css'

const LogoutButton = () => {
  
  const{setdata}=useContext(magic)

  return (
    <>
    <button onClick={()=>{setdata('login')}} className="btn btn-danger mt-4 ms-3" >
      Log Out
    </button>
    
    <div className="button-block">
    <button className="btn btn-info" onClick={()=>{setdata('student')}}>YOU ARE A STUDENT</button>
    <button className="btn btn-primary" onClick={()=>{setdata('member')}}>YOU ARE A TEAM MEMBER</button>
    </div>
    </>
    
  );
};

export default LogoutButton;