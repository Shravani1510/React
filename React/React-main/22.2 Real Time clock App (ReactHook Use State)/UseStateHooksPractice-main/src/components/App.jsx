import React, { useState } from "react";

function App() {
  setInterval(getTimeUpdated, 1000);
  const now = new Date().toLocaleTimeString("it-IT");
  const [time, latestTime] = useState(now);

  function getTimeUpdated() {
    const newTime = new Date().toLocaleTimeString("it-IT");
    latestTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTimeUpdated}>Get Time</button>
    </div>
  );
}

export default App;
