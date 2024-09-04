import React, { useEffect, useState } from "react";
import useGenerateRandomNumber from "../hooks/useGenerateRandomNumber";
import Card from "./Card";
import GameOver from "./GameOver";

const Grid = ({ rows = 6, cols = 6 }) => {
  const { randomNumbers, resetArray } = useGenerateRandomNumber(
    (rows * cols) / 2
  );
  const [openCardIndexes, setOpenCardIndexes] = useState([]);
  const [correctCardCombIndexes, setcorrectCardCombIndexes] = useState([]);
  const handleCardFlip = (i) => {
    if (openCardIndexes.length < 2) {
      setOpenCardIndexes([...openCardIndexes, i]);
    }
  };
  const handleGameRules = () => {
    if (
      randomNumbers[openCardIndexes[0]] === randomNumbers[openCardIndexes[1]]
    ) {
      setcorrectCardCombIndexes([
        ...correctCardCombIndexes,
        ...openCardIndexes,
      ]);
    }
    setOpenCardIndexes([]);
  };

  useEffect(() => {
    let timer;
    if (openCardIndexes.length === 2) {
      timer = setTimeout(handleGameRules, 3000);
    }
    return () => clearTimeout(timer);
  }, [openCardIndexes]);
  const handleReset = () => {
    setcorrectCardCombIndexes([]);
    setOpenCardIndexes([]);
    resetArray([]);
  };
  if (correctCardCombIndexes.length === randomNumbers.length)
    return <GameOver resetGame={handleReset} />;

  return (
    <div className="grid" style={{ "--rows": rows, "--cols": cols }}>
      {randomNumbers?.map((num, i) => (
        <div key={i} className="box">
          {!correctCardCombIndexes.includes(i) && (
            <Card
              key={i}
              number={num}
              onCardFlip={() => handleCardFlip(i)}
              isCardFlipped={openCardIndexes.includes(i)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Grid;
