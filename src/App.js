import React, { useState } from "react";
import { evaluate, re } from 'mathjs';
import ButtonsContainer from "./components/ButtonsContainer";
import DisplayContainer from "./components/DisplayContainer";
import "./styles.css";

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  function handleClick(e) {
    if (result) {
      const calresult = result.includes('=') ? result.slice(0, -1) : result
      console.log(calresult);

      setResult(calresult.toString().includes("+ ", "- ", "* ", "/ ") ? calculate(calresult) : calresult)
    }
    const targetValue = e.target.name;
    setDisplay(display + targetValue);
  }

  function operatorClick(operator) {
    let lastCharacter = display.toString().slice(-2);
    let operatorsArray = ["+ ", "- ", "* ", "/ ", "% "];

    if (display === "" || operatorsArray.includes(lastCharacter)) return;

    setDisplay((prevDisplay) => {
      return prevDisplay + " " + operator + " ";
    });
  }

  function handleEqual() {
    if (display?.toString().slice(-2).includes("+ ", "- ", "* ", "/ ")) return;

    try {
      const resultValue = calculate(display);
      setResult(display + '=')
      setDisplay(resultValue);
    } catch (e) {
      // setDisplay("Error");
    }
  }

  function calculate(expression) {
    return evaluate(expression)
  }

  function clear() {
    setDisplay("");
    setResult("");
  }

  function backspace() {
    if (display.slice(-1) === " ") {
      setDisplay(display.slice(0, -2));
      return;
    }
    setDisplay(display.slice(0, -1));
  }
  return (
    <>
      <div className="container">
        <div className="calculator">
          <DisplayContainer
            display={display}
            result={result}
            backspace={backspace}
            clear={clear}
          />
          <ButtonsContainer
            operatorClick={operatorClick}
            handleClick={handleClick}
            handleEqual={handleEqual}
            clear={clear}
            backspace={backspace}
          />
        </div>
      </div>
    </>
  );
}

export default App;
