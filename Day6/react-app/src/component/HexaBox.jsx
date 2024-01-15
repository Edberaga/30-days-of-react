import React from 'react'

const ArrayHexa = [
    "#faceee",
    "#4e417e",
    "#45defc",
    "#0143ed",
    "#d98590"
]

const Box = ({prop}) => { 
    return (
        <div style={{
            backgroundColor: prop,
            textAlign: "center",
            width: "100px",
            padding: "25px",
            boxSizing: "border-box"
        }}>
            <p>{prop}</p>
        </div>
    )
}

const HexaBox = () => {
  return (
    <div className="container">
        <div style={{
            display: "flex",
            flexFlow: "row wrap",
            gap: "10px",
        }}
        className='Box'>
        {ArrayHexa.map((par) => {
            return (
                <Box prop={par}/>
            )
        })}
        </div>
    </div>
  )
}

export default HexaBox