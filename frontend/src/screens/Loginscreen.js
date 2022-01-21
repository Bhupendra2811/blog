import React, { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { login } from "../Actions/UserActions"
import Error from '../components/Error';
import Loading from '../components/Loading';
export default function Loginscreen() {
  const loginstate = useSelector(state=>state.userLoginReducer)
  const { loading, error } = loginstate || {};

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
  const dispatch=useDispatch()
const log=(e)=>{
  console.log('hello');
  dispatch(login(email,password))
  e.preventDefault()
}
return (
    <div className='login'>
    <div className="row justify-content-center m-2" data-aos='flip-left'>
      <div className="col-md-4 card p-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "100px" }}>
        <div className="div">
          <h1 className="text-center m-3" style={{display: "inline"}}>LOGIN</h1>
           <i style={{fontSize:'25px'}} className="fa fa-sign-in" aria-hidden="true"></i>
           {error && (<Error error='Invalid Credentials' />)}
            {loading && (<Loading/>)} 
            <form onSubmit={(e)=>log(e)}>
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

         

          <div className="text-right">
            <button type='submit' className="btn mt-3">
              LOGIN
            </button>
          </div>
            </form>

          
        </div>
        
        <a style={{color:'black'}} href="/register" className='mt-3'>Click Here To Register</a>
      </div>
    </div>
  </div>
)
}