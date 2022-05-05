import React, { useState, useEffect } from 'react';
import won from '../../dist/images/won.png';
import { FaWindowClose } from 'react-icons/fa';

export default function Modal({ resetGame, currentWord, letterPoints, user }) {
  const points = letterPoints.length * 2;

  return (
    <div className="modal-Container">
      <div
        className="modal-Title-Close-Button"
        role="button"
        tabIndex={0}
        onClick={() => resetGame()}
        onKeyDown={() => resetGame()}
      >
        <FaWindowClose className="close" />
      </div>

      <img src={won} alt="You Won!"></img>

      <div className="modal-Footer">
        <div>
          <h1>{currentWord}</h1>
          <h2>Points this Round: {points}</h2>
          <h1>PLUS 10 BONUS POINTS! {points + 10}</h1>
          {user.score && <h2>New Score: {user.score + points}</h2>}
          <br />
        </div>
        <div className="button-group">
          <button onClick={() => resetGame(1)}>HARD Word</button>
          <button onClick={() => resetGame(0)}>EASY Wordle</button>
        </div>
      </div>
    </div>
  );
}
