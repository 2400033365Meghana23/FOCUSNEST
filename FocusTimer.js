import { useState, useEffect } from "react";

function FocusTimer() {
  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="card">
      <h2>⏳ Focus Timer</h2>
      <h3>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h3>
      <button onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={() => setTime(25 * 60)}>Reset</button>
    </div>
  );
}

export default FocusTimer;
