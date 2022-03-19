//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const fname = "Shravani";
const lname = "Pariseka";
var currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    //ES6 {`${fname} ${lname}`}  
    <p>Created by {fname + " " + lname} </p>
    <p>Copyright {currentYear}.</p>
  </div>,
  document.getElementById("root")
);
