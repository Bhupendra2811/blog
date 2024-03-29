import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Constants/UserConstants";

export const userLoginReducer=(state={},action)=>{
        switch(action.type){
            case USER_LOGIN_REQUEST:
                return{ ...state,
                    loading: true}
            case USER_LOGIN_SUCCESS:
                return {...state,
                    loading: false,
                    success: true,
                    userInfo:action.payload}
            case USER_LOGIN_FAIL:
                return {...state,
                    loading: false,
                    error: 'Invalid Credentials'}
            default:
                return state
        }
}

export const userRegisterReducer=(state={},action)=>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return{...state ,
                loading : true}
        case USER_REGISTER_SUCCESS:
            return {...state ,
                loading : false , 
                success : true}
        case USER_REGISTER_FAIL:
            return {...state ,
                loading : false,
                error : action.payload}
        default:
            return state
    }
}