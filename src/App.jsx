import React from "react";
import TopMenu from "./TopMenu";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import "./App.css";
import Password from "./Password";

function App() {
  return (
    <>
      <div>
        <TopMenu />
      </div>
      <div>
        <p className="separador"></p>
        <Login />
      </div>
      <div>
        <p className="separador-pass"></p>
        <Password />
      </div>
    </>
  );
}

export default App;
