// import React from 'react'
// import { MyTable } from './MyTable'
// import { MyTable2 } from './MyTable2'
// import { MyTable3 } from './MyTable3'

// export const TableDemo = () => {

//   const columns = ["id","name","age"]
//   const rows = [
//     {id:1,name:"amit",age:23},
//     {id:2,name:"sumit",age:24},
//     {id:3,name:"ajay",age:25}
//   ]
//   const products = [
//     {id:1,name:"iphone",price:1200,color:"blue",cap:"256"},
//     {id:2,name:"iphone",price:1200,color:"blue",cap:"512"}
//   ]

//   return (
//     <div>
//         <h1>TABLE DEMO </h1>
//         {/* <MyTable columns ={columns} data = {rows}></MyTable>
//         <MyTable2 columns={columns} rows={rows}></MyTable2> */}
//         <MyTable3 data={rows}></MyTable3>
//         <MyTable3 data={products}></MyTable3>
//     </div>
//   )
// }


import {MyTable} from './MyTable'; 
import {MyTable2} from './MyTable2'; 
import {MyTable3} from './MyTable3'; 
export const TableDemo = () => {
    const coloumns = ["id", "name", "age"];
    const rows = [
      {id: 101, name: "amit", age: 20},
      {id: 102, name: "raju", age: 21},
      {id: 103, name: "john", age: 22},
    ]
    const products = [
      {id: 1, name: "iphone", price: 1200, color: "blue", cap: "256"},
      {id: 2, name: "samsung", price: 1000, color: "green", cap: "512"},
      {id: 3, name: "redmi", price: 800, color: "red", cap: "128"},
      {id: 4, name: "oneplus", price: 1500, color: "black", cap: "256"}
    ];
    return (
        <div style={{textAlign: "center"}}>
            <h1>Table Demo</h1>
            <MyTable col={coloumns} row={rows}></MyTable>
            <MyTable2 col={coloumns} row={rows}></MyTable2>
            <MyTable3 data={products}></MyTable3>
        </div>
    )
}