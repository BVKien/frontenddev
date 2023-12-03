import React from "react";
import ReactDOM from "react-dom";

// Create Component App
function App() {
  return (
    <div>
      <h1>Hello ReactJS</h1>
    </div>
  );
}

// Render component App to #root element
ReactDOM.render(<App />, document.getElementById("root"));
