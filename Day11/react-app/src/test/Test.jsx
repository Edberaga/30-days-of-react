import React from 'react'

const Test = () => {
    const [fieldValue, setFieldValue] = React.useState('');

    const handleBlur = (e) => setFieldValue("It has been Blur!");
    const handleInput = (e) => setFieldValue("It has been Inputted");
    const handleChange = (e) => setFieldValue("It has been Changed");
  
    console.log(fieldValue);

    return (
      <section>
        <div className='input-section'>
          <span>onInput:</span> <input type="text" onInput={handleInput} />
          <span>onChange:</span> <input type="text" onChange={handleChange} />
          <span>onBlur:</span> <input type="text" onBlur={handleBlur} />
        </div>
        <p>{fieldValue}</p>
      </section>
    )
}

export default Test