import React from 'react'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import Partners from '../Partners/Partners'
import "./Header.css"
function Header() {
    return (
        <div className="header">
            <Navbar></Navbar>
            <Hero></Hero>
            <Partners></Partners>
        </div>
    )
}

export default Header
