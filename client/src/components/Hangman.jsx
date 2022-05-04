import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import i0 from '../../dist/images/1.png';
import i1 from '../../dist/images/2.png';
import i2 from '../../dist/images/3.png';
import i3 from '../../dist/images/4.png';
import i4 from '../../dist/images/5.png';
import i5 from '../../dist/images/6.png';
import i6 from '../../dist/images/won.png';
import '../../dist/hangman.css';
import Modal from './Modal.jsx';
import ModalLoser from './ModalLoser.jsx';

export default function Hangman({ word, getNewWord }) {
  const allLetters = 'abcdefghijklmnopqrstuvwxyz';
  const imageArr = [i0, i1, i2, i3, i4, i5, i6];
  // const [images, setImages] = useState(imageArr)
  // const [curImage, setCurImage] = useState(i0)
  const [letter, setLetter] = useState([]);
  const [guesses, setGuesses] = useState(0);
  const [remainingLetters, setRemainingLetters] = useState(1);

  const handleClick = () => {
    console.log('you clicked me');
    //setGuesses((prev) => (prev + 1))
  };
  const letterClick = (ltr) => {
    console.log('ltr', ltr.target.value);
    setLetter([...letter, ltr.target.value]);
    // eslint-disable-next-line no-unused-expressions
    word.split('').some((x) => x === ltr.target.value)
      ? null
      : setGuesses((prev) => prev + 1);
  };
  const newWordClick = () => {
    getNewWord();
  };
  const resetGame = () => {
    console.log('resetting game');
    setGuesses(0);
    setLetter([]);
    setRemainingLetters(1);
    getNewWord();
  };
  //display letters in word or __ (based on guesses)
  const wordDisplay = word.split('').map((ltr) => {
    return letter.some((x) => x === ltr) ? <>{ltr}</> : <>{'_'}</>;
  });

  console.log('wordDisplay', wordDisplay);

  const letterKeys = allLetters.split('').map((ltr, index) => (
    <button
      key={index}
      value={ltr}
      onClick={letterClick}
      disabled={letter.includes(ltr) || guesses >= 5}
    >
      {ltr}
    </button>
  ));

  useEffect(() => {
    console.log('guesses', guesses);
  }, [guesses]);
  useEffect(() => {
    console.log('wordDisplay', wordDisplay);

    const wfil = wordDisplay.filter((x) => x.props.children === '_').length;
    console.log('wfil', wfil);
    setRemainingLetters(wfil);
  }, [letter]);

  return (
    <div className="Hangman">
      {guesses === 6 ? (
        <div className="gameOver">Game Over</div>
      ) : (
        <div className="playOn">
          <p>Pick a Letter</p>
          <p> # of guesses {guesses}</p>
        </div>
      )}
      {remainingLetters === 0 ? (
        <img src={imageArr[0]}></img>
      ) : (
        <img src={imageArr[guesses] ? imageArr[guesses] : imageArr[5]}></img>
      )}
      <br />

      <div className="Hangman-word">{wordDisplay}</div>
      <button onClick={handleClick}>ChangeImage</button>
      <br />
      <button onClick={newWordClick}>New Word</button>
      <br />
      <button onClick={resetGame}>Reset Game</button>
      <br />

      {remainingLetters === 0 &&
        createPortal(
          <div
            className={
              remainingLetters === 0
                ? 'modal-Background active'
                : 'modal-Background'
            }
          >
            <Modal openModal={remainingLetters === 0} resetGame={resetGame} />
          </div>,
          document.getElementById('portal')
        )}
      {guesses === 5 &&
        createPortal(
          <div
            className={
              guesses === 5 ? 'modal-Background active' : 'modal-Background'
            }
          >
            <ModalLoser openModal={guesses === 5} resetGame={resetGame} />
          </div>,
          document.getElementById('portal')
        )}
      <div>
        <p className="Hangman-btns">{letterKeys}</p>
        <br />
      </div>
    </div>
  );
}
