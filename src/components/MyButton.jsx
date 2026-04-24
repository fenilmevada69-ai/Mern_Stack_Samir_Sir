import React from 'react'

export const MyButton = (props) => {
  return (
    // <button style={{backgroundColor:"green"}}>TEST</button>
    //<button style={{backgroundColor:"green"}}>{props.name}</button>
    //<button style={{backgroundColor:"green"}}>{props.name || "Test"}</button>
    //<button style={{backgroundColor:props.bg || "blue"}}>{props.name || "Test"}</button>
    <button onClick={()=>{props.func()}} style={{backgroundColor:props.bg || "blue"}}>{props.name || "Test"}</button>
  )
}
