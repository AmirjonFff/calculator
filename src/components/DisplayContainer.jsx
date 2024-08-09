import React from "react";

function DisplayContainer({ display, result, backspace, clear }) {
  return (
    <>
      <div className="display-container">
        <div className="display">
          <div className="input-field">{result}</div>
          <div className="answer-field">{display}</div>
        </div>
      </div>
    </>
  );
}

export default DisplayContainer;
