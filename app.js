import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {},
  [React.createElement("h1", {id: "child1", key: "1"}, "Hi from child 1"), React.createElement("h1", {id: "child2", key: "2"}, "Hi from child 2")]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
