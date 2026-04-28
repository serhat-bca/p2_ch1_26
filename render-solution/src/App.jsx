import { useState } from "react";

const Counter = ({ countVar }) => {
  return (
    <div>
      <p>Counter: {countVar}</p>
    </div>
  );
};

// short version if you just want to return a simple thing
// const Counter = ({ countVar }) => <p>Counter: {countVar}</p>;

const App = () => {
  const [counter, setCounter] = useState(0);

  console.log("This component is rendered.");

  const increaseCounter = () => {
    // console.log("i am clicked");
    setCounter(counter + 1);
  };

  const updateCounter = (count) => {
    setCounter(counter + count);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div>
      <h2>Render Solution with React Hooks</h2>
      <Counter countVar={counter} />
      <button onClick={increaseCounter}>+</button>
      <button onClick={() => updateCounter(5)}>+5</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={() => updateCounter(-1)}>-</button>
      <button onClick={() => updateCounter(-5)}>-5</button>
    </div>
  );
};

export default App;
