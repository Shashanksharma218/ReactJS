//Creating a simple React element.

// const heading = React.createElement("h1", {id: "heading"}, "Hello World!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/* 
    ~NESTED STRUCTURES~
*** Creating h1(child) inside a div(parent) which will be the child of root ***
*** can create multiple siblings using [] sq brackets 
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("h1", { id: "child1" }, "Child 1"),
    React.createElement("h2", {id: "child2"}, "Child 2")
  ]
);

ReactDOM.createRoot(document.body).render(parent);// this replaces the code instead of appending
