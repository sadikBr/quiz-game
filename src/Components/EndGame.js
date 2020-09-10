import React from 'react';

function EndGame(props) {
  return (
    <div className='game-end'>
      <h1>You have {props.score} correct answers</h1>
      <button onClick={props.resetGame}>Play Again</button>
    </div>
  );
}

export default EndGame;
