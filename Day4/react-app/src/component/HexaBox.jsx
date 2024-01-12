import React from 'react'

const HexaBox = ({color}) => {
  return (
    <div
        style={{
            backgroundColor: `${color}`,
            boxSizing: 'border-box',
            width: "100%",
            padding: "25px",
            margin: "15px 0",
            color: "white",
            fontWeight: "600"
        }}
    >
        {color}
    </div>
  )
}

export default HexaBox