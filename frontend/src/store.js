import {createStore,applyMiddleware,combineReducers} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import { blogListReducer,blogCreateReducer,blogDeleteReducer,blogUpdateReducer,blogViewReducer } from "./Reducers/BlogsReducer"
import { userLoginReducer, userRegisterReducer } from "./Reducers/UserReducer"
const reducer=combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    blogList:blogListReducer,
    blogCreate:blogCreateReducer,
    blogDelete:blogDeleteReducer,
    blogView:blogViewReducer,
    blogUpdate:blogUpdateReducer,
})
const initialState={}
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store