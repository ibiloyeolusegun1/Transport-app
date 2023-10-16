import React from 'react'
import "./main.css"
import aboutImg from "../assets/about.png"

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="about-container inner-w padding">
            <div className="content">
                <div className="detail">
                    <div className="title">Who we are</div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, sapiente nam. Amet qui enim consequatur quos consequuntur iste saepe suscipit vero tempora esse earum recusandae nisi in unde, quia et?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis distinctio illum quia, iste optio ab nobis magnam eum molestiae recusandae? Non libero repellendus, saepe nobis rem hic quod quos dolores cupiditate alias delectus aspernatur atque.</p>
                    <button className='btn'>Know more</button>
                </div>
                <div className="image">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
