import React, { useState } from 'react';

const FormPage = () => {
  const [formValues, setFormValues] = useState({});
  const [isFormDirty, setIsFormDirty] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setIsFormDirty(true);
  };

  const handleSubmit = (e) => {
    // Submit form logic
    if(isFormDirty === false) {
      alert("You haven't write anything...")
    }
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formValues.name || ''}
          onChange={handleChange}
        />
        {/* Additional form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;