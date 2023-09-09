import React from 'react'

export default function Footer() {
  return <>
  <footer>
  <div className="footer-info bg-color">
    <div className="container py-5">
      <div className="row g-5 py-2">
        <div className="col-lg-4 text-center text-white">
          <h3 className='text-uppercase mb-3'>location</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-lg-4 text-center text-white">
          <h3 className='text-uppercase mb-3'>around the web</h3>
          <ul className='list-unstyled d-flex gap-2 flex-wrap justify-content-center'>
            <li>
              <div className='icon'>
              <i className="fa-brands fa-facebook-f"></i>
              </div>
            </li>
            <li>
              <div className='icon'>
              <i className="fa-brands fa-twitter"></i>
              </div>
            </li>
            <li>
              <div className='icon'>
              <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </li>
            <li>
              <div className='icon'>
              <i className="fa-solid fa-globe"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 text-center text-white">
          <h3 className='text-uppercase mb-3'>about freelancer</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
  </div>
  <div className='footer-bar p-3 text-center text-white fw-semibold'>
    <p>Copyright © Your Website 2023</p>
  </div>
  </footer>
  </>
}
