import React from 'react'
import { MyTable } from './MyTable'
import { MyTable2 } from './MyTable2'
import { MyTable3 } from './MyTable3'

export const TableDemo = () => {

  const columns = ["id","name","age"]
  const rows = [
    {id:1,name:"amit",age:23},
    {id:2,name:"sumit",age:24},
    {id:3,name:"ajay",age:25}
  ]
  const products = [
    {id:1,name:"iphone",price:1200,color:"blue",cap:"256"},
    {id:2,name:"iphone",price:1200,color:"blue",cap:"512"}
  ]

  return (
    <div>
        <h1>TABLE DEMO </h1>
        {/* <MyTable columns ={columns} data = {rows}></MyTable>
        <MyTable2 columns={columns} rows={rows}></MyTable2> */}
        <MyTable3 data={rows}></MyTable3>
        <MyTable3 data={products}></MyTable3>
    </div>
  )
}
