import './App.css';
import {useState} from "react";

let timeHandler;
let temp = 0;
const start = (time, setTime) => {
  timeHandler = setInterval(() => {
    setTime(temp+=1);
  }, 1000)
  return time;
};

const clear = (setTime) => {
  temp = 0;
  setTime(0);
  stop();
};

const stop = () => {
  clearInterval(timeHandler)
};

const NewComponent = () => {
  const [time, setTime] = useState(0);
  return <div className="App-header">
    <h1>Timer</h1>
    <p>{time}</p>
    <div style={{display: "flex"}}>
      <button style={{marginRight: '10px'}} onClick={() => {start(time, setTime)}}>Start</button>
      <button style={{marginRight: '10px'}} onClick={() => {stop(setTime)}}>Stop</button>
      <button style={{marginRight: '10px'}} onClick={() => {clear(setTime)}}>Clear</button>
    </div>
  </div>
};
function App() {
  return (
    <div className="App">
      <NewComponent />
    </div>
  );
}

export default App;
