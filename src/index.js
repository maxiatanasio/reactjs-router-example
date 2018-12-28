import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";

import NavBar from "./Components/NavBar.jsx";
import Router from "./Components/Router.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Router Example</h1>
        <NavBar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
