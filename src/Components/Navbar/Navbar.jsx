import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return <>
<nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-color py-3">
  <div className="container">
    <Link className="navbar-brand logo" to="/">FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={(x)=>x.isActive?"nav-link actives":"nav-link"} to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(x)=>x.isActive?"nav-link actives":"nav-link"} to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(x)=>x.isActive?"nav-link actives":"nav-link"} to="contact">Contacts</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
}
