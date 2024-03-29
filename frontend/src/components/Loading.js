import React from "react";

export default function Loading() {
  return (
    <div className='mt-5 text-center'>
      <div className="spinner-border mt-5" role="status" style={{width:'100px' , height:'100px'}}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}