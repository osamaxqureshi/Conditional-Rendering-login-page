import React from "react";
import Login from "./Login";

var isLoggedIn = false;
const strikeThrough = { textDecoration: "line-through" };

function App() {
  return <div className="container">{  isLoggedIn ?  <h1>Hello</h1> : <div>
  <h1 style={isLoggedIn === false ? strikeThrough : null}>Hello</h1>
  <Login />
  </div>
  }
  </div> 
}

export default App;
