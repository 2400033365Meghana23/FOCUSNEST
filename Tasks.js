import { useState, useEffect } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <div className="card">
      <h2>📝 Tasks</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
