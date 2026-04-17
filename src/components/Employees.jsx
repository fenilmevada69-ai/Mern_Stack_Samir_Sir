import React, { useState } from 'react'
import { EmployeeList } from './EmployeeList'

export const Employees = () => {

    const employeeData = [
        {id:1,name:"amit",age:23,salary:23000},
        {id:2,name:"raj",age:25,salary:33000},
        {id:3,name:"jay",age:24,salary:43000},
    ]
    var title=  "Emp-App"
    const [count, setcount] = useState(0)

  return (
    <div style={{textAlign:"center"}}>
        <h1>EMPLOYEE COMPONENET</h1>

        {/* //child component */}
        <EmployeeList employeeData ={employeeData} title ={title} count={count}></EmployeeList> 

        {/* <EmployeeList empData ={employeeData}></EmployeeList>  */}
    </div>
  )
}
