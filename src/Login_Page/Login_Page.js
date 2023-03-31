import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login_Page.css";
import ClockLoader from "react-spinners/ClockLoader";

function Login_Page() {

  const [name, SetName] = useState("");
	const [password,SetPassword]=useState('')
  const navigate = useNavigate()
  const [loading,SetLoading]=useState(false);

  
  useEffect(()=>{
    SetLoading(true)
    setTimeout(()=>{
      SetLoading(false);
    },3000)
  },[])



  function handleUser(e) {
    e.preventDefault();
	if(name==='Parth' && password==='Parth')
	{
		navigate('/home')
	}
  


}

return (
  <>
  {
    loading ?
            <ClockLoader
            color={"#FFEE00"}
            loading={loading}
            // cssOverride={override}
            size={120}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
            :
            <div className="box">
            <form autocomplete="off" onSubmit={handleUser}>
            <h2>Sign in</h2>
          <div className="inputBox" onChange={(e)=>SetName(e.target.value)}>
          <input type="text" required="required" />
          <span>Userame</span>
          <i></i>
          </div>
          <div className="inputBox">
          <input type="password" required="required" onChange={(e)=>SetPassword(e.target.value)} />
                <span>Password</span>
                <i></i>
                </div>
                <div className="links">
                <a href="#">Forgot Password ?</a>
                <a href="#">Signup</a>
                </div>
                <input type="submit" id="mybtn" style={{color:"red"}} value="Login" />
                </form>
                </div>
      }
      {/* <form autocomplete="off" onSubmit={handleUser}>
      <h2>Sign in</h2>
      <div className="inputBox" onChange={(e)=>SetName(e.target.value)}>
      <input type="text" required="required" />
    <span>Userame</span>
    <i></i>
    </div>
    <div className="inputBox">
    <input type="password" required="required" onChange={(e)=>SetPassword(e.target.value)} />
    <span>Password</span>
    <i></i>
    </div>
    <div className="links">
    <a href="#">Forgot Password ?</a>
    <a href="#">Signup</a>
    </div>
    <input type="submit" id="mybtn" value="Login" />
  </form>    */}
  </>
          )
        }
        
        export default Login_Page;
        