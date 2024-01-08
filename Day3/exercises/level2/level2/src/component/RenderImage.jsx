import React from 'react'
import image from '../images/frontend_technologies.png'

const RenderImage = ({width}) => {
  return (
    <div>
        <img style={{width: (width) ? "100%" : ""}} src={image} alt="Frontend Technology" />
    </div>
  )
}

export default RenderImage