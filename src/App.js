import React, { useState } from "react";
import { evaluate } from 'mathjs';
import ButtonsContainer from "./components/ButtonsContainer";
import DisplayContainer from "./components/DisplayContainer";
import "./styles.css";

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  function handleClick(e) {
    if (result) {
      const calresult = result.toString().slice(-1) === '=' ? result.slice(0, -1) : result
      if (calresult.toString().includes(" ")) {
        setResult('=' + calculate(calresult))
        const targetValue = e.target.name;
        setDisplay(targetValue);
        return
      }
    }

    const targetValue = e.target.name;
    setDisplay(display + targetValue);
  }

  function operatorClick(operator) {
    if (result) {
      const calresult = result.toString().slice(-1) === '=' ? result.slice(0, -1) : result
      setResult(calresult.toString().includes(" ") ? '=' + calculate(calresult) : calresult)
    }

    if (operator === "%") {
      if (display.toString().includes(' ')) {
        const procentNumber = display.slice(display.lastIndexOf(' ')) / 100;
        const displeyNumber = display.slice(0, display.lastIndexOf(' ')) + ' ' + procentNumber;
        setDisplay(displeyNumber)
        return
      }
      setDisplay(display / 100)
      return
    }

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
