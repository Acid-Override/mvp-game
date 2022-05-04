import React, { useState, useEffect } from 'react';
import lost from '../../dist/images/lost.png';
import { FaWindowClose } from 'react-icons/fa';

export default function ModalLoser({ resetGame, currentWord, letterPoints }) {


  const points = letterPoints.length * 2

  return (
    <div className="modal-Container">
      <div
        className="modal-Title-Close-Button"
        role="button"
        tabIndex={0}
        onClick={() => resetGame()}
        onKeyDown={() => resetGame()}
      >
        <FaWindowClose className="close"/>
      </div>


      <img src={lost} alt="Sorry you lost"></img>



      <div className="modal-Footer">
        <div>
        <h1>{currentWord}</h1>
        <h2>Your Winning Letters : {letterPoints.join('')}</h2>
        <h2>Points this Round: {points}</h2>
        <br />
        </div>
      <button onClick={() => resetGame()}>Play Again</button>
      </div>



    </div>
  );
}