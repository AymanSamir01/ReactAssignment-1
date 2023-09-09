import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import imgOne from "../../images/poert1.png"
import imgTwo from "../../images/port2.png"
import imgThree from "../../images/port3.png"
export default function Portfolio() {
  const handleClick = (target) => {
    const photoPopup = document.getElementById("photoPopup")
    const popup = document.getElementById("popup")
    popup.classList.replace("d-none", "d-flex")
    const source= target.previousElementSibling.src;
    photoPopup.src=source;
    popup.addEventListener("click",function(){
      popup.classList.replace("d-flex","d-none")
    })
    photoPopup.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  };

  return <>
  <MainHeading title={"PORTFOLIO COMPONENT"}/>
  <div id='popup' className='popup position-fixed top-0 start-0 z-3 w-100 d-none h-100 bg-primary bg-opacity-25  align-items-center justify-content-center'>
    <img id='photoPopup' src={imgOne} alt="" />
  </div>
  <div className="container">
    <div className="row g-3 mb-5">
      <div className="col-md-6 col-lg-4">
        <div onClick={(e) => handleClick(e.target)} className='card-content rounded-3 overflow-hidden position-relative'>
          <img src={imgOne} className='w-100' alt="" />
          <div className="overlay"></div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div onClick={(e) => handleClick(e.target)} className='card-content rounded-3 overflow-hidden position-relative'>
          <img src={imgTwo} className='w-100' alt="" />
          <div className="overlay"></div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div onClick={(e) => handleClick(e.target)} className='card-content rounded-3 overflow-hidden position-relative'>
          <img src={imgThree} className='w-100' alt="" />
          <div className="overlay"></div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div onClick={(e) => handleClick(e.target)} className='card-content rounded-3 overflow-hidden position-relative'>
          <img src={imgOne} className='w-100' alt="" />
          <div className="overlay"></div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div onClick={(e) => handleClick(e.target)} className='card-content rounded-3 overflow-hidden position-relative'>
          <img src={imgTwo} className='w-100' alt="" />
          <div className="overlay"></div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div onClick={(e) => handleClick(e.target)} className='card-content rounded-3 overflow-hidden position-relative'>
          <img src={imgThree} className='w-100' alt="" />
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  </div>
  </>
}
