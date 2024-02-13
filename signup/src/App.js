import React, { createContext, useState } from 'react'
import './App.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Form from './Form'
import Member from './Member'
import Registration from './Registration'
import Registration2 from './Registration2'
/* import Abhi from './Abhi' */

const magic=createContext()
function App() {
  const[data,setdata]=useState('login')
  return (
    <>
    


    <magic.Provider value={{setdata}}>
    {data=='login' && <LoginButton />}
    {data=='logged-in' && <Registration />}
    {data=='signup' && <Registration2 />}
    {/* <LogoutButton /> */}
    {data=='loggedin' && <LogoutButton />}
    {data=='student' && <Form />}
    {data=='member' && <Member />}
    </magic.Provider>
    
    
    
    
    
    
    </>
  )
}
export {magic}
export default App