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
