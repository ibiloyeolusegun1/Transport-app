import React from 'react'

const Contact = () => {
  return (
    <section className="contact" id='contact'>
        <div className="contact-container inner-w padding">
            <div className="form-container">
                <form action="">
                    <div className="form-box">
                        <input type="text" placeholder='Your Name' className='box' />
                        <input type="email" placeholder='Your Email' className='box' />
                    </div>
                    <div className="form-box">
                        <input type="text" placeholder='Phone Number' className='box' />
                        <input type="email" placeholder='Country' className='box' />
                    </div>
                    <div className="form-box">
                        <input type="text" placeholder='Company Name' className='box' />
                        <select name="" id="" className='box'>
                            <option value="Interested in">Interested in</option>
                            <option value="Traveling">Traveling</option>
                            <option value="Tour">Tour</option>
                        </select>
                    </div>
                    <textarea name="" id="" cols="30" rows="2" placeholder='Message' className='box'></textarea>
                </form>
                <div className="content">
                    <h1>Let's Connect with us!</h1>
                    <h1>Discuss for grow...</h1>
                    <p>Thank you for getting in touch!</p>
                    <p>Kindly. Fill in the form, have a great day.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
