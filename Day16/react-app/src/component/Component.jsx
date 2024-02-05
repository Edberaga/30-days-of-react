import React from "react";

const handleClick = (e) => {
    alert(`You press the ${e} button!`);
}

const Button = ({style, text, onClick = handleClick(text)}) => {
  return(
    <button onClick={(e) => onClick(e)} style={style}>
      {text}
    </button>
  )
}

export default Button