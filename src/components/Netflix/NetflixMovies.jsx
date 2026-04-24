import React from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../MyButton";
import { MyCard } from "../MyCard";

export const NetflixMovies = () => {

  const moviesDemo = (x)=>{
    alert("movies demo.."+x)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>NETFLIX MOIVES</h1>
      <ul>
        <li>
          <Link to="/watch/dhurandhar">Dhurandhar</Link>
        </li>
        <li>
          <Link to="/watch/network">Network</Link>
        </li>
        <li>
          <Link to="/watch/social">Social</Link>
        </li>
      </ul>

      <MyButton func = {moviesDemo}></MyButton>
      <MyButton func ={()=>{moviesDemo("abc")}} name="test2"></MyButton>
      {
        Array.from({length:10}).map((elm,index)=>{
          return <MyCard width="200px"></MyCard>
        })
      }
    </div>
  );
};
