import React, { useEffect, useRef } from "react";
import cardFront from "../card-front.jpg";

const Card = ({ number, onCardFlip, isCardFlipped }) => {
  const ref = useRef();

  useEffect(() => {
    if (isCardFlipped) {
      ref.current.classList.add("flip");
    } else {
      ref.current.classList.remove("flip");
    }
  }, [isCardFlipped]);

  return (
    <div className="flip-card" ref={ref} onClick={onCardFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={cardFront} alt="Logo" />
        </div>
        <div className="flip-card-back">{number}</div>
      </div>
    </div>
  );
};

export default Card;
