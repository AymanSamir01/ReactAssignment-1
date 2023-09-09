import React from 'react'
import MainHeading from '../MainHeading/MainHeading'


export default function Contact() {
  const handleClick = (target) => {
    const prevLabel = target.previousElementSibling;
    prevLabel.style.top=0;
    prevLabel.style.position="static";
  };
  return <>
  <MainHeading title={"CONATCT SECTION"}/>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div>
        <label htmlFor="userName" className='py-2'>userName</label>
        <input onChange={(e) => handleClick(e.target)} type="text" id='userName' className='form-control bg-transparent' name='name' placeholder='userName' />
        </div>
        <div>
        <label htmlFor="userAge" className='py-2'>userAge</label>
        <input onChange={(e) => handleClick(e.target)} type="number" id='userAge' className='form-control bg-transparent' name='age' placeholder='userAge' />
        </div>
        <div>
        <label htmlFor="userEmail" className='py-2'>userEmail</label>
        <input onChange={(e) => handleClick(e.target)} type="email" id='userEmail' className='form-control bg-transparent' name='email' placeholder='userEmail' />
        </div>
        <div>
        <label htmlFor="userPassword" className='py-2'>userPassword</label>
        <input onChange={(e) => handleClick(e.target)} type="password" id='userPassword' className='form-control bg-transparent' name='password' placeholder='userPassword' />
        </div>
        <button type='submit' className='btn btn-primary mt-5'>Send Message</button>
      </div>
    </div>
  </div>
  </>
}
