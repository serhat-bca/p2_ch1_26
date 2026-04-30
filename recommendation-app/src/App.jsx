import { useState } from "react";

const App = () => {
  const [recs, setRecs] = useState({ yes: 0, no: 0 });
  const [history, setHistory] = useState([]);
  const increaseYes = () => {
    // do not mutate the state
    // always copy to a new object
    // use a spread operator with ...
    setRecs({ ...recs, yes: recs.yes + 1 });
    setHistory([...history, "Y"]);
  };
  const increaseNo = () => {
    setRecs({ ...recs, no: recs.no + 1 });
    // setHistory([...history, "N"]);
    setHistory(history.concat("N"));
  };
  return (
    <div>
      <h3>Recommendation App</h3>
      <p>Do you recommend this product?</p>
      <button onClick={increaseYes}>Yes</button>
      <button onClick={increaseNo}>No</button>
      {history.length !== 0 && (
        <p>
          Yes: {recs.yes} - No: {recs.no}
        </p>
      )}

      {history.length === 0 ? (
        <p>No Recommendation Yet</p>
      ) : (
        <p>History: {history}</p>
      )}
    </div>
  );
};

export default App;

// const example = {name: "John", dob: "1987"}

// const increaseYCount = () => setYCounter(yesCount + 1);
// const increaseNCount = () => setNCounter(noCount + 1);
// const [yesCount, setYCounter] = useState(0);
// const [noCount, setNCounter] = useState(0);
