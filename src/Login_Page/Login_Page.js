import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login_Page.css";

function Login_Page() {
  const [name, SetName] = useState("");
	const [password,SetPassword]=useState('')
  const navigate = useNavigate()
  function handleUser(e) {
    e.preventDefault();
	if(name==='Parth' && password==='Parth')
	{
		navigate('/home')
	}
  }

  return (
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
        <input type="submit" id="mybtn" value="Login" />
      </form>
    </div>
  );
}

export default Login_Page;
