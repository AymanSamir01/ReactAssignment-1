import React from 'react'
import MainHeading from '../MainHeading/MainHeading'

export default function About() {
  return <>
  <MainHeading  title={"ABOUT COMPONENT"}/>
  <div className="container">
    <div className="row">
      <div className="col-md-6 p-3">
        <p className='lead'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className="col-md-6 p-3">
        <p className='lead'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
  </div>
  </>
}
