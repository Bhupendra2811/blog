
import axios from "axios"
import { BLOGS_LIST_FAIL, BLOGS_LIST_REQUEST, BLOGS_LIST_SUCCESS, BLOG_CREATE_FAIL, BLOG_CREATE_REQUEST, BLOG_CREATE_SUCCESS, BLOG_DELETE_FAIL, BLOG_DELETE_REQUEST, BLOG_DELETE_SUCCESS, BLOG_UPDATE_FAIL, BLOG_UPDATE_REQUEST, BLOG_UPDATE_SUCCESS, BLOG_VIEW_FAIL, BLOG_VIEW_REQUEST, BLOG_VIEW_SUCCESS } from "../Constants/BlogConstants";
export const listBlogs=()=>async(dispatch,getState)=>{
   try {
       dispatch({
           type: BLOGS_LIST_REQUEST
       })
       const {userLogin:{userInfo}} =getState()
       console.log(userInfo);
           const config={
               headers:{
                   "Content-type":"application/json",
                   Authorization:`Bearer ${userInfo.token}`
               }
           }
       const response =await axios.get(`/api/blog/`,config);
       
       dispatch({
           type:BLOGS_LIST_SUCCESS,
           payload:response.data
       })
   } catch (error) {
       dispatch({
           type:BLOGS_LIST_FAIL,
           payload: error.response && error.response.data.message ? error.response.data.message : error.message
       })
   }


}

export const listblogDetail=(id)=>async(dispatch,getState)=>{
    console.log('yo');
   try {
       dispatch({
           type: BLOG_VIEW_REQUEST
       })
       const {userLogin:{userInfo}} =getState()
   
           const config={
               headers:{
                   "Content-type":"application/json",
                   Authorization:`Bearer ${userInfo.token}`
               }
           }
       const response =await axios.get(`/api/blog/${id}`,config);
       
       dispatch({
           type:BLOG_VIEW_SUCCESS,
           payload:response.data
       })
   } catch (error) {
       dispatch({
           type:BLOG_VIEW_FAIL,
           payload: error.response && error.response.data.message ? error.response.data.message : error.message
       }) 
   }


}


export const blogCreateAction=(blog)=>async(dispatch,getState)=>{
   try {
       
       dispatch({
           type:BLOG_CREATE_REQUEST
       })
       const {userLogin:{userInfo}} =getState()
   
           const config={
               headers:{
                   "Content-type":"application/json",
                   Authorization:`Bearer ${userInfo.token}`
               }
           }
       const {data}= await axios.post(`/api/blog/`,blog,config)
       dispatch({
           type:BLOG_CREATE_SUCCESS,
           payload:data
       })
   } catch (error) {
           dispatch({
               type:BLOG_CREATE_FAIL,
               payload: error.response && error.response.data.message ? error.response.data.message : error.message
           }) 
   }
}


export const blogDeleteAction=(id)=>async(dispatch,getState)=>{
   try {
       
       dispatch({
           type:BLOG_DELETE_REQUEST
       })
       const {userLogin:{userInfo}} =getState()
   
           const config={
               headers:{
                   Authorization:`Bearer ${userInfo.token}`
               }
           }
       await axios.delete(`/api/products/${id}`,config)
       dispatch({
           type:BLOG_DELETE_SUCCESS,
       })
   } catch (error) {
           dispatch({
               type:BLOG_DELETE_FAIL,
               payload: error.response && error.response.data.message ? error.response.data.message : error.message
           }) 
   }
}


export const blogUpdateAction=(blog)=>async(dispatch,getState)=>{
   try {
       
       dispatch({
           type:BLOG_UPDATE_REQUEST
       })
       const {userLogin:{userInfo}} =getState()
   
           const config={
               headers:{
                   Authorization:`Bearer ${userInfo.token}`
               }
           }
       const {data}=await axios.put(`/api/blog/${blog._id}`,blog,config)
       dispatch({
           type:BLOG_UPDATE_SUCCESS,
           payload:data
       })
   } catch (error) {
           dispatch({
               type:BLOG_UPDATE_FAIL,
               payload: error.response && error.response.data.message ? error.response.data.message : error.message
           }) 
   }
}


// export const productCreateReviewAction=(productId,review)=>async(dispatch,getState)=>{
//    try {
       
//        dispatch({
//            type:PRODUCT_CREATE_REVIEW_REQUEST
//        })
//        const {userLogin:{userInfo}} =getState()
   
//            const config={
//                headers:{
//                    "Content-type":"application/json",
//                    Authorization:`Bearer ${userInfo.token}`
//                }
//            }
//        await axios.post(`/api/products/${productId}/reviews`,review,config)
//        dispatch({
//            type:PRODUCT_CREATE_REVIEW_SUCCESS,
//        })
//    } catch (error) {
//            dispatch({
//                type:PRODUCT_CREATE_REVIEW_FAIL,
//                payload: error.response && error.response.data.message ? error.response.data.message : error.message
//            }) 
//    }
// }
