import React from 'react'
import { MyButton } from '../MyButton'
import { MyCard } from '../MyCard'

export const NetflixHome = () => {

  const homeDemo = ()=>{
    alert("netflix home demo..")
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>NETFLIX HOME COMPONENT</h1>
        <MyButton func = {homeDemo}  name ="home" bg="red"></MyButton>

        <MyCard></MyCard>
        
    </div>
  )
}
