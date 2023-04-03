import "./App.css";
import { useCallback, useState } from "react";
function App() {
  const [inputValue, setinputValue] = useState("");
  const [findNum, setFindNum] = useState("");
  const onInputHandler = useCallback((e) => {
    const number = e.target.value;
    setinputValue(number);
  }, []);
  const fibonacci = useCallback((n) => {
    const memorize = {};
    function helper(n) {
      if (n in memorize) return memorize[n];
      if (n < 3) return 1;
      return (memorize[n] = helper(n - 1) + helper(n - 2));
    }
    setFindNum(helper(n - 1));
    return helper(n - 1);
  }, []);
  const onSubmitHandler = useCallback(() => {
    fibonacci(inputValue);
  }, [fibonacci, inputValue]);
  const onClearHandler = () => {
    setinputValue("");
    setFindNum("");
  };
  return (
    <>
      <p className="custom-heading">fibonacci number finder</p>
      <div className="custom-input">
        <input
          type="number"
          onChange={onInputHandler}
          placeholder="enter a number"
          value={inputValue}
        />
      </div>
      <div className="custom-button">
        <button onClick={onSubmitHandler}>Submit</button>
        <button onClick={onClearHandler}>Clear</button>
      </div>
      {findNum && (
        <div>
          <p className="result-message">fibonacci number at {inputValue} is</p>
          <p className="result">{findNum}</p>
        </div>
      )}
    </>
  );
}

export default App;
