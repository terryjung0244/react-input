import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState({
    inputName: "",
    inputAge: "",
  });
  const onChangeFunc = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  console.log(input);
  return (
    <div>
      <div className="inputMainContainer">
        <input
          className="inputContainer"
          name={"inputName"}
          value={input.inputName}
          onChange={onChangeFunc}
          placeholder="Tell me your name"
        />
        <input
          className="inputContainer"
          name={"inputAge"}
          value={input.inputAge}
          onChange={onChangeFunc}
          placeholder="Tell me your age"
        />
      </div>
    </div>
  );
};

export default App;
