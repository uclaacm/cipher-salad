import React from "react";
import "./App.css";
import Title from "./Components/Title/Title";
import GetInput from "./Components/Cesar/Input.js";

class App extends React.Component {
  handleInput = e => {};
  submitted = e => {};
  render = () => {
    return (
      <div className="App">
        <Title />
        <GetInput />
      </div>
    );
  };
}

export default App;
