import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { HeaderComponent } from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { ContentComponent } from "./components/ContentComponent";
import { ConditinalStylingDemo1 } from "./components/ConditinalStylingDemo1";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { MapDemo5 } from "./components/MapDemo5";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/Netflix/NetflixHome";
import { NetflixMovies } from "./components/Netflix/NetflixMovies";
import { NetflixShows } from "./components/Netflix/NetflixShows";
import { HomeComponent } from "./components/HomeComponent";
import { Navbar } from "./components/Navbar";
import { Error404 } from "./components/Error404";
import { Watch } from "./components/Netflix/Watch";

function App() {
 

  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element ={<HomeComponent/>}></Route>
          <Route path="/netflixhome" element={<NetflixHome/>}></Route>
          <Route path="/netflixmovies" element={<NetflixMovies/>}></Route>
          <Route path="/shows" element ={<NetflixShows/>}></Route>
          {/* <Route path="/watch" element = {<Watch/>}></Route> */}
          {/* <Route path="/watch/dhurandhar" element = {<Watch/>}></Route> */}
          <Route path="/watch/:name" element = {<Watch/>}></Route>
          <Route path="/*" element = {<Error404/>}></Route>
          
        </Routes>
    </div>
  );
}

export default App;
