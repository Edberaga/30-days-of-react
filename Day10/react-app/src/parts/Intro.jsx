import React from 'react'
import ProfilePic from '../assets/images/green-mage.png'

const Intro = () => {
  return (
    <section className='container' id="home">
      <div>
        <div className="image-container">
          <img src={ProfilePic} alt="edberaga" />
        </div>
      </div>

      <div>
        <h1>Jonnathan Edbert Halim</h1>
        <h2>Web Developer</h2>
        <p>Welcome to my portfolio!</p>
      </div>
    </section>
  )
}

export default Intro