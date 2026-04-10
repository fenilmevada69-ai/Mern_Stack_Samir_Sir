import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {
    var teamList = [
        {id:101,name:"CSK"},
        {id:201,name:"RCB"},
        {id:301,name:"MI"},
        {id:401,name:"RR"},
        {id:501,name:"DC"},
        {id:601,name:"KKR"},
        {id:701,name:"LSG"},
        {id:801,name:"GT"},
        {id:901,name:"SRH"},
        {id:1001,name:"PBKS"},

    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>TEAMS</h1>
        {
            teamList.map((team,index)=>{
                //return <li>{index+1} - {team.name}</li>
                return <li>
                    {index+1} - 
                    <Link to={`/teamdetail/${team.id}`}>{team.name}</Link>
                </li>
            })
        }
    </div>
  )
}
