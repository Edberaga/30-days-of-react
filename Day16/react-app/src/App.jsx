import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Component'
import { StyledButton } from './component/HiComponent'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button text="No Style Button" />
      <StyledButton text="Styled Button" />
    </div>
  )
}

export default App
