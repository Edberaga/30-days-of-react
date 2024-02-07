import React, { useState } from 'react'

const Form = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
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
    
    //validates email
    if(!values.email.trim()) {
        newError.email = 'Email is required!';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newError.email = 'Invalid email format';
    }
    
    //validates password
    if(!values.password.trim()) {
        newError.password = 'Password is required!';
    } 
    
    //validates confirm password
    if(values.password !== values.password2) {
        newError.password2 = 'Password is not Matched!';
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

        <label htmlFor="mail">Email: </label>
        <input 
          type="email" 
          id='mail'
          name='email'
          value={values.email}
          onChange={handleChange}
        />
        {error.email && <p>{error.email}</p>}

        <label htmlFor="password">Email: </label>
        <input 
          type="password" 
          id='password'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
        {error.password && <p>{error.password}</p>}

        <label htmlFor="password">Email: </label>
        <input 
          type="password" 
          id='password'
          name='password'
          value={values.password2}
          onChange={handleChange}
        />
        {error.password2 && <p>{error.password2}</p>}
      </div>
      <p>{values.username}</p>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default Form