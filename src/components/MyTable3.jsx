import React from 'react'

export const MyTable3 = (props) => {
    //{data:[{},{},{}]}
  return (
    <div>
        <table className='table table-dark'>
            <thead>
                <tr>
                    {
                        //object.keys({id:1,name.age})[].map
                        Object.keys(props.data[0]).map((d)=>{
                            return<th>{d}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((r)=>{
                        return<tr>
                            {
                                Object.keys(r).map((d)=>{
                                    return <td>{r[d]}</td>
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
