import React from 'react'

export const UseStateDemo1 = () => {

  var count =0;

  const increseCount = ()=>{
    //alert("function called..")
    console.log("count = ",count)
    count++;
    console.log("count after inc.. = ",count)
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 1</h1>
        <h2>Count = {count}</h2>
        <button onClick={increseCount}>increse</button>
        <button onClick={()=>{increseCount()}}>increse 1</button>
    </div>
  )
}
