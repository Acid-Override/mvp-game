import React, { useState, useEffect } from 'react';
import lost from '../../dist/images/lost.png';
import { FaWindowClose } from 'react-icons/fa';

export default function ModalLoser({ resetGame }) {
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
      <button onClick={() => resetGame()}>Play Again</button>
      </div>



    </div>
  );
}