import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, { name: "Marko", animal: "cat", breed: "Stupid" }),
  //   React.createElement(Pet, { name: "Zutko", animal: "cat", breed: "Stray" }),
  //   React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Stupid" })
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Pet name="Zutko" animal="Cat" breed="Best ever" />
      <Pet name="Marko" animal="Cat" breed="Demon" />
      <Pet name="Donka" animal="Dog" breed="Mudd" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
