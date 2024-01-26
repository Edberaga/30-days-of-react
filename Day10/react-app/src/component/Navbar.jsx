import React from 'react'

const Navbar = ({ func }) => {
  return (
    <nav>
        <button onClick={func}>Change Color</button>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar