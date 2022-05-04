import React, { useState, useEffect } from 'react';
import won from '../../dist/images/won.png';
import { FaWindowClose } from 'react-icons/fa';

export default function Modal({ resetGame }) {
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


      <img src={won} alt="You Won!"></img>



      <div className="modal-Footer">
      <button onClick={() => resetGame()}>Play Again</button>
      </div>



    </div>
  );
}
