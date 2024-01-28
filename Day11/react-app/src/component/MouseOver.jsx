import React from 'react'

const MouseOver = () => {
  const [fieldValue, setFieldValue] = React.useState('Come here');

  const handleMouseOver = (e) => setFieldValue("It is inside me!");
  const handleMouseOut = (e) => setFieldValue("Come here");
  return (
    <div className='mouse-section' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{fieldValue}</div>
  )
}

export default MouseOver