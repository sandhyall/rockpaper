'use client'
import { Button } from '@heroui/react';
import React, { useState } from 'react';
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";

const RockPaper = () => {
  // State variables
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  // Choices for Rock, Paper, and Scissors
  const choice = [
    { name: "Rock", icon: <FaRegHandRock size={100} /> },
    { name: "Paper", icon: <FaRegHandPaper size={100} /> },
    { name: "Scissors", icon: <FaRegHandScissors size={100} /> },
  ];

  // Get random choice for the computer
  const getRandomChoice = () => {
    return choice[Math.floor(Math.random() * choice.length)];
  };

  // Start a new game round
  const Game = (userSelectedChoice) => {
    const randomChoice = getRandomChoice();
    setUserChoice(userSelectedChoice);
    setComputerChoice(randomChoice);
    determineWinner(userSelectedChoice.name, randomChoice.name);
  };

  // Determine the winner based on user and computer choices
  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a draw!");
    } else if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      setResult("User wins!");
      setUserScore(userScore + 1);
    } else {
      setResult("Computer wins!");
      setComputerScore(computerScore + 1);
    }
  };

  // Reset the game state
  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  return (
    <div className="bg-white text-black p-6">
      <p className="text-red-400 text-center text-2xl mb-6">Welcome to Rock Paper Scissors Game</p>
      
      {/* Display Computer and User Choices */}
      <div className="flex justify-center mt-4">
        <div className="mr-8 text-center">
          <p>Computer</p>
          {computerChoice && computerChoice.icon}
          <p>{computerChoice && computerChoice.name}</p>
        </div>

        <div className="text-center">
          <p>User</p>
          {userChoice && userChoice.icon}
          <p>{userChoice && userChoice.name}</p>
        </div>
      </div>

      {/* Buttons for the user to select Rock, Paper, or Scissors */}
      <div className="text-center mt-4">
        {choice.map((ch, index) => (
          <button
            key={index}
            className="m-4 p-4 border rounded-lg hover:bg-gray-200"
            onClick={() => Game(ch)}
          >
            {ch.icon}
          </button>
        ))}
      </div>

      {/* Scores */}
      <div className="text-center mt-4">
        <div className="bg-orange-400 p-2 rounded-lg">
          <p className="text-lg">User Score: {userScore}</p>
        </div>
        <div className="bg-orange-400 p-2 rounded-lg mt-2">
          <p className="text-lg">Computer Score: {computerScore}</p>
        </div>
      </div>

    
      <p className="text-center mt-4 text-xl">{result}</p>

      
      <Button
        onClick={resetGame}
        className="bg-red-400 text-blue-600 block mx-auto mt-4 p-2 rounded-lg"
      >
        Reset
      </Button>
    </div>
  );
};

export default RockPaper;
