import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Marko", animal: "cat", breed: "Stupid" }),
    React.createElement(Pet, { name: "Zutko", animal: "cat", breed: "Stray" }),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Stupid" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
