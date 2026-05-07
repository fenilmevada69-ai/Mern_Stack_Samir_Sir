// import React from 'react'

// export const MyTable2 = (props) => {
//     //3 object --> {id,,name,age}
//   return (
//     <div>
//         <table className='table table-dark'>
//             <thead>
//                 <tr>
//                     {
//                       props.columns.map((c)=>{
//                         return <th>{c}</th>
//                       })
//                     }
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     props.rows.map((r)=>{
//                         //r --> {id:1,name:"",age:23}
//                         return <tr>
//                             {
//                                 Object.keys(r).map((d)=>{
//                                     return<td>{r[d]}</td>
//                                 })
//                             }
//                         </tr>
//                     })
//                 }
//             </tbody>
//         </table>
//     </div>
//   )
// }




export const MyTable2 = (props) => {
    return (
        <div>
            <table className="table table-dark">
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
                        props.row.map((val) => {
                            return <tr>
                                {
                                    Object.keys(val).map((k) => {
                                        return <td>{val[k]}</td>
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