import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Flower????" animal="Cat" breed="tonkinese" />
    <Pet name="Princess" animal="Dog" breed="labor" />
    <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
  </div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
