import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2022, 2, 22, 9).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        //Ternary
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        //AND Operator
        //currentTime > 8 && <h1>Why are you still working? </h1>
      }
    </div>
  );
}

export default App;
