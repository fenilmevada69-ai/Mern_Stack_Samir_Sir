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

function App() {
 

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      {/* <MapDemo2></MapDemo2> */}
      {/* <MapDemo3></MapDemo3> */}
      {/* <MapDemo4></MapDemo4> */}
      <MapDemo5></MapDemo5>
      {/* <MapDemo1></MapDemo1> */}
      {/* <ConditinalStylingDemo1></ConditinalStylingDemo1> */}
      {/* <ContentComponent></ContentComponent> */}
      {/* <FooterComponent></FooterComponent> */}
    </div>
  );
}

export default App;
