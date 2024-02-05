import React from "react";
import Button from "./Component";

const buttonWithStyle = (CompProp) => {
    const style = {
      backgroundColor: '#61dbfb',
      padding: '10px 25px',
      border: 'none',
      borderRadius: 5,
      margin: 3,
      cursor: 'pointer',
      fontSize: 18,
      color: 'white',
    }
    return (props) => {
      return <CompProp {...props} style={style} />
    }
}

export const StyledButton = buttonWithStyle(Button);