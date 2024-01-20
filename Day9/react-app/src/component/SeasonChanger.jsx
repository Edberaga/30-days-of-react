import React, { useState } from 'react'

const SeasonChanger = () => {
  const season = ['Spring', 'Autumn', 'Summer', 'Winter'];
  const [num, setNum] = useState(0);
  const changeSeason = () => {
    if(num === season.length - 1) {
        setNum(0);
    }
    else {
        setNum(num + 1);
    }
  }
  return (
    <div className="Box">
        <h1>{season[num]}</h1>
        {
            (num === 0) ? <p>It's Sprriiiingg</p> :
            (num === 1) ? <p>Autumn now!</p> :
            (num === 2) ? <p>Oh Summer... it's so hot...</p> :
            (num === 3) ? <p>Yeiy, Snowball Fight</p> :
            <p>What season is this?</p>
        }
        <button onClick={changeSeason}>Change season</button>
    </div>
  )
}

export default SeasonChanger