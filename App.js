import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import TasksPage from "./pages/TasksPage";
import FocusPage from "./pages/FocusPage";
import NotesPage from "./pages/NotesPage";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <BrowserRouter>
      <div className={`app ${dark ? "dark" : ""}`}>
        <header>
          <h1>🌿 FOCUSNEST</h1>
          <p>Your calm space to focus & grow</p>

      <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/focus">Focus</NavLink>
          <NavLink to="/notes">Notes</NavLink>
       </nav>


          <button onClick={() => setDark(!dark)}>
            {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <main className="dashboard">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/focus" element={<FocusPage />} />
            <Route path="/notes" element={<NotesPage />} />
          </Routes>
        </main>

        <footer>
          <p>FOCUSNEST © 2026</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
