import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listblogDetail } from '../Actions/BlogActions';

function BlogsScreen() {

  const { id } = useParams()
  console.log("hello");
  const dispatch = useDispatch()
  const { blog } = useSelector(state => state.blogView)
  useEffect(() => {
    dispatch(listblogDetail(id))
  }, []);
  console.log(blog);


  return (
    <div className='blogscreen'>
      <h1>{blog?.title}</h1>
      <img src={`${blog?.imageURL}`} alt="" />
      <p>{blog?.body}</p>
      {blog?.title}
    </div>
  )
}

export default BlogsScreen;
