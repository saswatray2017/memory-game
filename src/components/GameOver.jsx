import React from "react";
import winner from "../winner.gif";

const GameOver = ({ resetGame }) => {
  return (
    <div className="game-over-container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-2">
          <img src={winner} className="game-over-img" alt="winner"></img>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button className="game-over-btn" onClick={resetGame}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
