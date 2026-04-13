import React, { useState } from 'react'

export const UseStateDemo2 = () => {

    
    const [count,setCount] = useState(0)
    //count --> state variable
    //setCount -->settr function
    //setCount is functoin it is use for update value of count
    //we will not update count value directly without using setFunction
    //useState(0) -->0 is initial value of count.

    const increseCount = ()=>{
        //count++  --> it will not work..
        setCount(count+1)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE SATTE DEMO 2</h1>
        <h1>count = {count}</h1>
        <button onClick={increseCount}>+</button>
    </div>
  )
}
