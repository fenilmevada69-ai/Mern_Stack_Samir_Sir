import React from "react";
import { Link } from "react-router-dom";

export const NetflixMovies = () => {
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
    </div>
  );
};
