import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};

export default App;
