// import React from 'react'

// export const MyTable = (props) => {
//     //{columns:[],data:[]}
//     //console.log("object.entries",Object.keys({id:1,name:"amit",age:23}))
//     //[columns=["id",name]]
//     //const rows = [
// //     {id:1,name:"amit"},
// //     {id:2,name:"sumit"},
// //     {id:3,name:"ajay"}
// //   ]
//   return (
//     <table className='table'>
//         <thead>
//             <tr>
               
//                 {
//                     props.columns.map((col)=>{
//                         return <th>{col}</th>
//                     })
//                 }
//             </tr>
//         </thead>
//         <tbody>
         
//             {
//                 props.data.map((d)=>{
//                     //d ={id:1,name:"amit"}
//                     return <tr>
//                         {
//                             Object.keys(d).map((k)=>{
//                                 //k = id , k = name
//                                 return <td>{d[k]}</td> // //d ={id:1,name:"amit"} //d[id],d[name]
//                             })
//                         }
//                     </tr>
//                 })
//             }
//         </tbody>
//     </table>
//   )
// }




export const MyTable = (props) => {
    return (
        <div style={{textAlign: "center"}}>
            <table className="table">
                <thead>
                    <tr>
                        {
                            props.col.map((val) => {
                                return <th>{val}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.row.map((d) => {
                            //d = {id:102, name: "raju", age:21}
                            return <tr>
                                {
                                    Object.keys(d).map((k) => {
                                        return <td>{d[k]}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}