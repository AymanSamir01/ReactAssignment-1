import React from 'react'
import avatar from "../../images/avataaars.svg"
import MainHeading from '../MainHeading/MainHeading'
export default function Home() {
  return <>
  <img src={avatar} alt="" className='avatar' />
  <MainHeading  title={"START FRAMEWORK"}/>
  <div className='fw-semibold text-center'>Graphic Artist - Web Designer - Illustrator</div>
  </>
}
