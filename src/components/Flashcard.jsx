import React from 'react';

function Flashcard({ question, answer, isFlipped, flipCard }) {
  return (
    <div className="flashcard" onClick={flipCard}>
      <h3>{isFlipped ? answer : question}</h3>
    </div>
  );
}

export default Flashcard;