import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//const newNumber = numbers.map((x) => x * x);

////Map -Create a new array by doing something with each item in an array.
const newNumbersM = numbers.map((x) => x * 2);
console.log(newNumbersM);

//////Filter - Create a new array by keeping the items that return true.
const newNumbersF = numbers.filter((num) => num < 10);
console.log(newNumbersF);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumberR = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newNumberR);

////Find - find the first item that matches from an array.
const newNumberFD = numbers.find((num) => num > 10);
console.log(newNumberFD);

////FindIndex - find the index of the first item that matches.
const newNumberFI = numbers.findIndex((num) => num > 10);
console.log(newNumberFI);
