import React from "react";
import Button from "./Button";

function ButtonsContainer({ handleClick, operatorClick, handleEqual, clear, backspace }) {
  return (
    <div className="btn-wrapper">
      <div className="btn-container">
        <Button handleClick={() => operatorClick("^")} className={'btn'} name={'^'} value={'^'} />
        <Button handleClick={handleClick} className={'btn'} name={3} value={'sqr'} />
        <Button
          handleClick={() => clear()}
          className="btn"
          name={"AC"}
          value={"AC"}
        />
        <button onClick={backspace} className="AC-btn btn">
          <i className="material-icons">backspace</i>
        </button>
      </div>
      <div className="btn-container">
        <Button handleClick={handleClick} className={'btn'} name={'('} value={'('} />
        <Button handleClick={handleClick} className={'btn'} name={')'} value={')'} />
        <Button handleClick={() => operatorClick('%')} className={'btn'} name={'%'} value={'%'} />
        <Button
          handleClick={() => operatorClick("/")}
          className="btn"
          name={"/"}
          value={"/"}
        />
      </div>
      <div className="btn-container">
        <Button handleClick={handleClick} name={7} value={7} />
        <Button handleClick={handleClick} name={8} value={8} />
        <Button handleClick={handleClick} name={9} value={9} />
        <Button
          handleClick={() => operatorClick("*")}
          className="btn"
          name={"*"}
          value={"*"}
        />
      </div>
      <div className="btn-container">
        <Button handleClick={handleClick} name={4} value={4} />
        <Button handleClick={handleClick} name={5} value={5} />
        <Button handleClick={handleClick} name={6} value={6} />
        <Button
          handleClick={() => operatorClick("-")}
          className="btn"
          name={"-"}
          value={"-"}
        />
      </div>
      <div className="btn-container">
        <Button handleClick={handleClick} name={1} value={1} />
        <Button handleClick={handleClick} name={2} value={2} />
        <Button handleClick={handleClick} name={3} value={3} />
        <Button
          handleClick={() => operatorClick("+")}
          className="btn"
          name={"+"}
          value={"+"}
        />
      </div>
      <div className="btn-container">
        <Button handleClick={handleClick} name={0} value={0} />
        <Button handleClick={handleClick} name={'00'} value={'00'} />
        <Button handleClick={() => operatorClick(".")} name={'.'} value={'.'} />
        <Button
          className="btn-answer"
          handleClick={handleEqual}
          name={"="}
          value={"="}
        />
      </div>
    </div>
  );
}

export default ButtonsContainer;
