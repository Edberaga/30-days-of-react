import React, { useState } from 'react'

import indianFlag from '../assets/india.png'
import chinaFlag from '../assets/china.jpg'
import usFlag from '../assets/US.png'

const FlagChanger = () => {
  const countries= [
    {
      name: "India",
      img: indianFlag,
      language: "Indian",
      population: 1428627663,
      currency: "Rupee"
    },
    {
      name: "China",
      img: chinaFlag,
      language: "Mandarin",
      population: 1425671352,
      currency: "Yuan"
    },
    {
      name: "United State of America",
      img: usFlag,
      language: "English (US)",
      population: 339996563,
      currency: "Dollar (US)"
    }
  ];

  const [index, setIndex] = useState(0);
  const changeIndex = (e) => {
    if(index === 2) {
      setIndex(0);
    }
    else {
      setIndex(index + 1);
      console.log("button clicked", index);
    }
  }

  return (
    <div className="box">
      <img src={`${countries[index].img}`} width="100px" alt="" />
      <p>Country: {countries[index].name}</p>
      <p>Language: {countries[index].language}</p>
      <p>Population:  {countries[index].population}</p>
      <p>Currency: {countries[index].currency}</p>

      <button onClick={changeIndex}>Change Country</button>
    </div>
  )
}

export default FlagChanger