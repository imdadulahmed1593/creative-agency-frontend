import React from 'react'
import "./Hero.css"
function Hero() {
    return (
        <div className="hero d-flex align-items-center row">
            <div className="hero__info col-md-5 offset-md-1">
            <h1>Let's Grow Your Brand to the Next Level</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iste voluptas. Molestias minus dolorum eaque minima soluta animi aperiam voluptates.</p>
            <button className="btn btn-lg btn-dark">Hire Us</button>
            </div>
            <div className="col-md-6">
            <img class="img-fluid" src={require("../../images/logos/Frame.png")} alt=""/>
            </div>
        </div>
    )
}

export default Hero
