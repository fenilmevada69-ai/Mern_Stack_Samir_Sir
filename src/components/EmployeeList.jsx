import React from "react";

//props is not keyword
//props is readonly
//props data type is object.
export const EmployeeList = (props) => {
    console.log("props",props)
    //props ={employeeData:[],title:""}
  return (
    <div style={{ textAlign: "center" }}>
      <h1>EmployeeList </h1>
      {props.title}
      {
        props.employeeData.map((emp)=>{
          return <li>{emp.id} - {emp.name}-{emp.age}</li>
        })
      }
      <h1>Count = {props.count}</h1>
    </div>
  );
};
