import React from 'react'

const ArrayNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const Box = ({prop}) => { 
    return (
        <div 
        style={{
            backgroundColor: (prop%2 === 0) ? "green" : "yellow",
            textAlign: "center",
            width: "100px",
            padding: "25px",
            boxSizing: "border-box"
        }}
        >
            <p>{prop}</p>
        </div>
    )
}

const OddEvenBox = () => {
  return (
    <div className="container">
        <div style={{
            display: "flex", 
            flexFlow: "row wrap",
            width: "75vw",
            gap: "10px"
        }}
        className='Box'>
            {ArrayNum.map((par) => {
                return (
                    <Box prop={par}/>
                )
            })}
        </div>
    </div>
  )
}

export default OddEvenBox