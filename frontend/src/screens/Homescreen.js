import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBlogs } from '../Actions/BlogActions';
import Blog from '../components/Blog';

export default function Homescreen() {
    const dispatch=useDispatch()
    const {blogs}=useSelector(state=>state.blogList)
    console.log(blogs);
    useEffect(() => {
      dispatch(listBlogs())
  
    }, []);


    return (
        <div>
            <div className="row">
                {blogs.map(blog => {
                    return <div className='col-md-4'>
                        <div>
                            <Blog blog={blog}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )

}