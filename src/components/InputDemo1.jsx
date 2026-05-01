import React, { useState } from 'react'

export const InputDemo1 = () => {
    //input onChange event
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [isClicked, setisClicked] = useState(false)

    const nameHandler = (event)=>{
        //console.log("name handler called...",event)
        console.log(event.target.value)
        setname(event.target.value) //updating name value by using setname
    }
    const emailHandler = (e)=>{
        //e == event
        console.log(e.target.value)
        setemail(e.target.value)
    }
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO 1</h1>
        <div>
            <label>NAME :</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>EMAIL :</label>
            <input type='text' onChange={(e)=>{emailHandler(e)}}></input>
            {/* {email} */}
        </div>
        <div>
            <label>Address :</label>
            <input type='text' onChange={(event)=>{setaddress(event.target.value)}}></input>
            {/* {address} */}
        </div>
        <button onClick={()=>{setisClicked(true)}}>CLICK</button>

        {
        isClicked == true && 
        <div>
            <h1>OUTPUT</h1>
            <h1>Name = {name}</h1>
            <h2>Email = {email}</h2>
            <h3>Address ={address}</h3>
        </div>
    }
        
    </div>
  )
}
