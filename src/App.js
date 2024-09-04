import { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";

const difficultyLevel = {
  easy: { rows: 4, cols: 4 },
  medium: { rows: 6, cols: 6 },
  hard: { rows: 8, cols: 8 },
};
function App() {
  const [level, setLevel] = useState("easy");
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-2">
          <h1>Memory Game</h1>
        </div>
        <div className="col-12 d-flex justify-content-center mb-5">
          <div className="btn-group level-btn-group">
            <label
              className={`btn level-btn ${
                level === "easy" && "level-btn-easy"
              }`}
            >
              <input
                type="radio"
                name="easy"
                value="easy"
                checked={level === "easy"}
                onChange={(e) => setLevel(e.target.value)}
              />{" "}
              Easy
            </label>
            <label
              className={`btn level-btn ${
                level === "medium" && "level-btn-medium"
              }`}
            >
              <input
                type="radio"
                name="medium"
                value="medium"
                checked={level === "medium"}
                onChange={(e) => setLevel(e.target.value)}
              />{" "}
              Medium
            </label>
            <label
              className={`btn level-btn ${
                level === "hard" && "level-btn-hard"
              }`}
            >
              <input
                type="radio"
                name="hard"
                value="hard"
                checked={level === "hard"}
                onChange={(e) => setLevel(e.target.value)}
              />{" "}
              Hard
            </label>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <Grid {...difficultyLevel[level]} />
        </div>
      </div>
    </div>
  );
}

export default App;
