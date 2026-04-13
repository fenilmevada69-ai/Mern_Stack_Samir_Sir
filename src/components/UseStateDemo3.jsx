import React, { useState } from 'react'

export const UseStateDemo3 = () => {

    const[flag,setFlag]=useState(true)
    const stopLoader = ()=>{
        //falg = false;
        setFlag(false)

    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 3</h1>
        <h2>{flag == true?"TRUE":"FALSE"}</h2>
        {
            flag == true  && <h1>LOADING....</h1>
        }
        <button onClick={stopLoader}>stop</button>
        
    </div>
  )
}

