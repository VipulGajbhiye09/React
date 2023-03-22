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
