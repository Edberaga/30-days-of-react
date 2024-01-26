import { useState } from 'react'
import './App.scss'
import Intro from './parts/Intro'
import About from './parts/About'
import Skill from './parts/Skill'
import Contact from './parts/Contact'
import Navbar from './component/Navbar'

function App() {
  const [color, setColor] = useState(true)
  const ChangeColor = () => {
    setColor(!color);
    console.log("black background: ", color)
  }

  return (
    <div className={(color) ? "bg-black" : "bg-white"}>
      <Navbar func={ChangeColor}/>
      <main>
        <Intro/>
        <About/>
        <Skill/>
        <Contact/>
      </main>
    </div>
  )
}

export default App
