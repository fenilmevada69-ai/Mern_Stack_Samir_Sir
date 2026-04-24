import React from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../MyButton";

export const NetflixShows = () => {

  const showDemo = (x)=>{
    alert("callled..."+x)
  }
  
  const shows = [
    { name: "Breaking Bad", id: 101 },
    { name: "Money Heist", id: 102 },
    { name: "Stranger Things", id: 103 },
    {name:"Friends",id:104}
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>NetflixShows</h1>
      {
        shows.map((show)=>{
          return <li>
            <Link to={`/watch/${show.name}`}>{show.name}</Link>
          </li>
        })
      }
      <MyButton name="shows" func ={()=>{showDemo(100)}} bg ="yellow" ></MyButton>
    </div>

    
  );
};
