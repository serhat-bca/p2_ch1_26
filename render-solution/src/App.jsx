import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  console.log("This component is rendered.");

  const increaseCounter = () => {
    // console.log("i am clicked");
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Render Solution with React Hooks</h2>
      <p>Counter: {counter}</p>
      <button onClick={increaseCounter}>+</button>
    </div>
  );
};

export default App;
