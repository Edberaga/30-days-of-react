import React from 'react'
import { useEffect } from 'react';

const Console = () => {
  useEffect(() => {
    // Code for componentDidMount
    console.log("Component did Mount");

    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means it only runs once (on mount)
}

export default Console