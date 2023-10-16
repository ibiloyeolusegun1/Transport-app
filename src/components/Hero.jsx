import React from 'react'
import map from '../assets/map-heroo.png'
import "./main.css"

const Hero = () => {
  return (
    <section className="hero" id='hero'>
        <div className="hero-container inner-w padding">
            <div className="content">
                <div className='detail'>
                    <span>Ship to and from anywhere in the world</span>
                    <h1>Find the best freight <br /> quote</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elithfdh. Rem, facilis? Natus perspiciatis vitae inventore! Aliquid nam nulla culpa eius corporis nesciunt hic labore non, repellat quis quidem doloremque eligendi aperiam.</p>
                    <div className="search">
                        <input type="text" placeholder='Search for container No or Booking ID' />
                        <button className='btn-search'>Tarck Order</button>
                    </div>
                </div>
                <div className='image'>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
