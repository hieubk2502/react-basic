import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";

import { mydata } from "../data.js";

function App() {
  return (
    <>
      <Header />

      <section id="core-concepts">
        <h2>Fundamental in React</h2>
        <ul>
          <MainContent {...mydata[0]} />
          <MainContent {...mydata[1]} />
          <MainContent {...mydata[2]} />
          <MainContent {...mydata[3]} />
        </ul>
      </section>
    </>
  );
}

export default App;
