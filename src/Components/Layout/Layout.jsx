import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return <>
    <Navbar />
    <section className='content'>
    <div className="d-flex justify-content-center align-items-center flex-column layout-content">
    <Outlet />
    </div>
    </section>
    
    <Footer />
    </>
}
