import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SeasonChanger from './component/SeasonChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SeasonChanger/>
    </>
  )
}

export default App
