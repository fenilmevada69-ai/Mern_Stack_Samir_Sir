import React from "react";
import { Link } from "react-router-dom";

export const NetflixShows = () => {
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
    </div>
  );
};
