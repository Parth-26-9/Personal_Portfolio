import React from 'react'
import './Projects.css'
import { ImExit } from 'react-icons/im';
import BarLoader from "react-spinners/BarLoader";
import {Link,Routes,Route,useNavigate} from 'react-router-dom'
import {useEffect,useState} from "react"
function Projects() {
 
  const navigate = useNavigate()
function handleExit()
{
  navigate('/home')
}
const [loading,SetLoading]=useState(false);

  
useEffect(()=>{
  SetLoading(true)
  setTimeout(()=>{
    SetLoading(false);
  },3000)
},[])

function handleDemo()
{
  window.open("https://lustrous-belekoy-039d45.netlify.app/")
}

return (
  <>
    {
      loading ?
      <BarLoader
      color={"#FFEE00"}
      loading={loading}
      // cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
      
      :
      <div className="ThisContainer">
      <div className="card">
      <ImExit className='exit-button' onClick={handleExit} style={{color:"cyan"}}/>
        <img src="https://reactjsexample.com/content/images/2021/09/notes-app-react.jpg" alt="" />
        <h1>NoteApp</h1>
        <h1>React</h1>
        <div className="button-section">
        <button className='demo' onClick={handleDemo}>Demo</button>
        <button className='code'>Code</button>
        </div>
      </div>
    </div>
    }
 
  </>
  )
}

export default Projects