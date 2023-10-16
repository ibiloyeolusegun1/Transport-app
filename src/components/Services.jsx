import React from 'react'
import "./main.css"
import trainImg from '../assets/train1.jpg'
import furnitureImg from '../assets/furniture1.jpg'
import furnitureImg2 from '../assets/furniture2.jpg'
import planeImg from '../assets/plane2.jpg'
import planeImg2 from '../assets/plane1.jpg'
import busImg from '../assets/bus.jpg'
import planeNcarImg from '../assets/planeNcar.jpg'

const Services = () => {
  return (
    <section className='service' id='service'>
        <div className="service-container inner-w padding">
            <div className="title">Services</div>
            <div className="content">
                <div className="imageBox">
                    <img src={trainImg} alt="" />
                    <h3>Rail Express</h3>
                </div>
                <div className="imageBox">
                    <img src={furnitureImg} alt="" />
                    <h3>Near By Furniture</h3>
                </div>
                <div className="imageBox">
                    <img src={furnitureImg2} alt="" />
                    <h3>Surface Express</h3>
                </div>
                <div className="imageBox">
                    <img src={planeImg} alt="" />
                    <h3>Air Express</h3>
                </div>
                <div className="imageBox">
                    <img src={planeImg2} alt="" />
                    <h3>Domestic Express</h3>
                </div>
                <div className="imageBox">
                    <img src={busImg} alt="" />
                    <h3>Cold Chain Express</h3>
                </div>
                <div className="imageBox">
                    <img src={planeNcarImg} alt="" />
                    <h3>Near By Electronic</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
