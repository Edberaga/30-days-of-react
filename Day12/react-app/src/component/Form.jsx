import React, { useState } from 'react'

const Form = () => {
  const [values, setValues] = useState({
    username: '',
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; //capture the input value and its name
    setValues({
        ...values,
        [name]: value,
    });
  }

  const validation = () => {
    const newError = {};
    if(!values.username.trim()) {
        newError.username = 'Username is required';
    }

    setError(newError);

    return Object.keys(newError).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //per5form form validtion before submitting
    if(validation()) {
        console.log('Form Submitted: ', values);
    }
    else {
        console.log('Form has errors. Please fix them');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username: </label>
        <input 
            className='input'
            type='text'
            id='username'
            name='username'
            value={values.username}
            onChange={handleChange}
        />
        {error.username && <p>{error.username}</p>}
      </div>
      <p>{values.username}</p>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default Form