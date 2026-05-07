// import React, { useState } from 'react'
// import { StudentList } from './StudentList'

// export const Student = () => {

//     const [studentData, setstudentData] = useState([
//         {id:1,name:"amit",age:23},
//         {id:2,name:"raj",age:24},
//         {id:3,name:"jay",age:25},
//     ])

//     //id =1
//     const deleteStudent = (id)=>{
//         //alert(id) pop splice
//         const afterdelete = studentData.filter((stu)=>stu.id != id) //1!=1 2!=1 true,3!=1 true
//         console.log("after delete...",afterdelete) //[,,]
//         setstudentData(afterdelete)

//         //setstudentData(studentData.filter((stu)=>stu.id!=id))
       
//     }

//   return (
//     <div style={{textAlign:"center"}}>
//         <h1>STUDENT COMPONENT</h1>
//         <StudentList studentData = {studentData} deleteStudent ={deleteStudent} ></StudentList>
//     </div>
//   )
// }





import React,{useState} from 'react'
import {StudentList} from './StudentList';
export const Student = () => {
    const [studentData, setStudentData] = useState([
        {id: 101, name: "Amit", age:23},
        {id: 102, name: "Raj", age:24},
        {id: 103, name: "Jay", age:25},
    ]);

    const deleteStudent = (id) => {
        const afterDelete = studentData.filter((stu) => {
            return stu.id != id
        })
        setStudentData(afterDelete);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Student Component</h1>
            <StudentList deleteStudent={deleteStudent} studentData={studentData}></StudentList>
        </div>
    );
}