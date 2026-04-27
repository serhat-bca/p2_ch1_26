import { refresh } from "./main";

const App = () => {
  // jscode
  let counter = 0;

  const increaseCounter = () => {
    console.log("i am working here.");
    counter++;
    console.log("Updated Counter:", counter);
    refresh();
  };

  return (
    <div>
      <h2>Render Problem</h2>
      <p>Counter: {counter}</p>
      <button onClick={increaseCounter}>+</button>
    </div>
  );
};

export default App;
