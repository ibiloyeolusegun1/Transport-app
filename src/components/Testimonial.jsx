import React from 'react'
import "./main.css"
import reviewImg from '../assets/review.png'
import { FaStar, FaQuoteLeft, FaQuoteRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa6'


const Testimonial = () => {
  return (
    <section className='testimonial' id='testimonial'>
      <div className="testi-container inner-w padding">
        <div className="titleWrap">
          <h3>Testimonials</h3>
          <div className="title">Our Valuable & Trusted Clients</div>
        </div>
        <div className="card-container">
          {/* <div className="arrow-icon1 arrow-l">
            <FaArrowLeft className='arrow'/>
          </div> */}
          <div className="card">
            <div className="card-img">
              <div className="image">
                <img src={reviewImg} alt="" />
              </div>
              <h3>Loveth Shola</h3>
              <p>Founder and CEO OF PREMIUM</p>
            </div>
            <div className="card-text">
              <p><FaQuoteLeft className='icon left-icon' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aliquid animi maiores minus ullam quae labore, repellat delectus saepe incidunt ipsa qui amet ex, nihil recusandae molestias in. Minima nulla ipsam consectetur sequi inus ullam quae labore.<FaQuoteRight className='icon right-icon' /></p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <div className="image">
                <img src={reviewImg} alt="" />
              </div>
              <h3>Loveth Shola</h3>
              <p>Founder and CEO OF PREMIUM</p>
            </div>
            <div className="card-text">
              <p><FaQuoteLeft className='icon left-icon' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aliquid animi maiores minus ullam quae labore, repellat delectus saepe incidunt ipsa qui amet ex, nihil recusandae molestias in. Minima nulla ipsam consectetur sequi inus ullam quae labore.<FaQuoteRight className='icon right-icon' /></p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <div className="image">
                <img src={reviewImg} alt="" />
              </div>
              <h3>Loveth Shola</h3>
              <p>Founder and CEO OF PREMIUM</p>
            </div>
            <div className="card-text">
              <p><FaQuoteLeft className='icon left-icon' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aliquid animi maiores minus ullam quae labore, repellat delectus saepe incidunt ipsa qui amet ex, nihil recusandae molestias in. Minima nulla ipsam consectetur sequi inus ullam quae labore.<FaQuoteRight className='icon right-icon' /></p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          {/* <div className="arrow-icon2 arrow-r">
            <FaArrowRight className='arrow'/>  
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
