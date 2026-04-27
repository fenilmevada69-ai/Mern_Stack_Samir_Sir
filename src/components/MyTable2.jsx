import React from 'react'

export const MyTable2 = (props) => {
    //3 object --> {id,,name,age}
  return (
    <div>
        <table className='table table-dark'>
            <thead>
                <tr>
                    {
                      props.columns.map((c)=>{
                        return <th>{c}</th>
                      })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.rows.map((r)=>{
                        //r --> {id:1,name:"",age:23}
                        return <tr>
                            {
                                Object.keys(r).map((d)=>{
                                    return<td>{r[d]}</td>
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
