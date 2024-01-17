import React from 'react'
import { useState } from 'react';

const Day = () => {
  // Initialize the state to store the current date
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to calculate the previous day
  const getPreviousDay = () => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(previousDate);
  };

  // Format the date in a readable format
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div>
      <h1>Current Date: {formattedDate}</h1>
      <button onClick={getPreviousDay}>Get Previous Day</button>
      <p>Previous Day: {formattedDate}</p>
    </div>
  );
}

export default Day