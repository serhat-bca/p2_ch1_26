import { useState } from "react";

const App = () => {
  const [yesCount, setYCounter] = useState(0);
  const [noCount, setNCounter] = useState(0);

  // const increaseYCount = () => setYCounter(yesCount + 1);
  // const increaseNCount = () => setNCounter(noCount + 1);
  return (
    <div>
      <h3>Recommendation App</h3>
      <p>Do you recommend this product?</p>
      <button onClick={() => setYCounter(yesCount + 1)}>Yes</button>
      <button onClick={() => setNCounter(noCount + 1)}>No</button>
      <p>Yes: {yesCount}</p>
      <p>No: {noCount}</p>
    </div>
  );
};

export default App;
