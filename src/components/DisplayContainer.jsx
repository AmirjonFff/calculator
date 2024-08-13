import React from "react";

function DisplayContainer({ display, result}) {
  return (
    <>
      <div className="display-container">
        <div className="display">
          <div className="block">
            <div className="block">
              <i className="material-icons i-history">menu</i>
              <span className="block-title">Standard</span>
            </div>
            <i className="material-icons i-history">history</i>
          </div>
          <div className="input-field">{result}</div>
          <div className="answer-field">{display}</div>
        </div>
      </div>
    </>
  );
}

export default DisplayContainer;
