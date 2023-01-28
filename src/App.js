import React, { useState } from 'react'
import './App.css'
import Login_Page from './Login_Page/Login_Page'
import {Routes,Route, useNavigate} from 'react-router-dom'
import Home from './Home/Home'
function App() {

  const navigate = useNavigate()

    function handleClick(e)
    {
      document.getElementById('mybtn').style.display='none'
      navigate('/login')
    }

  return (
    <div>
      <button onClick={handleClick} id="mybtn">Let's Go</button>
      <Routes>
        <Route path='/login' element={<Login_Page/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App