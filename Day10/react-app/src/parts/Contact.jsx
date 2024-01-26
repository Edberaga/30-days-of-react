import React from 'react'

const Contact = () => {
  return (
    <section className="container" id="contact">
      <div className='contact-form'>
        <form action="">
          <input type="text" placeholder='Your name' className='input'/>
          <input type="email" name="" id="" placeholder='Your email' className='input'/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Your message' className='input'></textarea>
        </form>
      </div>

      <div>
        <h2>Email: edbertjonnathan@gmail.com</h2>
        <h2>Phone: +6282169672989</h2>
      </div>
    </section>
  )
}

export default Contact