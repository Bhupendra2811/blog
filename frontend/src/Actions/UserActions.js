import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Constants/UserConstants"
import axios from "axios"
export const register=(user)=>async(dispatch)=>{
    try {
        dispatch({
            type:USER_REGISTER_REQUEST
        })
        const config={
            headers:{
                "Content-type":"application/json"
            }
        }
        console.log("yelo");
        const response=await axios.post("api/auth/register",{...user},config)
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:response.data
        })
        localStorage.setItem("userLoginInfo",JSON.stringify(response.data))
    } catch (error) {
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error
        })
    }
}
export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const config={
            headers:{
                "Content-type":"application/json"
            }
        }
        const response=await axios.post("api/auth/login",{email,password},config)
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:response.data
        })
        console.log(response);
        localStorage.setItem("userLoginInfo",JSON.stringify(response.data))
    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error
        })
        console.log(error);
    }
}