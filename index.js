import React from "react";
import ReactDOM from "react-dom";

// Basic render html on screen through react
ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);

//Javascript Expressions in JSX

const fname = "Vipul";
const lname = "Gajbhiye";
//const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}
    </h1>
    <p>This is a number : {5 + 9}</p>
  </div>,
  document.getElementById("root")
);

//JSX Attributes & Styling

const img = "https://picsum.photos/600";

ReactDOM.render(
  <div>
    <h1 className="heading">Random Image Generator</h1>
    <img src={img} alt="" />
  </div>,
  document.getElementById("root")
);

//Inline Styling in JSX

const customStyle = {
  color: "red",
  fontSize: "50px"
};

customStyle.color = "green";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);

//basic styling practice
const date = new Date();
const currentTime = date.getHours();

console.log(currentTime);

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

//import export in ES6
//index.js
import pi, { doublePi, triplePi } from "./math.js";
//or


ReactDOM.render(
  <ul>
    <li>{ pi } </li>
    <li>{ doublePi() } </li>
    <li>{ triplePi() } </li>
  </ul>,
  document.getElementById("root")
);

import * as pi  from "./math.js";
ReactDOM.render(
  <ul>
    <li>{ pi.default } </li>
    <li>{ pi.doublePi() } </li>
    <li>{ pi.triplePi() } </li>
  </ul>,
  document.getElementById("root")
);
//math.js
const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;  
export { doublePi, triplePi };
