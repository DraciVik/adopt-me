const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Marko", animal: "cat", breed: "Stupid" }),
    React.createElement(Pet, { name: "Zutko", animal: "cat", breed: "Stray" }),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Stupid" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
