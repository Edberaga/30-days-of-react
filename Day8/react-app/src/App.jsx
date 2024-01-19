import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlagChanger from './component/FlagChanger';

function App() {
  const [color, setColor] = useState("black-bg");
  const changeColor = () => {
    if(color === "black-bg") {
      setColor("white-bg");
    }
    else {
      setColor("black-bg");
    }
  }

  return (
   <div className={`App ${color}`}>
    <h1>State Management Exercises</h1>
    <button onClick={() => changeColor()}>Change Background</button>
    <FlagChanger/>
   </div>
  )
}

export default App
