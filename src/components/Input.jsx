import React from 'react';

function Input({ userAnswer, setUserAnswer, checkAnswer, toggleAnswer }) {
  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={userAnswer}
        onChange={handleInputChange}
        placeholder="Type your answer..."
      />
      <button onClick={checkAnswer}>Submit</button>
      <button onClick={toggleAnswer}>Show Answer</button>
    </div>
  );
}

export default Input;
