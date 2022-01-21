import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../Actions/UserActions";

export default function Signupscreen() {

  const [email, setemail] = useState("");
  const [phno, setphno] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  
  const dispatch=useDispatch()
const reg=(e)=>{
  e.preventDefault()
  if(password==cpassword){
    
    dispatch(register({email,password,phno,name}))
  }
  else{
    alert('passwords not matched')
  }
}
  return (
    <div className='register'>
      <div className="row justify-content-center m-3" data-aos='zoom-in'>
        <div className="col-md-5 card p-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "100px" }}>
          <div className="div" >
            <h1 style={{display: "inline"}} className="text-center m-3">Register</h1>
            <i style={{fontSize:'25px'}} className="fa fa-user-plus" aria-hidden="true"></i>

              <form onSubmit={(e)=>reg(e)}>
              <input
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e)=>setname(e.target.value)}
            />
            <input
              type="tel"
              placeholder="10-digit Phone Number"
              className="form-control"
              value={phno}
              onChange={(e)=>setphno(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
            />

            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e)=>setcpassword(e.target.value)}
            />

            <div className="text-right">
              <button type="submit" className="btn mt-3">
                REGISTER
              </button>
            </div>
              </form>
          </div>
          <a style={{color: 'black'}} href="/login" className='m-3'>Click Here To Login</a>
        </div>
      </div>
    </div>
  );
  }