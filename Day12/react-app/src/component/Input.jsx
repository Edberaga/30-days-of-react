import React from 'react'
import { useState } from 'react'

const Input = () => {
  const [firstName, setFirstName] = useState('');
  const handleInput = (e) => {
    setFirstName(e.target.value);
  }
  return (
    <div>
      <input type="text" id="firstName" onChange={handleInput} />
      <h1>{firstName}</h1>
    </div>
  )
}

export default Input