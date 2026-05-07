// import React from 'react'

// export const StudentList = (props) => {
//     //{studentData:[],deleteStudent:func}
//     console.log("studentList props",props)
//   return (
//     <div>
//         <h1>STUDENT LIST</h1>
//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th>id</th>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>ACTION</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     props.studentData.map((stu)=>{
//                         return <tr>
//                             <td>{stu.id}</td>
//                             <td>{stu.name}</td>
//                             <td>{stu.age}</td>
//                             <td>
//                                 <button onClick={()=>{props.deleteStudent(stu.id)}} className='btn btn-danger'>DELETE</button>
//                             </td>
//                         </tr>
//                     })
//                 }
//             </tbody>

//         </table>
//     </div>
//   )
// }





export const StudentList = (props) => {
    
    return (
        <div>
            <h1>StudentList</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.studentData.map((stu) => {
                            return <tr>
                                <td>{stu.id}</td>
                                <td>{stu.name}</td>
                                <td>{stu.age}</td>
                                <td>
                                    <button onClick={() => {props.deleteStudent(stu.id)}} className="btn btn-danger">DELETE</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}