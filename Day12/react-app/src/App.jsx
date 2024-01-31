import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './component/Input'
import Form from './component/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Input/>
      <Form/>
    </>
  )
}

export default App
