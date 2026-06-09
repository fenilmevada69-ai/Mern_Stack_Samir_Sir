import React, { useState } from 'react'
import { Loader } from "../Loader";
import axios from 'axios';

export function APIDemo1() {

    const [message, setmessage] = useState("");
    const [users, setusers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    
    const getUsers = async () => {
        setLoading(true);
        const res = await axios.get("https://node5.onrender.com/user/user/");
        console.log("res.. axios... object", res);
        console.log("api response...",res.data.data)
        setusers(res.data.data);
        setLoading(false);
    } 

    return (
      <div style={{textAlign: "center"}}>
          <h1>API1Demo1</h1>
          <h2>Get API</h2>
          <h1>{message}</h1>
          <button onClick={getUsers}>GET</button>
          {
              isLoading && <Loader/>
          }
          {
              users.map((user) => {
                  return <li>{user.name} --- {user.age}</li>             
              })
          }
      </div>
  )
}