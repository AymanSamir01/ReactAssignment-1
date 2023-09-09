import React from 'react'

export default function MainHeading(props) {

  return <>
  <div className='pt-5'>
  <h2 className='fs-1 fw-bold mb-3 text-center pt-5'>{props.title}</h2>
  <div className='main-head position-relative mb-4 text-center' > 
  <i className="fa-solid fa-star"></i>
  </div>
  </div>
  </>
}
