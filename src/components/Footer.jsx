import React from 'react'
import logo from '../assets/logo.png'
import footerMap from '../assets/footer-map.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className='footer' id='footer'>
        <div className="footer-container inner-w padding">
            <div className="box">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur elit. Optio reprehenderit facilis nemo sint voluptatibus consequatur nostrum atque. Iure perferendis asperiores voluptatibus dolor blanditiis, natus sit quidem obcaecati aspernatur temporibus!</p>
                <div className="social-icons">
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaLinkedinIn/>
                    <FaInstagram/>
                </div>
            </div>
            <div className="box">
                <h1>Pages</h1>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Products</a></li>
            </div>
            <div className="box">
                <h1>Contact</h1>
                <div className='b-flex'>
                    <FaPhone className='icon'/> 
                    <li>+234 9039176489</li>
                </div>
                <div className='b-flex'>
                    <FaEnvelope className='icon'/> 
                    <li>Ibiloyeolusegun.1@gmail.com</li>
                </div>
                <div className='b-flex'>
                    <FaLocationDot className='icon'/> 
                    <li>20101 Adankolo Lokoja, Kogi State.</li>
                </div>
            </div>
            <div className="box map-box">
                <h1>Maps Locations</h1>
                <img src={footerMap} alt="" width={950}/>
            </div>
        </div>
        <div className="f-bottom">
            <div className="bottom inner-w padding">
                <p>&copy; 2023 YourTrans | Powered by OG-Tech</p>
                <div className="social-icons">
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaLinkedinIn/>
                    <FaInstagram/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
