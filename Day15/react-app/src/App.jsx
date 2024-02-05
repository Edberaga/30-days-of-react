import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Classname from './component/Classname'

function App() {

  return (
    <main>
      {Classname('foo', 'bar')}
    </main>
  )
}

export default App
