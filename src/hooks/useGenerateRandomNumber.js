import { useEffect, useState } from "react";

const useGenerateRandomNumber = (gridSize = 18) => {
  const [randomArray, setRandomArray] = useState([]);

  const generateRandomArray = () => {
    // Step 1: Create an array with numbers 1 to 18 repeated twice
    const generateArray = () => {
      let array = [];
      for (let i = 1; i <= gridSize; i++) {
        array.push(i);
        array.push(i);
      }
      return array;
    };

    // Step 2: Shuffle the array
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    // Generate and shuffle the array
    const array = generateArray();
    const shuffledArray = shuffleArray(array);

    // Set the array in state
    setRandomArray(shuffledArray);
  };
  useEffect(() => {
    generateRandomArray();
  }, [gridSize]);
  return { randomNumbers: randomArray, resetArray: generateRandomArray };
};

export default useGenerateRandomNumber;
