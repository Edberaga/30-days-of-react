import React from 'react'

const Heading = ({prop}) => <h1>{prop}</h1>

const Paragraph = ({prop}) =>  <p>{prop}</p>

const Input = ({prop, prop_type}) => {
    return (
    <input
      style={{
        padding: "10px 15px",
        margin: "0 10px",
        borderRadius: "5px",
        border: "0",
      }}
      type={(prop_type) ? prop_type : "text"} 
      placeholder={prop} 
    />
)}

const Button = ({prop}) => {
    return (
    <button 
      style={{
        backgroundColor: "#f88",
        color: "white",
        padding: "12px 50px",
        width: "340px",
        borderRadius: "5px",
        border: "0",
      }}
    >
        {prop}
    </button>
)}

const Subcriber = () => {
  return (
    <section style={{
        backgroundColor: "#cef", 
        padding:"75px 25px", 
        marginTop: "50px",
        gap: "15px",
        
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Heading prop="SUBCRIBE" />
        <Paragraph prop="Sign up with your email address to receive news and updates" />
        <div>
            <Input prop="First name"/> 
            <Input prop="Last name"/> 
            <Input type="email" prop="Email"/>
        </div>
        <Button prop="Subcribe" />
    </section>
  )
}

export default Subcriber